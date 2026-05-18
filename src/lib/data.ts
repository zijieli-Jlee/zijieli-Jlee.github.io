export const personalInfo = {
  name: "Zijie Li",
  title: "Researcher on Generative Models",
  location: "San Jose, CA",
  email: "zjli.jlee@gmail.com",
  github: "https://github.com/zijieli-Jlee/",
  linkedin: "https://www.linkedin.com/in/zijie-li-827976103/",
  scholar: "https://scholar.google.com/citations?hl=zh-CN&user=PRESuXcAAAAJ",
  cv: "/data/Zijie_CV_2026MAY.pdf",
  profilePicture: "/profile.jpg",
  heroDescription:
    "I work on generative modeling for image generation at ByteDance Seed. My recent work explores unified text-image generation and understanding, with earlier research connecting numerical solvers, graph networks, and operator learning for physics prediction.",
};

export const workExperience = [
  {
    company: "ByteDance Seed, Image Generation",
    location: "San Jose, CA",
    position: "Research Scientist",
    period: "2025 - Present",
    achievements: [
      "Work on multi-modal post-training of image generation model.",
    ],
  },
  {
    company: "ByteDance Seed, Image Generation",
    location: "San Jose, CA",
    position: "Research Intern",
    period: "Summer 2024",
    achievements: [
      "Research on unified text/image generation with a single diffusion model.",
      "Developed Dual Diffusion for unified image generation and understanding, one of the very first multimodal masked language models with image generation capability.",
    ],
  },
  {
    company: "Carnegie Mellon University, Mechanical and AI Lab",
    location: "Pittsburgh, PA",
    position: "PhD",
    period: "2020 - 2025",
    achievements: [
      "Designed neural surrogate models for PDEs, particle-based fluids, molecular dynamics, and point-cloud motion.",
      "Built Transformer and graph-network architectures informed by numerical methods.",
    ],
  },
];

export const reviewerService = [
  {
    title: "Conference and Journal Reviewing",
    venues: ["CVPR", "NeurIPS", "ICLR", "ICML", "TMLR", "TNNLS", "NMI"],
    description:
      "Reviewed work across generative modeling and scientific machine learning.",
  },
];

export const projects = [
  {
    title: "MMCORE",
    subtitle: "Multimodal connection with aligned visual embeddings",
    image: "/images/mmcore-main-teaser-card.jpg",
    tags: ["Multimodal Generation", "Image Editing", "2026"],
    description:
      "A unified framework for multimodal image generation and editing that transfers VLM understanding into diffusion-based visual synthesis through representation-aligned latent embeddings.",
    links: [
      { label: "Project Page", href: "https://zijieli-jlee.github.io/mmcore-website/" },
      { label: "Paper", href: "https://arxiv.org/abs/2604.19902" },
    ],
  },
  {
    title: "Dual Diffusion",
    subtitle: "Unified Image Generation and Understanding",
    image: "/images/mask_diff.gif",
    tags: ["Diffusion", "Multimodal AI", "CVPR 2025"],
    description:
      "A unified image-text generation framework that combines discrete text diffusion with continuous image diffusion, turning a text-to-image model into a unified multimodal model through fine-tuning.",
    links: [
      { label: "Paper", href: "https://www.arxiv.org/abs/2501.00289" },
      { label: "Code", href: "https://github.com/zijieli-Jlee/Dual-Diffusion" },
    ],
  },
  {
    title: "Scalable Transformer for PDE Surrogates",
    subtitle: "Factorized attention for high-dimensional physics",
    image: "/images/FactFormer-Schematic.png",
    tags: ["Transformer", "PDE", "NeurIPS 2023"],
    description:
      "An axial factorized attention scheme that improves Transformer scalability on multi-dimensional PDE surrogate modeling tasks, easily scaling to 64 x 64 x 64 on a single GPU.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2305.17560" },
      { label: "Code", href: "https://github.com/BaratiLab/FactFormer" },
    ],
  },
  {
    title: "Prototype Memory GAN",
    subtitle: "Memory-augmented few-shot image generation",
    image: "/images/project_moca.png",
    tags: ["Few-shot Generation", "GAN", "Memory"],
    description:
      "A memory-augmented GAN for few-shot image generation, where generator feature maps are modulated by attending to feature vectors stored in a memory bank.",
    links: [
      { label: "Paper", href: "https://openreview.net/pdf?id=lY0-7bj0Vfz" },
      { label: "Code", href: "https://github.com/Crazy-Jack/MoCA_release" },
    ],
  },
  {
    title: "Physics-Informed Diffusion",
    subtitle: "High-fidelity flow field reconstruction",
    image: "/images/diffusion_sample.gif",
    tags: ["Diffusion", "Fluid Simulation", "JCP"],
    description:
      "A diffusion model for flow-field reconstruction that incorporates residual information into the reverse diffusion process, removes the need for paired data.",
    links: [
      {
        label: "Paper",
        href: "https://www.sciencedirect.com/science/article/pii/S0021999123000670",
      },
      {
        label: "Code",
        href: "https://github.com/BaratiLab/Diffusion-based-Fluid-Super-resolution",
      },
    ],
  },
  {
    title: "Operator Transformer",
    subtitle: "Discretization-adaptive operator learning",
    image: "/images/Schematic-OFormer.png",
    tags: ["Operator Learning", "Transformer", "TMLR"],
    description:
      "A Transformer encoder-decoder structure for PDE operator learning that adapts across discretization types.",
    links: [
      {
        label: "Paper",
        href: "https://openreview.net/forum?id=EPPqt3uERT&referrer=%5BTMLR%5D(%2Fgroup%3Fid%3DTMLR)",
      },
      { label: "Code", href: "https://github.com/BaratiLab/OFormer" },
    ],
  },
];

export const researchHighlights = [
  {
    name: "MMCORE: MultiModal COnnection with Representation Aligned Latent Embeddings",
    issuer: "arXiv",
    date: "2026",
    type: "Preprint",
    position: "First author",
    href: "https://arxiv.org/abs/2604.19902",
  },
  {
    name: "Dual Diffusion for Unified Image Generation and Understanding",
    issuer: "CVPR",
    date: "2025",
    type: "Peer-reviewed publication",
    position: "Equal contribution",
    href: "https://www.arxiv.org/abs/2501.00289",
  },
  {
    name: "Scalable Transformer for PDE Surrogate Modeling",
    issuer: "NeurIPS",
    date: "2023",
    type: "Peer-reviewed publication",
    position: "First author",
    href: "https://arxiv.org/abs/2305.17560",
  },
  {
    name: "Transformer for Partial Differential Equations' Operator Learning",
    issuer: "TMLR",
    date: "2023",
    type: "Peer-reviewed publication",
    position: "First author",
    href: "https://openreview.net/forum?id=EPPqt3uERT&referrer=%5BTMLR%5D(%2Fgroup%3Fid%3DTMLR)",
  },
];
