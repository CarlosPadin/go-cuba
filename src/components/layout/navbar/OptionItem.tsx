'use client'
import { FC, ReactElement } from "react";
import {
  ListItemIcon,
  ListItemText,
  useTheme,
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
  const theme = useTheme();
  const listItemSx = { color: theme.palette.text.primary };
  const t = useTranslations("Navbar");
  return (
    <>
      <ListItemIcon sx={listItemSx}>{icon}</ListItemIcon>
      <ListItemText sx={listItemSx}>{t(name)}</ListItemText>
    </>
  );
};

export default OptionItem;
