import { FC } from "react";
import { AccountCircle } from "@mui/icons-material";
import { useSession } from "@/src/hooks/mutations";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar } from "@mui/material";

const MenuAvatar: FC = () => {
  const { user, isLoading } = useSession();

  return (
    <>
      {isLoading ? (
        <CircularProgress size={18} color="inherit" />
      ) : user ? (
        <Avatar
          src={user.profileImage || undefined}
          alt={user.username}
          sx={{ width: 25, height: 25 }}
        />
      ) : (
        <AccountCircle />
      )}
    </>
  );
};

export default MenuAvatar;
