"use client";
import { FC, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  SnackbarCloseReason,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useTranslations } from "next-intl";

import { StepForm } from ".";
import { getSchemaForStep } from "@/src/lib/functions";
import {
  accountInfoFields,
  addressInfoFields,
  personalInfoFields,
} from "@/src/constants";
import {
  useCustomSnackbar,
  useResponsive,
} from "@/src/hooks";
import { CustomSnackbar } from "../custom-components";
import { useCreateUser } from "@/src/hooks/mutations/useCreateUser";

const steps = ["personalData", "address", "account"];

const RegisterForm: FC = () => {
  const t = useTranslations("UserRegistration");
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [activeStep, setActiveStep] = useState(0);
  const {
    open: snackbar,
    openSnackbar,
    handleClose,
  } = useCustomSnackbar();
  const [error, setError] = useState(false);
  const createUser = useCreateUser();
  const methods = useForm({
    resolver: yupResolver(getSchemaForStep(activeStep)),
    mode: "onTouched",
  });

  const onSubmit = async (data: any) => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      createUser.mutate(data, {
        onSuccess: () => {
          router.push("/");
        },

        onError: () => {
          openSnackbar();
          setError(true);

          setTimeout(() => {
            handleClose();
            setError(false);
          }, 5000);
        },
      });
    }
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
          <CustomSnackbar
            open={snackbar}
            closeHandler={handleClose}
            severity={error ? "error" : "success"}
            text={
              error ? t("formError") : t("completedForm")
            }
          />
        </form>
      </Box>
    </FormProvider>
  );
};

export default RegisterForm;
