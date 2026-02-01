"use client";
import { FC } from "react";
import Image from "next/image";

import {
  Avatar,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { IOwner } from "@/src/interfaces";
import { OwnerSkeleton } from "@/src/components/ui/skeletons";
import { getOwnerById } from "@/src/actions/owners";
import { getImageUrl } from "@/src/lib/functions";

interface OwnerInfoProps {
  ownerId: string;
}

const OwnerInfo: FC<OwnerInfoProps> = ({ ownerId }) => {
  const { data: owner, isLoading } = useQuery<IOwner>({
    queryKey: ["OWNERS_BY_ID", ownerId],
    queryFn: () => getOwnerById(ownerId),
  });

  return (
    <>
      {isLoading && <OwnerSkeleton />}
      {owner && (
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          mb={2}
        >
          <Avatar sx={{ width: 70, height: 70 }}>
            <Image
              src={getImageUrl(owner.profile_image, "avatars")}
              alt={owner.name}
              width={70}
              height={70}
            />
          </Avatar>
          <Stack direction={"column"} spacing={0}>
            <Typography variant="h5">
              {owner.name} {owner.last_name}
            </Typography>
            <Rating
              name="text-feedback"
              value={owner.rating}
              readOnly
              precision={0.5}
              sx={{ color: "#ec6d19" }}
              emptyIcon={
                <Star
                  fontSize="inherit"
                  sx={{ opacity: 0.55 }}
                />
              }
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default OwnerInfo;
