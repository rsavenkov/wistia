import React from "react";
import redirect from "nextjs-redirect";
import Head from "next/head";

export default function Error(): JSX.Element {
    const RedirectMain = redirect(`/`, { statusCode: 301 });
    return (
        <>
            <Head>
                <title>Диабетон. Проект: «Его разыскивает интуиция»</title>
            </Head>
            <RedirectMain>&nbsp;</RedirectMain>
        </>
    )
}