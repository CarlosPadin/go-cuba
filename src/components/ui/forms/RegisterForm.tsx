"use client";
import { FC, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useTranslations } from "next-intl";

import { StepForm } from ".";
import {
  getSchemaForStep,
  registerFormErrorMessage,
} from "@/src/lib/utils";
import {
  accountInfoFields,
  addressInfoFields,
  personalInfoFields,
} from "@/src/constants";
import {
  useSnackbar,
  useResponsive,
} from "@/src/hooks";
import { useCreateUser } from "@/src/hooks/mutations";

const steps = ["personalData", "address", "account"];

const RegisterForm: FC = () => {
  const t = useTranslations("UserRegistration");
  const router = useRouter();
  const { showSnackbar } = useSnackbar();
  const { isMobile } = useResponsive();
  const [activeStep, setActiveStep] = useState(0);
  const createUser = useCreateUser();
  const methods = useForm({
    resolver: yupResolver(getSchemaForStep(activeStep)),
    mode: "onTouched",
  });

  const onSubmit = async (data: any) => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
      return;
    }
    const formattedData = {
      ...data,
      dateOfBirth: data.dateOfBirth?.format("YYYY-MM-DD"),
    };

    createUser.mutate(formattedData, {
      onSuccess: () => {
        showSnackbar(t("completedForm"), "success");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      },

      onError: (error: any) => {
        const errorMsg = registerFormErrorMessage(
          error.message,
        );
        showSnackbar(t(errorMsg), "error");
      },
    });
  };

  const handleBack = () =>
    setActiveStep((prev) => prev - 1);

  return (
    <FormProvider {...methods}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{!isMobile && t(label)}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {activeStep === 0 && (
            <StepForm fields={personalInfoFields} />
          )}
          {activeStep === 1 && (
            <StepForm fields={addressInfoFields} />
          )}
          {activeStep === 2 && (
            <StepForm fields={accountInfoFields} />
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              {t("goBack")}
            </Button>
            <Button variant="contained" type="submit">
              {activeStep === steps.length - 1
                ? t("send")
                : t("goForward")}
            </Button>
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};

export default RegisterForm;
