'use server'
import { FC } from "react";
import Image from "next/image";

import {
  Avatar,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { getOwnerById } from "@/src/db/connection";

interface OwnerInfoProps {
  ownerId: string;
}

const OwnerInfo: FC<OwnerInfoProps> = ({ ownerId }) => {
  const owner = getOwnerById(ownerId);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      mb={2}
    >
      <Avatar sx={{ width: 70, height: 70 }}>
        <Image
          src={owner.profileImage}
          alt={owner.name}
          width={70}
          height={70}
        />
      </Avatar>
      <Stack direction={"column"} spacing={0}>
        <Typography variant="h6">
          {owner.name} {owner.lastName}
        </Typography>
        <Rating
          name="text-feedback"
          value={owner.rating}
          readOnly
          precision={0.5}
          emptyIcon={
            <Star
              style={{ opacity: 0.55 }}
              fontSize="inherit"
            />
          }
        />
      </Stack>
    </Stack>
  );
};

export default OwnerInfo;
