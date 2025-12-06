import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Grid } from "@mui/material";

import FormInput from "./FormInput";
import { FieldProps, UserFormData } from "@/src/interfaces";

interface StepFormProps {
  fields: FieldProps[]
}

const StepForm: FC<StepFormProps> = ({fields}) => {
  const { register, control, formState: {errors}, getValues } = useFormContext<UserFormData>();

  console.log('cotrol: ', getValues());
  return (
    <Grid container spacing={2} mt={5}>
      {fields.map((field) => (
        <Grid key={field.name} size={{ xs: 12, sm: 6}}>
          <FormInput
            name={field.name}
            label={field.label}
            type={field.type}
            control={control}
            register={register(field.name)}
            error={errors[field.name]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StepForm;
