export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "The Outdoor Look", src: "/logos/logo-the-outdoor-look.png", width: 380, height: 110 },
  { name: "Mida Living", src: "/logos/logo-mida-living.png", width: 290, height: 70 },
  { name: "AQ Beds", src: "/logos/logo-aq-beds.png", width: 180, height: 60 },
  { name: "Bonanza Sleep", src: "/logos/logo-bonanza-sleep.png", width: 260, height: 65 },
  { name: "Premmier Sleeps", src: "/logos/logo-premmier-sleeps.png", width: 210, height: 100 },
];
