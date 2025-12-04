'use client'
import { ChangeEvent, FC, useState } from "react";
import { Button, Avatar } from "@mui/material";
import { useTranslations } from "next-intl";

interface ImageInputProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}

const ImageInput: FC<ImageInputProps> = ({value, onChange}) => {
  const t = useTranslations('UserRegistration')
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (onChange) onChange(url);
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
      />
      <label htmlFor="upload-image">
        <Button variant="contained" component="span">
          {t('uploadImage')}
        </Button>
      </label>

      {value && (
        <Avatar
          src={value}
          alt="Image Preview"
          sx={{ width: 100, height: 100, mt: 2 }}
        />
      )}
    </div>
  );
}

export default ImageInput;