const projects = [
    {
      title: "RAG-Powered Document Q&A Chatbot",
      description:
        "AI-driven app that uses LangChain & Hugging Face for PDF-based Q&A with vector search via Pinecone.",
      image: "/assets/preview-rag-chatbot.gif",
      techStack: ["LangChain", "HuggingFace", "Pinecone", "Streamlit", "Docker"],
      github: "https://github.com/kishore7860/rag-chatbot",
      demo: "https://rag-chatbot-demo.streamlit.app/",
    },
    {
      title: "Predictive Maintenance (CMAPSS)",
      description:
        "Jet engine failure prediction model using LSTM, deployed via FastAPI & visualized with Streamlit.",
      image: "/assets/preview-maintenance.gif",
      techStack: ["TensorFlow", "Scikit-learn", "FastAPI", "AWS", "MLflow"],
      github: "https://github.com/kishore7860/predictive-maintenance",
      demo: "#",
    },
    {
      title: "Pneumonia Detection with X-rays",
      description:
        "ResNet-based PyTorch classifier deployed with Flask & Kubernetes for real-time inference.",
      image: "/assets/preview-xray.gif",
      techStack: ["PyTorch", "ResNet", "Flask", "Kubernetes", "Plotly"],
      github: "https://github.com/kishore7860/pneumonia-detection",
      demo: "#",
    },
  ];
  
  export default projects;