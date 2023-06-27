"use client";

import { Container, Grid } from "@mui/joy";
import algorithms from "@public/algorithms.json";
import AlgorithmCard from "@src/components/AlgorithmCard";

export default function Home() {
    return (
        <Container maxWidth="xl" sx={{ paddingY: 10 }} className="">
            <div className="fixed flex place-items-center items-center justify-center before:absolute before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[600px] after:w-[600px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>

            {algorithms.map((algo, index) => {
                return (
                    <div key={index}>
                        <hr className="" style={{ width: "100%" }} />
                        <div className="flex justify-between items-center">
                            <h1
                                className="flex-none pr-5 py-2"
                                style={{ fontSize: "28px" }}
                            >
                                {algo.title}
                            </h1>
                            <hr className="" style={{ width: "100%" }} />
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
                            {algo.types.map((type, index) => {
                                return (
                                    <div key={type + index}>
                                        <AlgorithmCard
                                            name={type.name}
                                            url={algo.link}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <br />
                        <br />
                    </div>
                );
            })}
        </Container>
    );
}
