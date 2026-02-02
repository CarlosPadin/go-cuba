import { FC } from "react";
import { Avatar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { useUserProfile } from "@/src/hooks/mutations";

const MenuAvatar: FC = () => {
  const { profile, loading } = useUserProfile();

  return (
    <>
      {loading ? (
        <CircularProgress size={18} color="inherit" />
      ) : profile ? (
        <Avatar
          src={profile.profile_image_url || undefined}
          alt={profile.username}
          sx={{ width: 25, height: 25 }}
        />
      ) : (
        <AccountCircle />
      )}
    </>
  );
};

export default MenuAvatar;
