"use client";
import { FC, ReactElement } from "react";
import {
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTranslations } from "next-intl";

interface IOptionItemProps {
  name: string;
  icon: ReactElement;
}

const OptionItem: FC<IOptionItemProps> = ({
  name,
  icon,
}) => {
 
  const t = useTranslations("Navbar");
  return (
    <>
      <ListItemIcon sx={{color:'#1E1B18'}}>{icon}</ListItemIcon>
      <ListItemText>{t(name)}</ListItemText>
    </>
  );
};

export default OptionItem;
