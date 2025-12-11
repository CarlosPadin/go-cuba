import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/src/constants";

const FooterDescription: FC = () => {
  return (
    <Stack direction={"column"} gap={2}>
      <Typography variant="body2" textAlign={{sm: 'center', md: 'initial'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Delectus ab consequuntur saepe facere,
        blanditiis vitae ullam! Totam saepe officia culpa!
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Voluptatum, dolore.
      </Typography>
      <Stack direction={"row"} gap={1} justifyContent={'center'}>
        {
          socialLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Image
                src={link.src}
                alt={link.alt}
                width={30}
                height={30}
              />
            </Link>

          ))
        }
      </Stack>
    </Stack>
  );
};

export default FooterDescription;
