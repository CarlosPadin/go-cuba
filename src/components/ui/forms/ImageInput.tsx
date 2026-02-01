'use client'
import { ChangeEvent, FC, useState } from "react";
import { Button, Avatar, CircularProgress, Alert } from "@mui/material";
import { useTranslations } from "next-intl";
import { supabase } from "@/src/lib/supabase/client";
import { resizeImage } from "@/src/lib/utils";

interface ImageInputProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}

const ImageInput: FC<ImageInputProps> = ({ value, onChange }) => {
  const t = useTranslations('UserRegistration');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(value || null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setError(null);
      const file = e.target.files?.[0];
      
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Por favor selecciona una imagen válida');
        return;
      }
      
      setUploading(true);

      // Resize image if it's bigger than 5MB
      let fileToUpload: Blob | File = file;
      
      if (file.size > 5 * 1024 * 1024) { 
        try {
          fileToUpload = await resizeImage(file, 1200, 1200, 0.8);
        } catch (resizeError) {
          console.error('Error al redimensionar:', resizeError);
          setError('Error al procesar la imagen');   // TODO: Traducir
          setUploading(false);
          return;
        }
      }


      // Local Preview
      const localUrl = URL.createObjectURL(file);
      setPreview(localUrl);

      const fileExt = file.name.split('.').pop();
      const filePath = `${Date.now()}.${fileExt}`;

      const { data, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, fileToUpload, {
          cacheControl: '3600',
          upsert: true // Overwrite existing file if already exists
        });

      if (uploadError) {
        throw uploadError;
      }

      // Obtain the public URL of the newly uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Actualizar el valor en el formulario
      if (onChange) {
        onChange(publicUrl);
      }

      setPreview(publicUrl);

    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Error al subir la imagen');   // TODO: Traducir
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        type="file"
        id="upload-image"
        style={{ display: "none" }}
        onChange={handleFileChange}
        disabled={uploading}
      />
      <label htmlFor="upload-image">
        <Button 
          variant="contained" 
          component="span"
          disabled={uploading}
        >
          {uploading ? <CircularProgress size={24} /> : t('uploadImage')}
        </Button>
      </label>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {preview && (
        <Avatar
          src={preview}
          alt="Image Preview"
          sx={{ width: 100, height: 100, mt: 2 }}
        />
      )}
    </div>
  );
}

export default ImageInput;