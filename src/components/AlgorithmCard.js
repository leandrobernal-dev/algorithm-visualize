"use client";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Link from "next/link";

export default function AlgorithmCard({ name, url, img }) {
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: 400,
                width: "100%",
                borderRadius: 5,
            }}
        >
            <Typography
                level="h2"
                fontSize="md"
                color="secondary"
                sx={{ mb: 0.5 }}
            >
                {name}
            </Typography>
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <Box sx={{ display: "flex" }}>
                <Link href={url}>
                    <Button>View</Button>
                </Link>
            </Box>
        </Card>
    );
}
