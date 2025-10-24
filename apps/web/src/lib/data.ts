import { Project } from "@shared/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Ingress Prime",
    image_url: "/images/projects/ingressprime.png",
    gif_url: "/images/projects/ingressprime.gif",
    live_demo_url: "https://ingress.com/en",
    youtube_video_id: "RJ52YyG4BJQ",
    short_description: `**Ingress Prime** is Niantic’s location-based AR strategy game where players 
      explore the real world to capture and link “portals” for their faction. I worked on the 
      Prime client rebuild in **Unity/C#**, delivering gameplay systems like **Rare Battle Beacons**, 
      **Kinetic Capsule**, and **Drone Mark II** while the live game continued operating at global scale. 
      My focus was performance, reliability, and safe releases: I introduced **object pooling** for 
      world-map entities to stabilize frame pacing, led multiple **ARDK** upgrades through API changes 
      and deprecations, and helped migrate in-app messaging to an in-house newsfeed with 
      multi-environment testing, staged rollouts, telemetry monitoring, and fast rollback paths.`,
    case_study_content: `I helped rebuild Niantic’s **Ingress Prime** client in **Unity/C#**, 
      shipping new gameplay systems while the live game kept running. I owned features like 
      **Rare Battle Beacons**, **Kinetic Capsule**, and **Drone Mark II**, partnering with 
      design, art, backend, and QA. I improved real-time performance with **object pooling** 
      for world-map entities, stabilizing frame pacing on mid-tier devices, and led multiple 
      **ARDK** upgrades by resolving API deprecations and validating across iOS/Android targets. 
      I also migrated in-app messaging to an in-house newsfeed with multi-environment testing, 
      staged rollouts, telemetry monitoring, and fast rollback paths. The outcome: new features 
      launched without disrupting live ops, smoother gameplay on the world map, and a client that 
      was easier to evolve as the product and AR stack advanced.`,
    case_study_bullets: `- **Role:** Senior Software Engineer, client systems (Unity/C#); gameplay, performance, 
    ARDK upgrades
    - **What I built:** **Rare Battle Beacons**, **Kinetic Capsule**, **Drone Mark II**; in-app 
    newsfeed migration (third-party → in-house)
    - **Technical highlights:** Object pooling for map/drone entities to cut allocations and smooth frame times. 
    Multiple **ARDK** upgrades (deprecations resolved, API changes wrapped, regression coverage on iOS/Android)
    - **Release & quality:** staged rollouts, multi-env testing, telemetry dashboards, and rapid rollback paths`,
  },
  {
    id: "2",
    title: "Car Town Racing",
    short_description: `**Car Town Racing** was a free-to-play mobile arcade racer developed at Glu after 
      its acquisition of Cie Games (the team behind Car Town/Racing Rivals). Built in **Unity/C#**, it 
      blended drift racing, car collection, and live events with short, high-intensity tracks designed 
      for iOS/Android. The title soft-launched in select markets, showcasing licensed cars, upgrade systems, 
      and event modes; community gameplay videos capture its look/feel even though distribution stayed limited.`,
    case_study_content: `I engineered **AI and gameplay systems** for Glu’s **Car Town Racing** (Unity/C#), 
      an arcade racer focused on fast laps, drifting, and car collection. My work included opponent 
      behaviors and tuning, race flow/state management, and designer tooling to author tutorials and 
      events quickly. I integrated crash/telemetry SDKs and profiling to stabilize frame pacing on 
      mid-tier devices, and partnered with design and art on handling/feel. The game soft-launched 
      in multiple regions, with public gameplay clips showing licensed cars, upgrades, and live 
      events—built to be snackable, high-polish racing on mobile.`,
    case_study_bullets: `- **Role:** Software Engineer (Unity/C#) — AI systems, race flow, designer tools
    - **Tech:** Unity/C#, custom AI controllers, spline tracks, ScriptableObject configs, profiler/telemetry
    - **What I built:** opponent AI & difficulty curves; event/race state machines; tutorial & UI hooks; SDKs for crash/telemetry
    - **Impact:** faster designer iteration (data-driven tutorial/event authoring); improved stability on mid-tier devices; supported soft-launch ops
    - **Notes:** Title tied to the Car Town brand (Cie Games → acquired by Glu in 2014); limited regional release with public gameplay on YouTube.`,
    image_url: "/images/projects/cartownracing.jpg",
    gif_url: "/images/projects/cartownracing.gif",
    youtube_video_id: "N3PUfvmbWNc",
  },
];

export async function getProjectById(id: string): Promise<Project | undefined> {
  return projects.find((project) => project.id === id);
}
