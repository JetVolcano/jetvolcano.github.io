// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";


// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
        title: "JetVolcano",
        favicon: "/jetvolcanoface.png",
        logo: {
            src: "./src/assets/logo.png"
        },
        social: [
            { icon: "seti:gitlab", label: "GitLab Personal", href: "https://gitlab.com/JetVolcano" },
            { icon: "seti:github", label: "GitHub", href: "https://github.com/JetVolcano" },
		],
        sidebar: [
            { label: "Home", link: "/home" }
        ],
		plugins: [
            
		]
    }), 
	sentry(),
	spotlightjs()
]});