const papers = [
  {
    "id": 1,
    "title": "Vec2Vec: Unsupervised Embedding-to-Embedding Translation",
    "url": "https://openreview.net/forum?id=jiCLUPq5xv",
    "summary": "Unsupervised embedding-to-embedding translation without paired data or encoder access. Demonstrates concrete leakage risks from vector DB breaches. Uses latent-GAN, cycle consistency, and VSP losses. Broad evaluation with BERT/T5/RoBERTa/CLIP backbones.",
    "tags": [
      "NeurIPS 2025",
      "2025",
      "Representation Learning",
      "Generative Models"
    ],
    "section": "vec2vec – NeurIPS 2025",
    "issue": 27
  },
  {
    "id": 2,
    "title": "BioCG: Constrained Generative Modeling for Biochemical Interaction Prediction",
    "url": "https://neurips.cc/virtual/2025/poster/117894",
    "summary": "BioCG reframes biochemical interaction prediction as a constrained sequence generation task instead of binary classification. It learns to generate valid interacting partners from a finite biochemical catalog using trie-guided decoding. Achieves state-of-the-art accuracy and strong generalization to unseen proteins and drugs.",
    "tags": [
      "NeurIPS 2025",
      "2025",
      "Drug Discovery",
      "Molecular Biology",
      "Generative Models",
      "Classification"
    ],
    "section": "NeurIPS 2025",
    "issue": 26
  },
  {
    "id": 3,
    "title": "CellVerse: Do Large Language Models Really Understand Cell Biology?",
    "url": "https://cellverse-cuhk.github.io/",
    "summary": "CELLVERSE introduces a benchmark to test whether large language models truly understand cell biology. It evaluates 14 LLMs across multi-omics, cell, drug, and gene-level reasoning tasks. Results show that LLMs exhibit limited biological understanding.",
    "tags": [
      "NeurIPS 2025",
      "2025",
      "Drug Discovery",
      "LLM",
      "Genomics"
    ],
    "section": "NeurIPS 2025",
    "issue": 26
  },
  {
    "id": 4,
    "title": "Measuring Scientific Capabilities of Language Models with a Systems Biology Dry Lab",
    "url": "https://arxiv.org/abs/2507.02083",
    "summary": "SCIGYM's dry lab uses SBML models to define biochemical or metabolic reaction networks. These models are numerically simulated with Tellurium to generate time-series data of molecular concentrations. LLMs then use this simulated data to design experiments and reconstruct missing reaction pathways.",
    "tags": [
      "NeurIPS 2025",
      "2025",
      "Molecular Biology",
      "LLM"
    ],
    "section": "NeurIPS 2025",
    "issue": 26
  },
  {
    "id": 5,
    "title": "BIOREASON: Incentivizing Multimodal Biological Reasoning within a DNA-LLM Model",
    "url": "https://arxiv.org/abs/2505.23579",
    "summary": "BioReason integrates DNA foundation models with large language models to enable biological reasoning. It combines existing methods like GRPO and multimodal embeddings in a well-engineered, interpretable system. First solid demo of AI-driven biological insight.",
    "tags": [
      "NeurIPS 2025",
      "2025",
      "Drug Discovery",
      "Molecular Biology",
      "LLM",
      "Interpretability",
      "Representation Learning"
    ],
    "section": "NeurIPS 2025",
    "issue": 26
  },
  {
    "id": 6,
    "title": "Unpaired Multi-Domain Causal Representation Learning",
    "url": "https://arxiv.org/abs/2302.00993",
    "summary": "NeurIPS 2023 — MIT, Broad, TUM Proves that shared latent causal variables can be uniquely identified from unpaired multi-domain data. Provides theoretical identifiability conditions and a linear method for recovering the shared causal graph.",
    "tags": [
      "2023",
      "Causal Learning",
      "Representation Learning"
    ],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 7,
    "title": "The Latent Space Hypothesis",
    "url": "https://arxiv.org/abs/2506.04515",
    "summary": "Arxiv — Oxford Proposes that all medical data—genomic, imaging, physiological, and textual—are projections of a shared latent physiological space. Presents a conceptual framework that unifies multimodal medical foundation models via a latent space, linking biological hierarchy, interpretability, and causal reasoning.",
    "tags": [
      "2025",
      "Causal Learning",
      "Representation Learning",
      "Genomics",
      "Interpretability"
    ],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 8,
    "title": "Score-based Causal Representation Learning: Linear and General Transformations",
    "url": "https://arxiv.org/abs/2402.00849",
    "summary": "JMLR — CMU, Amazon, RPI, DeepMind Examines how causal latent variables can be learned and identified when only observational data are available, but with implicit generative interventions. Proves identifiability conditions for nonlinear models and proposes a practical algorithm to recover the underlying causal structure.",
    "tags": [
      "2024",
      "Causal Learning",
      "Representation Learning",
      "Generative Models"
    ],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 9,
    "title": "Identifying General Mechanism Shifts in Linear Causal Representations",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/4ae163cb8788970e53b4fd9578141139-Abstract-Conference.html",
    "summary": "NeurIPS 2024 — UT Austin, Chicago, CMU Explores how to detect and characterize changes in causal mechanisms across multiple environments. Provides identifiability conditions for recognizing which causal relations have changed and proposes a method to recover the shared and shifted parts of a causal graph.",
    "tags": [
      "2024",
      "Causal Learning",
      "Representation Learning"
    ],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 10,
    "title": "Causal Representation Learning from Multimodal Biomedical Observations",
    "url": "https://openreview.net/forum?id=hjROBHstZ3",
    "summary": "ICLR 2025 — CMU, Broad, U Bristol Extends causal representation learning to multi-modal biomedical data such as gene expression, imaging, and physiological signals. Provides nonparametric identifiability theorems for shared and modality-specific causal variables.",
    "tags": [
      "2025",
      "Causal Learning",
      "Representation Learning",
      "Genomics"
    ],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 11,
    "title": "RedCDR: Dual Relation Distillation for Cancer Drug Response Prediction",
    "url": "https://ieeexplore.ieee.org/abstract/document/10536635",
    "summary": "",
    "tags": [
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Cancer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 12,
    "title": "Predicting cancer drug response using parallel heterogeneous graph convolutional networks with neighborhood interactions",
    "url": "https://pubmed.ncbi.nlm.nih.gov/35997568/",
    "summary": "",
    "tags": [
      "2022",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "GNN"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 13,
    "title": "Predicting Drug Response Based on Multi-Omics Fusion and Graph Convolution",
    "url": "https://pubmed.ncbi.nlm.nih.gov/34347616/",
    "summary": "",
    "tags": [
      "2021",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "Genomics"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 14,
    "title": "DeepCDR: a hybrid graph convolutional network for predicting cancer drug response",
    "url": "https://academic.oup.com/bioinformatics/article/36/Supplement_2/i911/6055929",
    "summary": "",
    "tags": [
      "2020",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "GNN"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 15,
    "title": "DeepDSC: A Deep Learning Method to Predict Drug Sensitivity of Cancer Cell Lines",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31150344/",
    "summary": "",
    "tags": [
      "2019",
      "Drug Response",
      "Drug Discovery",
      "Cancer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 16,
    "title": "GraphCDR: a graph neural network method with contrastive learning for cancer drug response prediction",
    "url": "https://academic.oup.com/bib/article/23/1/bbab457/6415314",
    "summary": "",
    "tags": [
      "2022",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "GNN",
      "Representation Learning"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 17,
    "title": "A subcomponent-guided deep learning method for interpretable cancer drug response prediction",
    "url": "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011382",
    "summary": "",
    "tags": [
      "2023",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "Interpretability"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 18,
    "title": "DRPreter: Interpretable Anticancer Drug Response Prediction Using Knowledge-Guided Graph Neural Networks and Transformer",
    "url": "https://pubmed.ncbi.nlm.nih.gov/36430395/",
    "summary": "",
    "tags": [
      "2022",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "GNN",
      "Transformer",
      "Interpretability"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 19,
    "title": "TGSA: protein–protein association-based twin graph neural networks for drug response prediction with similarity augmentation",
    "url": "https://academic.oup.com/bioinformatics/article/38/2/461/6374919",
    "summary": "",
    "tags": [
      "2022",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "Molecular Biology",
      "GNN"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 20,
    "title": "HANSynergy: Heterogeneous Graph Attention Network for Drug Synergy Prediction",
    "url": "https://pubs.acs.org/doi/10.1021/acs.jcim.4c00003",
    "summary": "",
    "tags": [
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "Knowledge Graph",
      "GNN",
      "Transformer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 21,
    "title": "Hi-GeoMVP: a hierarchical geometry-enhanced deep learning model for drug response prediction",
    "url": "https://academic.oup.com/bioinformatics/article/40/4/btae204/7645413",
    "summary": "",
    "tags": [
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Cancer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 22,
    "title": "A granularity-level information fusion strategy on hypergraph transformer for predicting synergistic effects of anticancer drugs",
    "url": "https://academic.oup.com/bib/article/25/1/bbad522/7571386",
    "summary": "",
    "tags": [
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "GNN",
      "Transformer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 23,
    "title": "TransCDR: a deep learning model for enhancing the generalizability of drug activity prediction through transfer learning and multimodal data fusion",
    "url": "https://link.springer.com/article/10.1186/s12915-024-02023-8",
    "summary": "",
    "tags": [
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Cancer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 24,
    "title": "ExplainMIX: Explaining Drug Response Prediction in Directed Graph Neural Networks with Multi-Omics Fusion",
    "url": "https://ieeexplore.ieee.org/abstract/document/10921675",
    "summary": "",
    "tags": [
      "2025",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "GNN",
      "Genomics",
      "Interpretability"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 25,
    "title": "DTLCDR: A target-based multimodal fusion deep learning framework for cancer drug response prediction",
    "url": "https://www.sciencedirect.com/science/article/pii/S2095177925001327",
    "summary": "",
    "tags": [
      "2025",
      "Drug Response",
      "Drug Discovery",
      "Cancer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 26,
    "title": "Interpretable Drug Response Prediction through Molecule Structure-aware and Knowledge-Guided Visible Neural Network",
    "url": "https://ieeexplore.ieee.org/abstract/document/10822211",
    "summary": "",
    "tags": [
      "2025",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "ACM BCB",
      "Molecular Biology",
      "Interpretability"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 27,
    "title": "A Drug-Drug Interaction Prediction Method Based on Atomic 3D Position Encoding and Elastic Message Passing Graph Neural Network",
    "url": "https://ieeexplore.ieee.org/document/10964840",
    "summary": "",
    "tags": [
      "2025",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "GNN"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 28,
    "title": "Improving drug response prediction based on two-space graph convolution",
    "url": "https://www.sciencedirect.com/science/article/pii/S0010482523003244",
    "summary": "",
    "tags": [
      "2023",
      "Drug Response",
      "Drug Discovery",
      "Cancer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 29,
    "title": "Graph Neural Networks With Multiple Prior Knowledge for Multi-Omics Data Analysis",
    "url": "https://ieeexplore.ieee.org/abstract/document/10148642",
    "summary": "",
    "tags": [
      "2023",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "Prior Knowledge",
      "GNN",
      "Genomics"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 30,
    "title": "DeepAEG: a model for predicting cancer drug response based on data enhancement and edge-collaborative update strategies",
    "url": "https://link.springer.com/article/10.1186/s12859-024-05723-8",
    "summary": "",
    "tags": [
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Cancer"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 31,
    "title": "Predicting Anti-Cancer Drug Response Based on Hypergraph Representation Learning",
    "url": "https://ieeexplore.ieee.org/abstract/document/10857656",
    "summary": "",
    "tags": [
      "2025",
      "Drug Response",
      "Drug Discovery",
      "Cancer",
      "Representation Learning"
    ],
    "section": "Drug Response Prediction and Related Topics",
    "issue": 22
  },
  {
    "id": 32,
    "title": "BounDr.E: Predicting Drug-likeness via Biomedical Knowledge Alignment and EM-like One-Class Boundary Optimization",
    "url": "https://icml.cc/virtual/2025/poster/44875",
    "summary": "Note: rejected ICLR and accepted at ICML",
    "tags": [
      "ICML 2025",
      "2025",
      "Drug Discovery"
    ],
    "section": "ICML 2025",
    "issue": 21
  },
  {
    "id": 33,
    "title": "BioDiscoveryAgent: An AI Agent for Designing Genetic Perturbation Experiments",
    "url": "https://openreview.net/forum?id=HAwZGLcye3",
    "summary": "BioDiscoveryAgent efficiently uses large language models to design genetic perturbation experiments, outperforming Bayesian optimization methods by 21% across six datasets.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "LLM"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 6.4
  },
  {
    "id": 34,
    "title": "Rethinking the generalization of drug target affinity prediction algorithms via similarity aware evaluation",
    "url": "https://openreview.net/forum?id=j7cyANIAxV",
    "summary": "Proposes a \"Similarity Aware Evaluation\" (SAE) framework to address biased evaluations in drug-target affinity prediction.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "Drug Discovery"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 7.5
  },
  {
    "id": 35,
    "title": "GeSubNet: Gene Interaction Inference for Disease Subtype Network Generation",
    "url": "https://openreview.net/forum?id=ja4rpheN2n",
    "summary": "Introduces GeSubNet, a framework for inferring gene interactions specific to disease subtypes using a deep generative model and GNN.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "GNN",
      "Generative Models",
      "Classification"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 36,
    "title": "Learning to Discover Regulatory Elements for Gene Expression Prediction",
    "url": "https://openreview.net/forum?id=Mfnh1Sqdwf",
    "summary": "Introduces Seq2Exp for predicting gene expression by integrating DNA sequences and epigenomic signals using an information bottleneck.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "Molecular Biology"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 7.5
  },
  {
    "id": 37,
    "title": "Diffusion Generative Modeling for Spatially Resolved Gene Expression Inference from Histology Images",
    "url": "https://openreview.net/forum?id=FtjLUHyZAO",
    "summary": "Introduces Stem, a conditional diffusion generative model to infer spatially resolved gene expressions from H&E stained histology images.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "Generative Models"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 6.67
  },
  {
    "id": 38,
    "title": "Learning Molecular Representation in a Cell",
    "url": "https://openreview.net/forum?id=BbZy8nI1si",
    "summary": "Introduces InfoAlign, learning molecular representations by integrating molecular structures with cellular responses (cell morphology and gene expression).",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "Molecular Biology"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 5.75
  },
  {
    "id": 39,
    "title": "Estimation of single-cell and tissue perturbation effect in spatial transcriptomics via Spatial Causal Disentanglement",
    "url": "https://openreview.net/forum?id=Tqdsruwyac",
    "summary": "Introduces Celcomen, a generative GNN that uses causal inference to disentangle intra- and inter-cellular gene regulation in spatial transcriptomics.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "GNN",
      "Causal Learning"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 6.67
  },
  {
    "id": 40,
    "title": "Interpretable Causal Representation Learning for Biological Data in the Pathway Space",
    "url": "https://openreview.net/forum?id=3Fgylj4uqL",
    "summary": "Introduces SENA-discrepancy-VAE, an approach for interpretable causal representation learning in biological data incorporating prior knowledge of biological pathways.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Genomics",
      "Causal Learning",
      "Interpretability",
      "Generative Models",
      "Representation Learning"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 6.0
  },
  {
    "id": 41,
    "title": "Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs in Language Models",
    "url": "https://openreview.net/forum?id=I4e82CIDxv",
    "summary": "Introduces sparse feature circuits — interpretable causal subnetworks of language models using fine-grained features identified by sparse autoencoders.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "LLM",
      "Causal Learning"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 42,
    "title": "Unlearning-based Neural Interpretations",
    "url": "https://openreview.net/forum?id=PBjCTeDL6o",
    "summary": "Introduces UNI, a novel approach for generating explanations of neural network decisions via an unlearning process to compute the baseline.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 43,
    "title": "KAN: Kolmogorov–Arnold Networks",
    "url": "https://openreview.net/forum?id=Ozo7qJ5vZi",
    "summary": "",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 44,
    "title": "Scaling and evaluating sparse autoencoders",
    "url": "https://openreview.net/forum?id=tcsZt9ZNKD",
    "summary": "Presents a comprehensive study on scaling and evaluating sparse autoencoders for extracting interpretable features from language models. Introduces k-sparse autoencoder with TopK activation.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "LLM"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.2
  },
  {
    "id": 45,
    "title": "Bilinear MLPs enable weight-based mechanistic interpretability",
    "url": "https://openreview.net/forum?id=gI0kPklUKS",
    "summary": "Introduces bilinear MLPs as an interpretable alternative to standard MLPs — fully expressible using linear operations with a third-order tensor.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "Molecular Biology"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 46,
    "title": "Enhancing Pre-trained Representation Classifiability can Boost its Interpretability",
    "url": "https://openreview.net/forum?id=GjfIZan5jN",
    "summary": "Investigates the relationship between interpretability and classifiability in pre-trained visual representations; proposes the Inherent Interpretability Score (IIS) metric.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "Representation Learning"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 47,
    "title": "NetFormer: An interpretable model for recovering dynamical connectivity in neuronal population dynamics",
    "url": "https://openreview.net/forum?id=bcTjW5kS4W",
    "summary": "Uses linearized attention to capture nonstationary and nonlinear structural information in neural networks.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "Transformer"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 48,
    "title": "Towards Automated Knowledge Integration From Human-Interpretable Representations",
    "url": "https://openreview.net/forum?id=NTHMw8S1Ow",
    "summary": "Introduces informed meta-learning with Informed Neural Processes (INPs) for automated and controllable selection of inductive biases.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 49,
    "title": "Shedding Light on Time Series Classification using Interpretability Gated Networks",
    "url": "https://openreview.net/forum?id=n34taxF0TC",
    "summary": "Introduces InterpGN, combining an interpretable Shapelet Bottleneck Model with a deep neural network via a gating function.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "Drug Discovery",
      "Classification"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 50,
    "title": "Large Language Models are Interpretable Learners",
    "url": "https://openreview.net/forum?id=hTphfqtafO",
    "summary": "Introduces LLM-based Symbolic Programs (LSPs) combining LLMs with symbolic programs to create interpretable and expressive predictive models.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "LLM"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 8.0
  },
  {
    "id": 51,
    "title": "Gnothi Seauton: Empowering Faithful Self-Interpretability in Black-Box Transformers",
    "url": "https://openreview.net/forum?id=UvMSKonce8",
    "summary": "Introduces AutoGnothi, enabling black-box transformer models to generate Shapley value explanations efficiently via a lightweight side network.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "Transformer"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 6.0
  },
  {
    "id": 52,
    "title": "From GNNs to Trees: Multi-Granular Interpretability for Graph Neural Networks",
    "url": "https://openreview.net/forum?id=KEUPk0wXXe",
    "summary": "Introduces Tree-like Interpretable Framework (TIF) for graph classification that transforms GNNs into hierarchical trees.",
    "tags": [
      "ICLR 2025",
      "2025",
      "Interpretability",
      "GNN",
      "Classification"
    ],
    "section": "ICLR 2025",
    "issue": 20,
    "score": 6.0
  },
  {
    "id": 53,
    "title": "Efficient Evolutionary Search Over Chemical Space with Large Language Models",
    "url": "https://arxiv.org/pdf/2406.16976",
    "summary": "",
    "tags": [
      "2024",
      "Molecule Optimization",
      "Drug Discovery",
      "LLM"
    ],
    "section": "Molecule Optimization",
    "issue": 19
  },
  {
    "id": 54,
    "title": "Equivariant 3D-conditional diffusion model for molecular linker design",
    "url": "https://www.nature.com/articles/s42256-024-00815-9",
    "summary": "",
    "tags": [
      "2024",
      "Molecule Optimization",
      "Drug Discovery",
      "Molecular Biology",
      "Generative Models"
    ],
    "section": "Molecule Optimization",
    "issue": 19
  },
  {
    "id": 55,
    "title": "Fostering Collective Action in Complex Societies Using Community-Based Agents",
    "url": "https://www.ijcai.org/Proceedings/2024/0024.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2024",
      "2024"
    ],
    "section": "IJCAI 2024",
    "issue": 18
  },
  {
    "id": 56,
    "title": "Zero-shot Learning for Preclinical Drug Screening",
    "url": "https://www.ijcai.org/Proceedings/2024/0234.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2024",
      "2024",
      "Drug Discovery"
    ],
    "section": "IJCAI 2024",
    "issue": 18
  },
  {
    "id": 57,
    "title": "Contrastive Learning Drug Response Models from Natural Language Supervision",
    "url": "https://www.ijcai.org/Proceedings/2024/0235.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2024",
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Representation Learning"
    ],
    "section": "IJCAI 2024",
    "issue": 18
  },
  {
    "id": 58,
    "title": "ZeroDDI: A Zero-Shot Drug-Drug Interaction Event Prediction Method with Semantic Enhanced Learning and Dual-Modal Uniform Alignment",
    "url": "https://www.ijcai.org/Proceedings/2024/0671.pdf",
    "summary": "Zero-shot drug-drug interaction event prediction using semantic enhanced learning and dual-modal uniform alignment.",
    "tags": [
      "IJCAI 2024",
      "2024",
      "Drug Discovery",
      "Molecular Biology",
      "Transformer",
      "Genomics"
    ],
    "section": "IJCAI 2024",
    "issue": 18
  },
  {
    "id": 59,
    "title": "SCTrans: Multi-scale scRNA-seq Sub-vector Completion Transformer for Gene-selective Cell Type Annotation",
    "url": "",
    "summary": "Multi-scale scRNA-seq sub-vector completion transformer for gene-selective cell type annotation.",
    "tags": [
      "IJCAI 2024",
      "2024",
      "Genomics",
      "Transformer",
      "scRNA-seq",
      "Classification"
    ],
    "section": "IJCAI 2024",
    "issue": 18
  },
  {
    "id": 60,
    "title": "Representing Molecules as Random Walks Over Interpretable Grammars",
    "url": "https://arxiv.org/abs/2403.08147",
    "summary": "",
    "tags": [
      "ICML 2024",
      "2024",
      "Molecular Biology",
      "Interpretability"
    ],
    "section": "ICML 2024",
    "issue": 17
  },
  {
    "id": 61,
    "title": "Drug Discovery with Dynamic Goal-aware Fragments",
    "url": "https://arxiv.org/abs/2310.00841",
    "summary": "",
    "tags": [
      "ICML 2024",
      "2024",
      "Drug Discovery"
    ],
    "section": "ICML 2024",
    "issue": 17
  },
  {
    "id": 62,
    "title": "Predicting Dose-Response Curves with Deep Neural Networks",
    "url": "https://openreview.net/pdf?id=MDAg5Q7IsI",
    "summary": "",
    "tags": [
      "ICML 2024",
      "2024",
      "Drug Response"
    ],
    "section": "ICML 2024",
    "issue": 17
  },
  {
    "id": 63,
    "title": "WISER: Weak supervISion and supErvised Representation learning to improve drug response prediction in cancer",
    "url": "https://arxiv.org/abs/2405.04078",
    "summary": "",
    "tags": [
      "ICML 2024",
      "2024",
      "Drug Response",
      "Drug Discovery",
      "Representation Learning"
    ],
    "section": "ICML 2024",
    "issue": 17
  },
  {
    "id": 64,
    "title": "Simulation-Free Schrödinger Bridges via Score and Flow Matching",
    "url": "https://arxiv.org/pdf/2307.03672",
    "summary": "Introduces [SF]²M for learning stochastic dynamics between arbitrary source and target distributions using score-based and flow-based generative modeling. First method to accurately model cell dynamics in high dimensions.",
    "tags": [
      "2023",
      "Optimal Transport",
      "scRNA-seq",
      "Genomics",
      "Generative Models"
    ],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 65,
    "title": "Predicting cell lineages using autoencoders and optimal transport",
    "url": "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007828",
    "summary": "",
    "tags": [
      "2020",
      "Optimal Transport",
      "scRNA-seq",
      "Genomics"
    ],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 66,
    "title": "TrajectoryNet: A Dynamic Optimal Transport Network for Modeling Cellular Dynamics",
    "url": "https://proceedings.mlr.press/v119/tong20a/tong20a.pdf",
    "summary": "",
    "tags": [
      "2020",
      "Optimal Transport",
      "scRNA-seq",
      "Genomics"
    ],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 67,
    "title": "Proximal Optimal Transport Modeling of Population Dynamics",
    "url": "https://proceedings.mlr.press/v151/bunne22a/bunne22a.pdf",
    "summary": "",
    "tags": [
      "2022",
      "Optimal Transport",
      "scRNA-seq",
      "Genomics"
    ],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 68,
    "title": "Manifold Interpolating Optimal-Transport Flows for Trajectory Inference",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2022/file/bfc03f077688d8885c0a9389d77616d0-Paper-Conference.pdf",
    "summary": "",
    "tags": [
      "2022",
      "Optimal Transport",
      "scRNA-seq",
      "Genomics"
    ],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 69,
    "title": "LLM Process: Numerical Predictive Distributions Conditioned on Natural Language",
    "url": "https://arxiv.org/pdf/2405.12856",
    "summary": "LLM Processes (LLMP) is a novel approach that uses LLMs to estimate probability distributions for numerical predictions, similar to how Gaussian Processes work. It quantifies uncertainty in predictions, can capture a wide range of function shapes, and can integrate textual information along with numerical data as input. Unlike Gaussian Processes, LLMP can represent more complex, potentially mul...",
    "tags": [
      "2024",
      "LLM"
    ],
    "section": "08/30/2024 Reading",
    "issue": 15
  },
  {
    "id": 70,
    "title": "Learning single-cell perturbation responses using neural optimal transport",
    "url": "https://www.nature.com/articles/s41592-023-01969-x",
    "summary": "",
    "tags": [
      "2023",
      "Optimal Transport",
      "Genomics"
    ],
    "section": "Optimal Transport",
    "issue": 14
  },
  {
    "id": 71,
    "title": "CMOT: Cross-Modality Optimal Transport for multimodal inference",
    "url": "https://link.springer.com/article/10.1186/s13059-023-02989-8",
    "summary": "",
    "tags": [
      "2023",
      "Optimal Transport"
    ],
    "section": "Optimal Transport",
    "issue": 14
  },
  {
    "id": 72,
    "title": "Multimodal Optimal Transport-based Co-Attention Transformer with Global Structure Consistency for Survival Prediction",
    "url": "https://openaccess.thecvf.com/content/ICCV2023/papers/Xu_Multimodal_Optimal_Transport-based_Co-Attention_Transformer_with_Global_Structure_Consistency_for_ICCV_2023_paper.pdf",
    "summary": "ICCV 2023",
    "tags": [
      "2023",
      "Optimal Transport",
      "Transformer"
    ],
    "section": "Optimal Transport",
    "issue": 14
  },
  {
    "id": 73,
    "title": "A deep profile of gene expression across 18 human cancers",
    "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10980029/",
    "summary": "",
    "tags": [
      "2024",
      "Interpretability",
      "Drug Discovery",
      "Genomics"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 74,
    "title": "Uncovering expression signatures of synergistic drug responses via ensembles of explainable machine-learning models",
    "url": "https://www.nature.com/articles/s41551-023-01034-0",
    "summary": "",
    "tags": [
      "2023",
      "Interpretability",
      "Drug Response",
      "Drug Discovery"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 75,
    "title": "An automatic integrative method for learning interpretable communities of biological pathways",
    "url": "https://academic.oup.com/nargab/article/4/2/lqac044/6617323",
    "summary": "",
    "tags": [
      "2022",
      "Interpretability"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 76,
    "title": "Adversarial deconfounding autoencoder for learning robust gene expression embeddings",
    "url": "https://academic.oup.com/bioinformatics/article/36/Supplement_2/i573/6055930",
    "summary": "",
    "tags": [
      "2020",
      "Interpretability",
      "Drug Discovery",
      "Genomics",
      "Representation Learning"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 77,
    "title": "A deep generative model of single-cell methylomic data",
    "url": "https://openreview.net/forum?id=Mg2DM0F3AY",
    "summary": "",
    "tags": [
      "2023",
      "Interpretability",
      "Genomics",
      "Generative Models"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 78,
    "title": "PAUSE: principled feature attribution for unsupervised gene expression analysis",
    "url": "https://link.springer.com/article/10.1186/s13059-023-02901-4",
    "summary": "",
    "tags": [
      "2023",
      "Interpretability",
      "Genomics"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 79,
    "title": "Extracting a low-dimensional description of multiple gene expression datasets reveals a potential driver for tumor-associated stroma in ovarian cancer",
    "url": "https://link.springer.com/article/10.1186/s13073-016-0319-7",
    "summary": "",
    "tags": [
      "2016",
      "Interpretability",
      "Drug Discovery",
      "Genomics"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 80,
    "title": "CoINcIDE: A framework for discovery of patient subtypes across multiple datasets",
    "url": "https://link.springer.com/article/10.1186/s13073-016-0281-4",
    "summary": "",
    "tags": [
      "2016",
      "Interpretability",
      "Classification"
    ],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 81,
    "title": "Transformers are Graph Neural Networks",
    "url": "https://graphdeeplearning.github.io/post/transformers-are-gnns/",
    "summary": "",
    "tags": [
      "2020",
      "GNN",
      "Transformer"
    ],
    "section": "GNN and Transformers",
    "issue": 12
  },
  {
    "id": 82,
    "title": "Relational inductive biases, deep learning, and graph networks",
    "url": "https://arxiv.org/abs/1806.01261",
    "summary": "",
    "tags": [
      "2018",
      "GNN"
    ],
    "section": "GNN and Transformers",
    "issue": 12
  },
  {
    "id": 83,
    "title": "CSGCL: Community-Strength-Enhanced Graph Contrastive Learning",
    "url": "https://www.ijcai.org/proceedings/2023/0229.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2023",
      "2023",
      "Representation Learning"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 84,
    "title": "Gapformer: Graph Transformer with Graph Pooling for Node Classification",
    "url": "https://www.ijcai.org/proceedings/2023/0244.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2023",
      "2023",
      "GNN",
      "Transformer",
      "Classification"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 85,
    "title": "Deep Multi-View Subspace Clustering with Anchor Graph",
    "url": "https://www.ijcai.org/proceedings/2023/0398.pdf",
    "summary": "2AE + spectral clustering",
    "tags": [
      "IJCAI 2023",
      "2023",
      "Classification"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 86,
    "title": "SemiGNN-PPI: Self-Ensembling Multi-Graph Neural Network for Efficient and Generalizable Protein-Protein Interaction Prediction",
    "url": "https://www.ijcai.org/proceedings/2023/0554.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2023",
      "2023",
      "Molecular Biology",
      "GNN"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 87,
    "title": "Toward Convex Manifolds: A Geometric Perspective for Deep Graph Clustering of Single-cell RNA-seq Data",
    "url": "https://www.ijcai.org/proceedings/2023/0540.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2023",
      "2023",
      "Molecular Biology",
      "Genomics",
      "Classification"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 88,
    "title": "Multi-view Contrastive Learning Hypergraph Neural Network for Drug-Microbe-Disease Association Prediction",
    "url": "https://www.ijcai.org/proceedings/2023/0537.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Representation Learning"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 89,
    "title": "MolHF: A Hierarchical Normalizing Flow for Molecular Graph Generation",
    "url": "https://www.ijcai.org/proceedings/2023/0556.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2023",
      "2023",
      "Molecular Biology",
      "Generative Models"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 90,
    "title": "A Systematic Survey of Chemical Pre-trained Models",
    "url": "https://www.ijcai.org/proceedings/2023/0760.pdf",
    "summary": "",
    "tags": [
      "IJCAI 2023",
      "2023",
      "Representation Learning"
    ],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 91,
    "title": "PyTorch Geometric Signed Directed: A Software Package on Graph Neural Networks for Signed and Directed Graphs",
    "url": "https://proceedings.mlr.press/v231/he24a/he24a.pdf",
    "summary": "",
    "tags": [
      "LoG 2023",
      "2023",
      "GNN"
    ],
    "section": "Learning on Graphs Conference 2023",
    "issue": 10
  },
  {
    "id": 92,
    "title": "A Latent Diffusion Model for Protein Structure Generation",
    "url": "https://proceedings.mlr.press/v231/fu24a/fu24a.pdf",
    "summary": "",
    "tags": [
      "LoG 2023",
      "2023",
      "GNN",
      "Molecular Biology",
      "Generative Models"
    ],
    "section": "Learning on Graphs Conference 2023",
    "issue": 10
  },
  {
    "id": 93,
    "title": "MUDiff: Unified Diffusion for Complete Molecule Generation",
    "url": "https://proceedings.mlr.press/v231/hua24a/hua24a.pdf",
    "summary": "",
    "tags": [
      "LoG 2023",
      "2023",
      "GNN",
      "Molecular Biology",
      "Generative Models"
    ],
    "section": "Learning on Graphs Conference 2023",
    "issue": 10
  },
  {
    "id": 94,
    "title": "Textbooks Are All You Need",
    "url": "https://arxiv.org/abs/2306.11644",
    "summary": "1/10 model params and 1/100 data size are enough if you have high quality data",
    "tags": [
      "2023",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 95,
    "title": "Will we run out of data? An analysis of the limits of scaling datasets in Machine Learning",
    "url": "https://arxiv.org/abs/2211.04325",
    "summary": "Around 2030, data shortage will happen",
    "tags": [
      "2022",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 96,
    "title": "LIMA: Less Is More for Alignment",
    "url": "https://arxiv.org/abs/2305.11206",
    "summary": "Difference in quality is more important than difference in quantity",
    "tags": [
      "2023",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 97,
    "title": "Calibrated Language Models Must Hallucinate",
    "url": "https://arxiv.org/abs/2311.14648",
    "summary": "We can't avoid hallucination — this might be the biggest problem for biomed research",
    "tags": [
      "2023",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 98,
    "title": "Consistency of a Recurrent Language Model With Respect to Incomplete Decoding",
    "url": "https://arxiv.org/abs/2002.02492",
    "summary": "Addresses problems of maximum likelihood: recursive generation and length bias",
    "tags": [
      "2020",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 99,
    "title": "The Curious Case of Neural Text Degeneration",
    "url": "https://arxiv.org/abs/1904.09751",
    "summary": "Exploring the importance of the temperature param, top-k, top-p",
    "tags": [
      "2019",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 100,
    "title": "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
    "url": "https://arxiv.org/abs/2305.10601",
    "summary": "Finding the best output from \"Thought\" with tree-based search",
    "tags": [
      "2023",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 101,
    "title": "Reasoning with Language Model is Planning with World Model",
    "url": "https://arxiv.org/abs/2305.14992",
    "summary": "Thought with Monte Carlo Tree Search",
    "tags": [
      "2023",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 102,
    "title": "Voyager: An Open-Ended Embodied Agent with Large Language Models",
    "url": "https://arxiv.org/abs/2305.16291",
    "summary": "AI agent using GPT-4 for autonomous exploration and skill acquisition in Minecraft",
    "tags": [
      "2023",
      "LLM"
    ],
    "section": "LLM",
    "issue": 4
  },
  {
    "id": 103,
    "title": "FluxGAT: Integrating Flux Sampling with Graph Neural Networks for Unbiased Gene Essentiality Classification",
    "url": "https://arxiv.org/abs/2403.18666",
    "summary": "FBA with GAT",
    "tags": [
      "2024",
      "GNN",
      "Classification"
    ],
    "section": "From Scholar Inbox",
    "issue": 3
  },
  {
    "id": 104,
    "title": "DynamicDTA: Drug-Target Binding Affinity Prediction Using Dynamic Descriptors and Graph Representation",
    "url": "https://arxiv.org/pdf/2505.11529",
    "summary": "",
    "tags": [
      "2025",
      "Drug Discovery"
    ],
    "section": "From Scholar Inbox",
    "issue": 3
  },
  {
    "id": 105,
    "title": "Chem Pile: A 250 GB Diverse and Curated Dataset",
    "url": "https://arxiv.org/pdf/2505.12534",
    "summary": "A 250 GB diverse and curated dataset for chemistry and drug discovery machine learning.",
    "tags": [
      "2025",
      "Drug Discovery",
      "Molecular Biology"
    ],
    "section": "From Scholar Inbox",
    "issue": 3
  },
  {
    "id": 106,
    "title": "MPRM: A Markov Path Rule Miner for Efficient and Interpretable Knowledge Graph Completion",
    "url": "https://arxiv.org/pdf/2505.12329",
    "summary": "",
    "tags": [
      "2025",
      "Interpretability",
      "Knowledge Graph"
    ],
    "section": "From Scholar Inbox",
    "issue": 3
  },
  {
    "id": 107,
    "title": "Informed, but Not Always Improved: Challenging the Benefit of Background Knowledge in GNNs",
    "url": "https://arxiv.org/pdf/2505.11023",
    "summary": "",
    "tags": [
      "2025",
      "GNN"
    ],
    "section": "From Scholar Inbox",
    "issue": 3
  },
  {
    "id": 108,
    "title": "A deep graph convolution network with attention for clustering scRNA-seq data",
    "url": "https://ieeexplore-ieee-org.ezp1.lib.umn.edu/document/10385323",
    "summary": "GCN encoder decoder with ZINB loss",
    "tags": [
      "BIBM 2023",
      "2023",
      "Molecular Biology",
      "GNN",
      "Transformer",
      "Genomics",
      "Classification"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 109,
    "title": "SEDGCN: Sentiment Enhanced Dual Graph Convolutional Networks for Detecting Adverse Drug Reactions",
    "url": "https://ieeexplore-ieee-org.ezp1.lib.umn.edu/document/10385261",
    "summary": "BERT + GCN + HGCN",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Transformer"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 110,
    "title": "Enhancing Protein Solubility Prediction through Pre-trained Language Models and Graph Convolutional Neural Networks",
    "url": "https://ieeexplore.ieee.org/document/10385858",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Molecular Biology",
      "GNN",
      "LLM",
      "Representation Learning"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 111,
    "title": "Predicting Associations between circRNAs and Drug Sensitivity using Heterogeneous Graphs and Graph Attention Networks",
    "url": "https://ieeexplore.ieee.org/document/10385513",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Response",
      "Drug Discovery",
      "Molecular Biology",
      "GNN",
      "Transformer"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 112,
    "title": "Multi-omics Sampling-based Graph Transformer for Synthetic Lethality Prediction",
    "url": "https://ieeexplore.ieee.org/document/10385953",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "GNN",
      "Transformer",
      "Genomics"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 113,
    "title": "Diffusion-Enhanced Graph Attention Network for Cancer Type Classification",
    "url": "https://ieeexplore.ieee.org/document/10386042",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Transformer",
      "Generative Models",
      "Classification"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 114,
    "title": "Imputing single-cell RNA-seq data by graph autoencoder with multi-kernel",
    "url": "https://ieeexplore.ieee.org/document/10385675",
    "summary": "GCN + AE",
    "tags": [
      "BIBM 2023",
      "2023",
      "Molecular Biology",
      "GNN",
      "Genomics"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 115,
    "title": "MoSCHG: Multi-omics Single-cell Classification based on Heterogeneous Graphs and Supervised Contrastive Learning",
    "url": "https://ieeexplore.ieee.org/document/10385631",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Genomics",
      "Representation Learning",
      "Classification"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 116,
    "title": "An Effective Microbial–drug Relation Extraction Model Based on Dual Graph Convolutional Networks",
    "url": "https://ieeexplore.ieee.org/document/10385893",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 117,
    "title": "Enhancing Cancer Gene Prediction through Aligned Fusion of Multiple PPI Networks Using Graph Transformer Models",
    "url": "https://ieeexplore.ieee.org/document/10385593",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Transformer"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 118,
    "title": "scGEMOC, A Graph Embedded Contrastive Learning Single-cell Multiomics Clustering Model",
    "url": "https://ieeexplore.ieee.org/document/10385267",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Genomics",
      "Representation Learning",
      "Classification"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 119,
    "title": "GTDDA: Graph Convolutional Network and Graph Transformer Structure for Drug Repositioning",
    "url": "https://ieeexplore.ieee.org/document/10386002",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Transformer"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 120,
    "title": "Integrating Heterogeneous Biological Networks and Ontologies for Improved Protein Function Prediction with Graph Neural Networks",
    "url": "https://ieeexplore.ieee.org/document/10385281",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Molecular Biology",
      "GNN"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 121,
    "title": "Graph Neural Networks with Geometric Edge Fusion and Point Downsampling for Drug-Target Interaction Prediction",
    "url": "https://ieeexplore.ieee.org/document/10385906",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 122,
    "title": "KSGTN-DDI: Key Substructure-aware Graph Transformer Network for Drug-drug Interaction Prediction",
    "url": "https://ieeexplore.ieee.org/document/10385795",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Transformer"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 123,
    "title": "HGTDG: An Interpretable Heterogeneous Graph Transformer Framework for Cancer Driver Gene Prediction",
    "url": "https://ieeexplore.ieee.org/document/10385343",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Transformer",
      "Interpretability"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 124,
    "title": "Integrating Multi-omics Data into A Gated Graph Convolutional Networks for Identifying Cancer Driver Genes and Function Modules",
    "url": "https://ieeexplore.ieee.org/document/10385796",
    "summary": "",
    "tags": [
      "BIBM 2023",
      "2023",
      "Drug Discovery",
      "GNN",
      "Genomics"
    ],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 125,
    "title": "Drug editing with RAG",
    "url": "https://openreview.net/forum?id=yRrPfKyJQ2",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Drug Discovery"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 126,
    "title": "LATENT 3D GRAPH DIFFUSION",
    "url": "https://openreview.net/forum?id=cXbnGtO0NZ",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Generative Models"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 127,
    "title": "Protein Structure with BERT",
    "url": "https://openreview.net/forum?id=6MRm3G4NiU",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Transformer"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 128,
    "title": "Retro synthesis modeling with Markov bridge",
    "url": "https://openreview.net/forum?id=770DetV8He",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 129,
    "title": "Biological knowledge graph",
    "url": "https://openreview.net/forum?id=jJCeMiwHdH",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Knowledge Graph"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 130,
    "title": "BioMolecular data with LLM",
    "url": "https://openreview.net/forum?id=Tlsdsb6l9n",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "LLM"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 131,
    "title": "Benchmark dataset with 3D conformer",
    "url": "https://openreview.net/forum?id=kFiMXnLH9x",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 132,
    "title": "Molecular generation with LLM",
    "url": "https://openreview.net/forum?id=9rPyHyjfwP",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "LLM"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 133,
    "title": "Atomic property prediction with catalysis and small molecule information",
    "url": "https://openreview.net/forum?id=PfPnugdxupc",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 134,
    "title": "Transformer Fusion with Optimal Transport",
    "url": "https://openreview.net/forum?id=LjeqMvQpen",
    "summary": "TM Flow looks interesting",
    "tags": [
      "ICLR 2024",
      "2024",
      "Transformer",
      "Optimal Transport"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 135,
    "title": "Pre-training Sequence, Structure, and Surface Features for Comprehensive Protein Representation Learning",
    "url": "https://openreview.net/forum?id=BEH4mGo7zP",
    "summary": "Sequence, Structure (Graph), Surface (Point Cloud) embedding",
    "tags": [
      "ICLR 2024",
      "2024",
      "Drug Discovery",
      "Molecular Biology",
      "Representation Learning"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 136,
    "title": "Evaluating Representation Learning on the Protein Structure Universe",
    "url": "https://openreview.net/forum?id=sTYuRVrdK3",
    "summary": "Benchmark for: Node-level (Inverse Folding, PPI Site Prediction, Metal Bind Site Prediction, PTM Site Prediction) and Graph-level (Fold Prediction, Gene Ontology Prediction, Reaction Class Prediction, Antibody Dev. Prediction)",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Representation Learning"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 137,
    "title": "Improving protein optimization with smoothed fitness landscapes",
    "url": "https://openreview.net/forum?id=jZPqf2G9Sw",
    "summary": "Gibbs sampling with Graph-based Smoothing",
    "tags": [
      "ICLR 2024",
      "2024",
      "Drug Response",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 138,
    "title": "Protein-Ligand Interaction Prior for Binding-aware 3D Molecule Diffusion Models",
    "url": "https://openreview.net/forum?id=qH9nrMNTIW",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Generative Models"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 139,
    "title": "Learning to design protein-protein interactions with enhanced generalization",
    "url": "https://openreview.net/forum?id=xcMmebCT7s",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 140,
    "title": "BMDock: Neural Probabilistic Protein-Protein Docking via a Differentiable Energy Model",
    "url": "https://openreview.net/forum?id=qg2boc2AwU",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 141,
    "title": "Str2Str: A Score-based Framework for Zero-shot Protein Conformation Sampling",
    "url": "https://openreview.net/forum?id=C4BikKsgmK",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Generative Models"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 142,
    "title": "MOL-INSTRUCTIONS: A LARGE-SCALE BIOMOLECULAR INSTRUCTION DATASET FOR LLMS",
    "url": "https://openreview.net/pdf?id=Tlsdsb6l9n",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "LLM"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 143,
    "title": "RDesign: Hierarchical Data-efficient Representation Learning for Tertiary Structure-based RNA Design",
    "url": "https://openreview.net/forum?id=RemfXx7ebP",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Representation Learning"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 144,
    "title": "Searching for High-Value Molecules Using Reinforcement Learning and Transformers",
    "url": "https://openreview.net/forum?id=nqlymMx42E",
    "summary": "New string representation like SMILES using RL",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Transformer"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 145,
    "title": "Self-supervised Pocket Pretraining via Protein Fragment-Surroundings Alignment",
    "url": "https://openreview.net/forum?id=uMAujpVi9m",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Representation Learning"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 146,
    "title": "Removing Biases from Molecular Representations via Information Maximization",
    "url": "https://openreview.net/forum?id=7TOs9gjAg1",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 147,
    "title": "GraphCare: Enhancing Healthcare Predictions with Personalized Knowledge Graphs",
    "url": "https://openreview.net/forum?id=tVTN7Zs0ml",
    "summary": "Bi-Directional Attention Augmented GNN",
    "tags": [
      "ICLR 2024",
      "2024",
      "GNN",
      "Transformer",
      "Knowledge Graph"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 148,
    "title": "Learning Over Molecular Conformer Ensembles: Datasets and Benchmarks",
    "url": "https://openreview.net/forum?id=NSDszJ2uIV",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 149,
    "title": "Domain-Agnostic Molecular Generation with Chemical Feedback",
    "url": "https://openreview.net/forum?id=9rPyHyjfwP",
    "summary": "Using LLM for molecule generation with feedback",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "LLM"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 150,
    "title": "Multimodal Molecular Pretraining via Modality Blending",
    "url": "https://openreview.net/forum?id=oM7Jbxdk6Z",
    "summary": "Blending 3D and 3D input for the encoding with Transformer",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology",
      "Transformer",
      "Representation Learning"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 151,
    "title": "Neural Atoms: Propagating Long-range Interaction in Molecular Graphs through Efficient Communication Channel",
    "url": "https://openreview.net/forum?id=CUfSCwcgqm",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 152,
    "title": "KW-Design: Pushing the Limit of Protein Design via Knowledge Refinement",
    "url": "https://openreview.net/forum?id=mpqMVWgqjn",
    "summary": "",
    "tags": [
      "ICLR 2024",
      "2024",
      "Molecular Biology"
    ],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 153,
    "title": "Benchmarking algorithms for generalizable single-cell perturbation response prediction",
    "url": "https://www.nature.com/articles/s41592-025-02980-0",
    "summary": "Comprehensive benchmark of 27 methods for single-cell perturbation response prediction (e.g., Perturb-seq, sciPlex) evaluated across 29 datasets using 6 complementary performance metrics. Systematically assesses generalizability to unseen cell types, perturbations, and conditions, including emerging foundation models. Key finding: cellular context embedding is critical for improving generalizability. Results provide practical guidance for method selection in single-cell perturbation research.",
    "tags": [
      "Nature Methods 2025",
      "2025",
      "Single-cell",
      "Genomics",
      "Perturbation Prediction",
      "Benchmarking",
      "Copilot"
    ],
    "section": "Nature Methods 2025",
    "issue": 35
  },
  {
    "id": 154,
    "title": "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html",
    "summary": "The seminal paper proposing the LLM-as-a-Judge paradigm. Introduces MT-Bench (multi-turn question set) and Chatbot Arena (crowdsourced pairwise comparison), demonstrating that GPT-4 agrees with human preferences approximately 80% of the time. Systematically analyzes limitations such as position bias and verbosity bias.",
    "tags": [
      "NeurIPS 2023",
      "2023",
      "LLM",
      "Evaluation",
      "Benchmarking",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 155,
    "title": "Benchmarking Foundation Models with Language-Model-as-an-Examiner",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/f64e55d03e2fe61aa4114e49cb654acb-Abstract-Datasets_and_Benchmarks.html",
    "summary": "A framework that dynamically evaluates LLMs as an \"examiner\". Performs iterative question generation and scoring to assess open-ended capabilities that fixed benchmarks cannot measure. Allows multi-faceted verification of knowledge depth and response consistency.",
    "tags": [
      "NeurIPS 2023",
      "2023",
      "LLM",
      "Evaluation",
      "Benchmarking",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 156,
    "title": "G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment",
    "url": "https://aclanthology.org/2023.emnlp-main.153/",
    "summary": "An NLG evaluation framework using GPT-4. Clarifies evaluation criteria through Chain-of-Thought reasoning and achieves higher correlation with human judgments than ROUGE and BERTScore via form-based scoring. Effectiveness demonstrated on text summarization and dialog generation tasks.",
    "tags": [
      "EMNLP 2023",
      "2023",
      "LLM",
      "Evaluation",
      "NLG",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 157,
    "title": "Can Large Language Models Be an Alternative to Human Evaluations?",
    "url": "https://aclanthology.org/2023.acl-long.870/",
    "summary": "A comprehensive study verifying whether LLMs (e.g., ChatGPT) can serve as substitutes for human evaluators. Compares annotation agreement rates, cost, and consistency with humans across multiple tasks, clarifying the effectiveness and limitations of LLMs for text generation quality evaluation.",
    "tags": [
      "ACL 2023",
      "2023",
      "LLM",
      "Evaluation",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 158,
    "title": "ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate",
    "url": "https://openreview.net/forum?id=FQepisCUWu",
    "summary": "An evaluation framework in which multiple LLM agents reach consensus through debate. Reduces position bias compared to single-agent evaluation and improves agreement with human judgments. Demonstrates superiority on MT-Bench and FairEval.",
    "tags": [
      "ICLR 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Multi-Agent",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 159,
    "title": "FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets",
    "url": "https://openreview.net/forum?id=rKBBs4xPMc",
    "summary": "A protocol that decomposes LLM capabilities into fine-grained skills such as \"logical reasoning\", \"factuality\", and \"instruction following\" for evaluation. Identifies weaknesses at the skill level and visualizes inter-model differences that are hidden behind overall scores.",
    "tags": [
      "ICLR 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Benchmarking",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 160,
    "title": "PROMETHEUS: Inducing Fine-grained Evaluation Capability in Language Models",
    "url": "https://openreview.net/forum?id=8euJaTveKw",
    "summary": "Open-source evaluator LLMs (7B and 13B) trained on feedback data with rubrics (scoring criteria). Achieves evaluation performance comparable to GPT-4 while being locally executable, avoiding reliance on proprietary APIs.",
    "tags": [
      "ICLR 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Open Source",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 161,
    "title": "LLMEVAL: A Preliminary Study on How to Evaluate Large Language Models",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/29934",
    "summary": "A multi-dimensional evaluation framework for Chinese and English LLMs. Systematizes the entire evaluation process including task design, evaluator selection, and scoring criteria, and conducts correlation analysis between GPT-4-based automated evaluation and human evaluation.",
    "tags": [
      "AAAI 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Benchmarking",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 162,
    "title": "AlignBench: Benchmarking Chinese Alignment of Large Language Models",
    "url": "https://aclanthology.org/2024.acl-long.703/",
    "summary": "A benchmark for evaluating the alignment of Chinese LLMs. Comprises 8 categories and over 700 questions, and introduces rule-calibration to GPT-4-based automatic scoring to reduce position bias. Widely used for comparing Chinese LLM capabilities.",
    "tags": [
      "ACL 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Benchmarking",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 163,
    "title": "Justice or Prejudice? Quantifying Biases in LLM-as-a-Judge",
    "url": "https://openreview.net/forum?id=DJDPlpd36N",
    "summary": "A study quantitatively evaluating 12 types of biases inherent in LLM judges (such as verbosity, authority, and beauty). Measures the type and magnitude of biases across models and proposes debiasing methods for more reliable evaluation.",
    "tags": [
      "ICLR 2025",
      "2025",
      "LLM",
      "Evaluation",
      "Bias",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 164,
    "title": "A Survey on Evaluation of Large Language Models",
    "url": "https://dl.acm.org/doi/10.1145/3641289",
    "summary": "A comprehensive survey of LLM evaluation methods (ACM TIST vol.15, no.3). Systematizes automated, human, and benchmark evaluation including LLM-as-a-Judge, and organizes multi-dimensional evaluation axes such as knowledge, reasoning, code generation, and ethics. Covers over 200 papers and identifies future research challenges.",
    "tags": [
      "ACM TIST 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Survey",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 165,
    "title": "HELM: Holistic Evaluation of Language Models",
    "url": "https://openreview.net/forum?id=iO4LZibEqW",
    "summary": "A comprehensive LLM evaluation framework covering 42 scenarios and 7 evaluation axes (Stanford CRFM). Proposes multi-faceted evaluation not dependent on a single metric and visualizes model tradeoffs. Establishes an evaluation design philosophy that forms the foundation of LLM-as-a-Judge research.",
    "tags": [
      "TMLR 2023",
      "2023",
      "LLM",
      "Evaluation",
      "Benchmarking",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 166,
    "title": "Large Language Models Are Not Yet Human-Level Evaluators for Abstractive Summarization",
    "url": "https://aclanthology.org/2023.findings-emnlp.278/",
    "summary": "A paper showing that LLMs (GPT-3.5/GPT-4) have not yet reached human-level performance as evaluators of abstractive summarization. Measures human correlation on dimensions such as consistency, relevance, and fluency, and clarifies the limitations and applicable conditions of LLM judges.",
    "tags": [
      "EMNLP Findings 2023",
      "2023",
      "LLM",
      "Evaluation",
      "NLG",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 167,
    "title": "Is ChatGPT a Good Sentiment Analyzer? A Preliminary Study",
    "url": "https://www.sciencedirect.com/science/article/pii/S0306457324000785",
    "summary": "A systematic evaluation of ChatGPT as a zero-shot sentiment analysis evaluator. Compares with existing SOTA across 18 datasets and 5 tasks, analyzing the effects of few-shot prompting, domain dependency, and bias. An empirical study demonstrating the scope and limitations of LLMs functioning as judges.",
    "tags": [
      "Information Processing & Management 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 168,
    "title": "Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference",
    "url": "https://openreview.net/forum?id=a6CpElUsur",
    "summary": "An open LLM evaluation platform built by LMSYS (TMLR Featured Certification). Adopts an Elo rating system where users compare outputs of 2 models and vote for the better one. Rankings of major models including GPT-4, Claude, and Llama based on human preferences. Extended version of the MT-Bench/Chatbot Arena paper from NeurIPS 2023.",
    "tags": [
      "TMLR 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Benchmarking",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 169,
    "title": "PROMETHEUS 2: An Open Source Language Model Specialized in Evaluating Other Language Models",
    "url": "https://openreview.net/forum?id=mAV4SFXIXU",
    "summary": "Open-source evaluator-only LLMs (7B and 8×7B) that succeed PROMETHEUS. Supports both direct evaluation and pairwise comparison, significantly improving correlation with GPT-4-based judges. Trained on rubric-annotated evaluation data to accommodate diverse evaluation criteria.",
    "tags": [
      "TMLR 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 170,
    "title": "Harnessing the Power of LLMs in Practice: A Survey on ChatGPT and Beyond",
    "url": "https://ieeexplore.ieee.org/document/10453110",
    "summary": "A survey systematizing LLM utilization in practical applications centered on ChatGPT (IEEE TKDE). Organizes evaluation methodologies across multiple tasks including text classification, information extraction, summarization, translation, and QA. Provides practical guidelines for using LLMs as judges.",
    "tags": [
      "IEEE TKDE 2024",
      "2024",
      "LLM",
      "Survey",
      "Evaluation",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 171,
    "title": "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing",
    "url": "https://dl.acm.org/doi/10.1145/3560815",
    "summary": "A survey systematically summarizing prompt-based NLP methods (ACM CSUR). Provides the theoretical foundation for evaluation prompt design widely used in LLM-as-a-Judge. Covers techniques used in evaluation tasks such as Chain-of-Thought and few-shot prompting.",
    "tags": [
      "ACM CSUR 2023",
      "2023",
      "LLM",
      "Prompting",
      "Survey",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 172,
    "title": "Can Large Language Models Serve as Evaluators for Code Summarization?",
    "url": "https://www.sciencedirect.com/science/article/pii/S0957417424003592",
    "summary": "A study automatically evaluating code summarization quality using GPT-3.5 and GPT-4 (Elsevier ESWA). Experimentally measures correlation, consistency, and reproducibility with human evaluation, clarifying the strengths and limitations of LLM judges in the code generation domain.",
    "tags": [
      "Expert Systems with Applications 2024",
      "2024",
      "LLM",
      "Evaluation",
      "Code",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 173,
    "title": "Large Language Models: A Survey",
    "url": "https://link.springer.com/article/10.1007/s10462-024-10808-0",
    "summary": "A comprehensive survey of the current state of large language models (Springer AI Review). Covers architecture, training, fine-tuning, and evaluation methods broadly. Organizes the trends and challenges of automated evaluation including LLM-as-a-Judge from multiple perspectives, providing an overview for evaluation researchers.",
    "tags": [
      "Artificial Intelligence Review 2024",
      "2024",
      "LLM",
      "Survey",
      "Evaluation",
      "Copilot"
    ],
    "section": "LLM as a Judge",
    "issue": 30
  },
  {
    "id": 174,
    "title": "Multi-Level Domain Adaptation and Contrastive Domain Isolation with Bilinear Fusion for Patient Drug Response Prediction",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/39048",
    "summary": "Proposes MACB-DRP, a hierarchical transfer learning framework for accurate patient drug response prediction. Performs domain adaptation at three levels (tissue, drug, sample) and models high-order gene-drug interactions via bilinear fusion. Contrastive anchoring enables sample-level alignment while preserving irreducible biological disparities. Achieves robust performance across multiple cancer types and nine drugs, enabling biologically guided cross-domain transfer from cell lines (GDSC) to patient samples (TCGA).",
    "tags": [
      "AAAI 2026",
      "2026",
      "Drug Response",
      "Domain Adaptation",
      "Transfer Learning",
      "Cancer",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 43
  },
  {
    "id": 175,
    "title": "Informative Subgraph Extraction with Deep Reinforcement Learning for Drug-Drug Interaction Prediction",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37105",
    "summary": "Proposes RISE-DDI, a reinforcement learning-based informative subgraph extraction framework for drug-drug interaction (DDI) prediction. Formulates subgraph extraction as a Markov Decision Process and uses a deep RL agent to dynamically select the most informative, context-specific subgraphs per drug pair. A structure-aware reward model incorporates both topological context from the knowledge graph and molecular features of the drug pair. Outperforms state-of-the-art baselines by up to 20% on DDI benchmarks in both transductive and inductive scenarios.",
    "tags": [
      "AAAI 2026",
      "2026",
      "Drug-Drug Interaction",
      "Reinforcement Learning",
      "Knowledge Graph",
      "GNN",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 43
  },
  {
    "id": 176,
    "title": "A graph-based learning approach to predict the effects of gene perturbations on molecular phenotypes",
    "url": "https://doi.org/10.64898/2026.03.20.712202",
    "summary": "Presents a general graph-based machine learning approach for predicting the effects of gene perturbations on molecular phenotypes. Uses diverse evidence graphs (e.g., protein-protein interaction networks) as input, evaluated with four learning methods across four phenotypes including cell morphology and cholesterol metabolism. Demonstrates high predictive accuracy, outperforms standard baselines, works well with small training sets, benefits from multiple evidence sources, and supports transfer to other unmeasured phenotypes.",
    "tags": [
      "bioRxiv 2026",
      "2026",
      "Gene Perturbation",
      "Graph Neural Network",
      "Molecular Phenotype",
      "Perturbational Genomics",
      "Copilot"
    ],
    "section": "bioRxiv 2026",
    "issue": 43
  },
  {
    "id": 177,
    "title": "Foundation metrics for evaluating effectiveness of healthcare conversations powered by generative AI | npj Digital Medicine",
    "url": "https://www.nature.com/articles/s41746-024-01074-z",
    "summary": "",
    "tags": [
      "2026"
    ],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 178,
    "title": "Generalizable AI predicts immunotherapy outcomes across cancers and treatments | medRxiv",
    "url": "https://www.medrxiv.org/content/10.1101/2025.05.01.25326820v2",
    "summary": "",
    "tags": [
      "2026"
    ],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 179,
    "title": "https://www.biorxiv.org/content/10.64898/2026.01.16.696667v1.full.pdf",
    "url": "https://www.biorxiv.org/content/10.64898/2026.01.16.696667v1.full.pdf",
    "summary": "",
    "tags": [
      "2026"
    ],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 180,
    "title": "[2501.06039] AI-powered virtual tissues from spatial proteomics for clinical diagnostics and biomedical discovery",
    "url": "https://arxiv.org/abs/2501.06039",
    "summary": "",
    "tags": [
      "2026"
    ],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 181,
    "title": "[2511.20490] MTBBench: A Multimodal Sequential Clinical Decision-Making Benchmark in Oncology",
    "url": "https://arxiv.org/abs/2511.20490",
    "summary": "",
    "tags": [
      "2026"
    ],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 182,
    "title": "RAG-Enhanced Collaborative LLM Agents for Drug Discovery\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37020",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 183,
    "title": "S²Drug: Bridging Protein Sequence and 3D Structure in Contrastive Representation Learning for Virtual Screening\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/36997",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 184,
    "title": "Topology-Enhanced and Label Correlation-Aware Model for Protein-Protein Interaction Prediction\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/36980",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 185,
    "title": "PLA-MGRA: Multi-Granularity and Relation-Aware Learning for Efficient and Generalizable Protein-Ligand Binding Affinity Prediction\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37031",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 186,
    "title": "ProtSAE: Disentangling and Interpreting Protein Language Models via Semantically-Guided Sparse Autoencoders\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37044",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 187,
    "title": "Generalizable Drug–Target Interaction Prediction via ESM-2 Representations and Progressive Contrastive Curriculum Learning\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37100",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 188,
    "title": "Refinement Contrastive Learning of Cell–Gene Associations for Unsupervised Cell Type Identification\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37059",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 189,
    "title": "GenePheno: Interpretable Gene Knockout-Induced Phenotype Abnormality Prediction from Gene Sequences\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37114",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 190,
    "title": "MedLA: A Logic-Driven Multi-Agent Framework for Complex Medical Reasoning with Large Language Models\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37052",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 191,
    "title": "Closer to Biological Mechanism: Drug-Drug Interaction Prediction from the Perspective of Pharmacophore\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/39229",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 192,
    "title": "CMedBench: A Comprehensive Benchmark for Efficient Medical Large Language Models\n\t\t\t\t\t\t\t| Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/39264",
    "summary": "",
    "tags": [
      "AAAI 2026",
      "2026"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 193,
    "title": "https://github.com/user-attachments/files/26216828/39048-Article.Text-43140-1-2-20260314.3.pdf",
    "url": "https://github.com/user-attachments/files/26216828/39048-Article.Text-43140-1-2-20260314.3.pdf",
    "summary": "",
    "tags": [],
    "section": "Create a New Issue Based on the Attached Paper",
    "issue": 43
  },
  {
    "id": 194,
    "title": "https://github.com/user-attachments/files/26216834/37105-Article.Text-41197-1-2-20260314.1.pdf",
    "url": "https://github.com/user-attachments/files/26216834/37105-Article.Text-41197-1-2-20260314.1.pdf",
    "summary": "",
    "tags": [],
    "section": "Create a New Issue Based on the Attached Paper",
    "issue": 43
  },
  {
    "id": 195,
    "title": "https://github.com/user-attachments/files/26216881/2026.03.20.712202v1.full.pdf",
    "url": "https://github.com/user-attachments/files/26216881/2026.03.20.712202v1.full.pdf",
    "summary": "",
    "tags": [],
    "section": "Create a New Issue Based on the Attached Paper",
    "issue": 43
  },
  {
    "id": 196,
    "title": "How to define an LLM-as-a-judge evaluator - Docs by LangChain",
    "url": "https://docs.langchain.com/langsmith/llm-as-judge",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 197,
    "title": "https://arxiv.org/pdf/2501.14851",
    "url": "https://arxiv.org/pdf/2501.14851",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 198,
    "title": "PlaceboBench: An LLM Hallucination Benchmark for Pharma | Blue Guardrails",
    "url": "https://www.blueguardrails.com/en/blog/placebo-bench-an-llm-hallucination-benchmark-for-pharma",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 199,
    "title": "https://www.reddit.com/r/LocalLLaMA/comments/1r9t259/introducing_legal_rag_bench/",
    "url": "https://www.reddit.com/r/LocalLLaMA/comments/1r9t259/introducing_legal_rag_bench/",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 200,
    "title": "LLM-as-a-Judge Simply Explained: The Complete Guide to Run LLM Evals at Scale - Confident AI",
    "url": "https://www.confident-ai.com/blog/why-llm-as-a-judge-is-the-best-llm-evaluation-method",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 201,
    "title": "Using LLM-as-a-Judge For Evaluation: A Complete Guide – Hamel's Blog - Hamel Husain",
    "url": "https://hamel.dev/blog/posts/llm-judge/",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 202,
    "title": "LLM-as-a-Judge - Langfuse",
    "url": "https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 203,
    "title": "LLM-As-Judge: 7 Best Practices & Evaluation Templates",
    "url": "https://www.montecarlodata.com/blog-llm-as-judge/",
    "summary": "",
    "tags": [],
    "section": "LLM as a judge",
    "issue": 30
  },
  {
    "id": 204,
    "title": "Machine Learning in Drug Discovery Symposium | Broad Institute",
    "url": "https://www.broadinstitute.org/machine-learning-drug-discovery-symposium/machine-learning-drug-discovery",
    "summary": "",
    "tags": [],
    "section": "ML in DD Broad Institute",
    "issue": 28
  },
  {
    "id": 205,
    "title": "https://openreview.net/forum?id=jiCLUPq5xv&referrer=%5Bthe%20profile%20of%20Rishi%20Dev%20Jha%5D(%2Fprofile%3Fid%3D~Rishi_Dev_Jha1",
    "url": "https://openreview.net/forum?id=jiCLUPq5xv&referrer=%5Bthe%20profile%20of%20Rishi%20Dev%20Jha%5D(%2Fprofile%3Fid%3D~Rishi_Dev_Jha1",
    "summary": "",
    "tags": [],
    "section": "vec2vec review @ Neurips 2025",
    "issue": 27
  },
  {
    "id": 206,
    "title": "https://openreview.net/pdf/e888694d2a8f7af2d08c2e095aab2d544eaae072.pdf",
    "url": "https://openreview.net/pdf/e888694d2a8f7af2d08c2e095aab2d544eaae072.pdf",
    "summary": "",
    "tags": [],
    "section": "Neurips 2025",
    "issue": 26
  },
  {
    "id": 207,
    "title": "https://github.com/user-attachments/assets/654f0c95-9249-4a57-8262-a6138da00ab3",
    "url": "https://github.com/user-attachments/assets/654f0c95-9249-4a57-8262-a6138da00ab3",
    "summary": "",
    "tags": [],
    "section": "Neurips 2025",
    "issue": 26
  },
  {
    "id": 208,
    "title": "[2505.07865] CellVerse: Do Large Language Models Really Understand Cell Biology?",
    "url": "https://arxiv.org/abs/2505.07865",
    "summary": "",
    "tags": [],
    "section": "Neurips 2025",
    "issue": 26
  },
  {
    "id": 209,
    "title": "https://github.com/user-attachments/assets/4db439af-af9b-48c2-83f4-a8c717507d27",
    "url": "https://github.com/user-attachments/assets/4db439af-af9b-48c2-83f4-a8c717507d27",
    "summary": "",
    "tags": [],
    "section": "Neurips 2025",
    "issue": 26
  },
  {
    "id": 210,
    "title": "https://github.com/user-attachments/assets/a3a0276d-b80d-47c7-aedd-843b39aaf5fe",
    "url": "https://github.com/user-attachments/assets/a3a0276d-b80d-47c7-aedd-843b39aaf5fe",
    "summary": "",
    "tags": [],
    "section": "Neurips 2025",
    "issue": 26
  },
  {
    "id": 211,
    "title": "GitHub - bowang-lab/BioReason: BioReason: Incentivizing Multimodal Biological Reasoning within a DNA-LLM Model  |  NeurIPS '25 · GitHub",
    "url": "https://github.com/bowang-lab/BioReason",
    "summary": "",
    "tags": [],
    "section": "Neurips 2025",
    "issue": 26
  },
  {
    "id": 212,
    "title": "https://github.com/user-attachments/assets/cbdc7392-8850-4a20-845d-f54af51e2dad",
    "url": "https://github.com/user-attachments/assets/cbdc7392-8850-4a20-845d-f54af51e2dad",
    "summary": "",
    "tags": [],
    "section": "Neurips 2025",
    "issue": 26
  },
  {
    "id": 213,
    "title": "https://github.com/user-attachments/assets/01fd1514-b9f5-45dc-910b-cbf95445c01c",
    "url": "https://github.com/user-attachments/assets/01fd1514-b9f5-45dc-910b-cbf95445c01c",
    "summary": "",
    "tags": [],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 214,
    "title": "https://github.com/user-attachments/assets/142f62b9-148d-461d-829e-faf4ec48f355",
    "url": "https://github.com/user-attachments/assets/142f62b9-148d-461d-829e-faf4ec48f355",
    "summary": "",
    "tags": [],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 215,
    "title": "https://github.com/user-attachments/assets/99171db1-2aa3-4102-a2da-8fe3715eb0e0",
    "url": "https://github.com/user-attachments/assets/99171db1-2aa3-4102-a2da-8fe3715eb0e0",
    "summary": "",
    "tags": [],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 216,
    "title": "https://github.com/user-attachments/assets/92b22cfd-1c18-4acd-8097-c649e162e5f2",
    "url": "https://github.com/user-attachments/assets/92b22cfd-1c18-4acd-8097-c649e162e5f2",
    "summary": "",
    "tags": [],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 217,
    "title": "https://github.com/user-attachments/assets/f41e0459-8de6-4885-bb31-699764bb31a4",
    "url": "https://github.com/user-attachments/assets/f41e0459-8de6-4885-bb31-699764bb31a4",
    "summary": "",
    "tags": [],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 218,
    "title": "https://github.com/user-attachments/assets/9c179fc8-6a67-46f4-8de0-23d7f7c8e9d8",
    "url": "https://github.com/user-attachments/assets/9c179fc8-6a67-46f4-8de0-23d7f7c8e9d8",
    "summary": "",
    "tags": [],
    "section": "Causal & Geometric Representation Learning",
    "issue": 24
  },
  {
    "id": 219,
    "title": "ICML Poster Identifying biological perturbation targets through causal differential networks",
    "url": "https://icml.cc/virtual/2025/poster/45518",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 220,
    "title": "[2410.03380] Identifying biological perturbation targets through causal differential networks",
    "url": "https://arxiv.org/abs/2410.03380",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 221,
    "title": "ICML Poster PertEval-scFM: Benchmarking Single-Cell Foundation Models for Perturbation Effect Prediction",
    "url": "https://icml.cc/virtual/2025/poster/43799",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 222,
    "title": "https://www.biorxiv.org/content/10.1101/2024.10.02.616248v2",
    "url": "https://www.biorxiv.org/content/10.1101/2024.10.02.616248v2",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 223,
    "title": "ICML Poster sciLaMA: A Single-Cell Representation Learning Framework to Leverage Prior Knowledge from Large Language Models",
    "url": "https://icml.cc/virtual/2025/poster/46669",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 224,
    "title": "https://www.biorxiv.org/content/10.1101/2025.01.28.635153v2",
    "url": "https://www.biorxiv.org/content/10.1101/2025.01.28.635153v2",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 225,
    "title": "ICML Poster scSSL-Bench: Benchmarking Self-Supervised Learning for Single-Cell Data",
    "url": "https://icml.cc/virtual/2025/poster/44286",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 226,
    "title": "[2506.10031] scSSL-Bench: Benchmarking Self-Supervised Learning for Single-Cell Data",
    "url": "https://arxiv.org/abs/2506.10031",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 227,
    "title": "ICML Poster Enforcing Latent Euclidean Geometry in Single-Cell VAEs for Manifold Interpolation",
    "url": "https://icml.cc/virtual/2025/poster/45983",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 228,
    "title": "https://openreview.net/forum?id=a72vorQK8v",
    "url": "https://openreview.net/forum?id=a72vorQK8v",
    "summary": "",
    "tags": [],
    "section": "ICML2025",
    "issue": 21
  },
  {
    "id": 229,
    "title": "https://github.com/user-attachments/assets/d640aa34-2e44-4af9-8dcb-3cc315caffc9",
    "url": "https://github.com/user-attachments/assets/d640aa34-2e44-4af9-8dcb-3cc315caffc9",
    "summary": "",
    "tags": [],
    "section": "Molecule Optimization",
    "issue": 19
  },
  {
    "id": 230,
    "title": "https://github.com/user-attachments/assets/d5e372d5-1152-4e2c-ae92-68e76c6a2414",
    "url": "https://github.com/user-attachments/assets/d5e372d5-1152-4e2c-ae92-68e76c6a2414",
    "summary": "",
    "tags": [],
    "section": "Molecule Optimization",
    "issue": 19
  },
  {
    "id": 231,
    "title": "https://github.com/user-attachments/assets/1ccf7de7-9303-4aef-868a-7f410b0c4a75",
    "url": "https://github.com/user-attachments/assets/1ccf7de7-9303-4aef-868a-7f410b0c4a75",
    "summary": "",
    "tags": [],
    "section": "IJCAI2024",
    "issue": 18
  },
  {
    "id": 232,
    "title": "https://github.com/user-attachments/assets/4896b7e0-2c54-4676-a174-bad6a9afc572",
    "url": "https://github.com/user-attachments/assets/4896b7e0-2c54-4676-a174-bad6a9afc572",
    "summary": "",
    "tags": [],
    "section": "IJCAI2024",
    "issue": 18
  },
  {
    "id": 233,
    "title": "https://github.com/user-attachments/assets/645c63b4-5312-49be-9d21-0a086bf898ec",
    "url": "https://github.com/user-attachments/assets/645c63b4-5312-49be-9d21-0a086bf898ec",
    "summary": "",
    "tags": [],
    "section": "IJCAI2024",
    "issue": 18
  },
  {
    "id": 234,
    "title": "https://github.com/user-attachments/assets/13d9e069-d283-4bef-a87c-648f76b24103",
    "url": "https://github.com/user-attachments/assets/13d9e069-d283-4bef-a87c-648f76b24103",
    "summary": "",
    "tags": [],
    "section": "IJCAI2024",
    "issue": 18
  },
  {
    "id": 235,
    "title": "https://github.com/user-attachments/assets/c78dbdac-bc3b-460b-92b5-2cf36563fb79",
    "url": "https://github.com/user-attachments/assets/c78dbdac-bc3b-460b-92b5-2cf36563fb79",
    "summary": "",
    "tags": [],
    "section": "IJCAI2024",
    "issue": 18
  },
  {
    "id": 236,
    "title": "https://github.com/user-attachments/assets/49014424-c66e-4364-a4e9-948fa216da9b",
    "url": "https://github.com/user-attachments/assets/49014424-c66e-4364-a4e9-948fa216da9b",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 237,
    "title": "GitHub - shiningsunnyday/RandomWalk: Representing Molecules over Interpretable Grammars (ICML 2024 Spotlight) · GitHub",
    "url": "https://github.com/shiningsunnyday/polymer_walk",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 238,
    "title": "https://github.com/user-attachments/assets/da9840e4-3b4c-4167-895f-f2b465498a8f",
    "url": "https://github.com/user-attachments/assets/da9840e4-3b4c-4167-895f-f2b465498a8f",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 239,
    "title": "GitHub - SeulLee05/GEAM: Official code repository for the paper Drug Discovery with Dynamic Goal-aware Fragments (ICML 2024) · GitHub",
    "url": "https://github.com/SeulLee05/GEAM",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 240,
    "title": "https://github.com/user-attachments/assets/442fcef6-9047-4c5b-81a1-e21a01919bf8",
    "url": "https://github.com/user-attachments/assets/442fcef6-9047-4c5b-81a1-e21a01919bf8",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 241,
    "title": "https://github.com/user-attachments/assets/5ff61e42-157c-4415-8641-bb16c387fb47",
    "url": "https://github.com/user-attachments/assets/5ff61e42-157c-4415-8641-bb16c387fb47",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 242,
    "title": "GitHub - alonsocampana/ARCANet: Pedro A. Campana, Paul Prasse, Tobias Scheffer. Predicting dose-response curves with deep neural networks. Proceedings of the 41st International Conference on Machine Learning, PMLR 235, 2024 · GitHub",
    "url": "https://github.com/alonsocampana/ARCANet",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 243,
    "title": "https://github.com/user-attachments/assets/8e5adde6-5db6-4837-988b-8e425abfc105",
    "url": "https://github.com/user-attachments/assets/8e5adde6-5db6-4837-988b-8e425abfc105",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 244,
    "title": "GitHub - kyrs/WISER · GitHub",
    "url": "https://github.com/kyrs/WISER",
    "summary": "",
    "tags": [],
    "section": "ICML2024",
    "issue": 17
  },
  {
    "id": 245,
    "title": "https://github.com/user-attachments/assets/4f6a562f-f46b-4eac-a175-39d05fa944e3",
    "url": "https://github.com/user-attachments/assets/4f6a562f-f46b-4eac-a175-39d05fa944e3",
    "summary": "",
    "tags": [],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 246,
    "title": "https://www.cell.com/cell/fulltext/S0092-8674(19",
    "url": "https://www.cell.com/cell/fulltext/S0092-8674(19",
    "summary": "",
    "tags": [],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 247,
    "title": "https://github.com/user-attachments/assets/13f54980-1447-4df0-8b40-c38a9a9f9627",
    "url": "https://github.com/user-attachments/assets/13f54980-1447-4df0-8b40-c38a9a9f9627",
    "summary": "",
    "tags": [],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 248,
    "title": "https://github.com/user-attachments/assets/251c6b8f-73d0-4f60-8aeb-6be1f89cf5eb",
    "url": "https://github.com/user-attachments/assets/251c6b8f-73d0-4f60-8aeb-6be1f89cf5eb",
    "summary": "",
    "tags": [],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 249,
    "title": "https://github.com/user-attachments/assets/cbda802d-0565-4d01-a1b2-0f0657751dd2",
    "url": "https://github.com/user-attachments/assets/cbda802d-0565-4d01-a1b2-0f0657751dd2",
    "summary": "",
    "tags": [],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 250,
    "title": "https://github.com/user-attachments/assets/6e95ef6d-0915-48ba-8917-08d0f3ffeb9f",
    "url": "https://github.com/user-attachments/assets/6e95ef6d-0915-48ba-8917-08d0f3ffeb9f",
    "summary": "",
    "tags": [],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 251,
    "title": "https://github.com/user-attachments/assets/d34fe02f-918b-417e-83ea-5d29e309151d",
    "url": "https://github.com/user-attachments/assets/d34fe02f-918b-417e-83ea-5d29e309151d",
    "summary": "",
    "tags": [],
    "section": "Optimal Transport with scRNA",
    "issue": 16
  },
  {
    "id": 252,
    "title": "https://github.com/user-attachments/assets/9007748f-5b26-4b98-9fe5-a9a95c1a9a7a",
    "url": "https://github.com/user-attachments/assets/9007748f-5b26-4b98-9fe5-a9a95c1a9a7a",
    "summary": "",
    "tags": [],
    "section": "08/30/2024",
    "issue": 15
  },
  {
    "id": 253,
    "title": "https://github.com/user-attachments/assets/6d79486a-61f1-4074-ada4-407cbb33eac4",
    "url": "https://github.com/user-attachments/assets/6d79486a-61f1-4074-ada4-407cbb33eac4",
    "summary": "",
    "tags": [],
    "section": "08/30/2024",
    "issue": 15
  },
  {
    "id": 254,
    "title": "https://github.com/user-attachments/assets/c7b53899-9d6b-46d7-a56c-54e3369d5b45",
    "url": "https://github.com/user-attachments/assets/c7b53899-9d6b-46d7-a56c-54e3369d5b45",
    "summary": "",
    "tags": [],
    "section": "Optimal Trasport",
    "issue": 14
  },
  {
    "id": 255,
    "title": "GitHub - bunnech/cellot: Learning Single-Cell Perturbation Responses using Neural Optimal Transport · GitHub",
    "url": "https://github.com/bunnech/cellot",
    "summary": "",
    "tags": [],
    "section": "Optimal Trasport",
    "issue": 14
  },
  {
    "id": 256,
    "title": "https://github.com/user-attachments/assets/8ec6a07b-931f-43f4-bea3-72c5d1665ba0",
    "url": "https://github.com/user-attachments/assets/8ec6a07b-931f-43f4-bea3-72c5d1665ba0",
    "summary": "",
    "tags": [],
    "section": "Optimal Trasport",
    "issue": 14
  },
  {
    "id": 257,
    "title": "GitHub - daifengwanglab/CMOT: Cross Modality Optimal Transport for multimodal inference · GitHub",
    "url": "https://github.com/daifengwanglab/CMOT",
    "summary": "",
    "tags": [],
    "section": "Optimal Trasport",
    "issue": 14
  },
  {
    "id": 258,
    "title": "https://github.com/user-attachments/assets/2860ad0f-a34e-4e5e-b75d-a1782146e197",
    "url": "https://github.com/user-attachments/assets/2860ad0f-a34e-4e5e-b75d-a1782146e197",
    "summary": "",
    "tags": [],
    "section": "Optimal Trasport",
    "issue": 14
  },
  {
    "id": 259,
    "title": "CoINcIDE: A framework for discovery of patient subtypes across multiple datasets | Genome Medicine | Springer Nature Link",
    "url": "https://link.springer.com/article/10.1186/s13073-016-0281-4?fromPaywallRec=false",
    "summary": "",
    "tags": [],
    "section": "Explainability",
    "issue": 13
  },
  {
    "id": 260,
    "title": "Proceedings of the Thirty-Second International Joint Conference on Artificial Intelligence | IJCAI",
    "url": "https://www.ijcai.org/proceedings/2023/",
    "summary": "",
    "tags": [],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 261,
    "title": "GitHub - HanChen-HUST/CSGCL: source code for IJCAI 2023 accpeted Paper CSGCL:Community Strength Enhanced Graph Contrastive Learning · GitHub",
    "url": "https://github.com/HanChen-HUST/CSGCL",
    "summary": "",
    "tags": [],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 262,
    "title": "GitHub - MMAMAR/scTConvexMan · GitHub",
    "url": "https://github.com/MMAMAR/scTConvexMan",
    "summary": "",
    "tags": [],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 263,
    "title": "GitHub - Liuluotao/MCHNN: Source code and supplementary materials for paper \"Multi-view Contrastive Learning Hypergraph Neural Network for Drug-Microbe-Disease Association Prediction (IJCAI 2023)\" · GitHub",
    "url": "https://github.com/Liuluotao/MCHNN",
    "summary": "",
    "tags": [],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 264,
    "title": "GitHub - violet-sto/MolHF: Official implementation of IJCAI'23 paper \"MolHF: A Hierarchical Normalizing Flow for Molecular Graph Generation\" · GitHub",
    "url": "https://github.com/violet-sto/MolHF",
    "summary": "",
    "tags": [],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 265,
    "title": "GitHub - junxia97/awesome-pretrain-on-molecules: [IJCAI 2023 survey track]A curated list of resources for chemical pre-trained models · GitHub",
    "url": "https://github.com/junxia97/awesome-pretrain-on-molecules",
    "summary": "",
    "tags": [],
    "section": "IJCAI 2023",
    "issue": 11
  },
  {
    "id": 266,
    "title": "Proceedings of Machine Learning Research | Proceedings of the Second Learning on Graphs Conference Held in Virtual on 27-30 November 2023 Published as Volume 231 by the Proceedings of Machine Learning Research on 17 April 2024. Volume Edited by: Soledad Villar Benjamin Chamberlain Series Editors: Neil D. Lawrence",
    "url": "https://proceedings.mlr.press/v231/",
    "summary": "",
    "tags": [],
    "section": "Learning on Graphs Conference, 27-30 November 2023,",
    "issue": 10
  },
  {
    "id": 267,
    "title": "AIRS/OpenProt/LatentDiff at main · divelab/AIRS · GitHub",
    "url": "https://github.com/divelab/AIRS/tree/main/OpenProt/LatentDiff",
    "summary": "",
    "tags": [],
    "section": "Learning on Graphs Conference, 27-30 November 2023,",
    "issue": 10
  },
  {
    "id": 268,
    "title": "GitHub - WillHua127/mudiff · GitHub",
    "url": "https://github.com/WillHua127/mudiff",
    "summary": "",
    "tags": [],
    "section": "Learning on Graphs Conference, 27-30 November 2023,",
    "issue": 10
  },
  {
    "id": 269,
    "title": "GitHub - lamalab-org/chempile: ChemPile project · GitHub",
    "url": "https://github.com/lamalab-org/chempile/tree/main",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 270,
    "title": "https://github.com/CJ-eeww/PPSol",
    "url": "https://github.com/CJ-eeww/PPSol",
    "summary": "",
    "tags": [],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 271,
    "title": "GitHub - Hienyriux/GeoPD-DTI: Graph Neural Networks with Geometric Edge Fusion and Point Downsampling for Drug-Target Interaction Prediction · GitHub",
    "url": "https://github.com/Hienyriux/GeoPD-DTI",
    "summary": "",
    "tags": [],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 272,
    "title": "GitHub - ZhangLab312/HGTDG · GitHub",
    "url": "https://github.com/ZhangLab312/HGTDG",
    "summary": "",
    "tags": [],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 273,
    "title": "GitHub - bionlp-hzau/DGGAT · GitHub",
    "url": "https://github.com/bionlp-hzau/DGGAT",
    "summary": "",
    "tags": [],
    "section": "BIBM 2023",
    "issue": 2
  },
  {
    "id": 274,
    "title": "GitHub - chao1224/ChatDrug: LLM for Drug Editing, ICLR 2024 · GitHub",
    "url": "https://github.com/chao1224/ChatDrug",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 275,
    "title": "GitHub - Shen-Lab/LDM-3DG: [ICLR 2024] \"Latent 3D Graph Diffusion\" by Yuning You, Ruida Zhou, Jiwoong Park, Haotian Xu, Chao Tian, Zhangyang Wang, Yang Shen · GitHub",
    "url": "https://github.com/Shen-Lab/LDM-3DG",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 276,
    "title": "GitHub - westlake-repl/SaProt: Saprot: Protein Language Model with Structural Alphabet (AA+3Di) · GitHub",
    "url": "https://github.com/westlake-repl/SaProt",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 277,
    "title": "GitHub - igashov/RetroBridge: RetroBridge: Markov Bridge Model for Retrosynthesis Planning · GitHub",
    "url": "https://github.com/igashov/RetroBridge",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 278,
    "title": "GitHub - RyanWangZf/BioBridge: ICLR'24 | BioBridge: Bridging Biomedical Foundation Models via Knowledge Graphs · GitHub",
    "url": "https://github.com/RyanWangZf/BioBridge",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 279,
    "title": "GitHub - zjunlp/Mol-Instructions: [ICLR 2024] Mol-Instructions: A Large-Scale Biomolecular Instruction Dataset for Large Language Models · GitHub",
    "url": "https://github.com/zjunlp/Mol-Instructions",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 280,
    "title": "GitHub - SXKDZ/MARCEL: [ICLR 2024] MARCEL: Machine Learning over Molecular Conformer Ensembles · GitHub",
    "url": "https://github.com/SXKDZ/MARCEL",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 281,
    "title": "GitHub - zjunlp/MolGen: [ICLR 2024] Domain-Agnostic Molecular Generation with Chemical Feedback · GitHub",
    "url": "https://github.com/zjunlp/MolGen",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 282,
    "title": "GitHub - lujiarui/Str2Str: Codebase of the paper \"Str2Str: A Score-based Framework for Zero-shot Protein Conformation Sampling\" (ICLR 2024) · GitHub",
    "url": "https://github.com/lujiarui/Str2Str",
    "summary": "",
    "tags": [],
    "section": "ICLR 2024",
    "issue": 1
  },
  {
    "id": 283,
    "title": "https://www.biorxiv.org/content/10.1101/2024.11.01.621087v1",
    "url": "https://www.biorxiv.org/content/10.1101/2024.11.01.621087v1",
    "summary": "",
    "tags": [],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 284,
    "title": "https://www.biorxiv.org/content/10.1101/2025.10.31.685892v1",
    "url": "https://www.biorxiv.org/content/10.1101/2025.10.31.685892v1",
    "summary": "",
    "tags": [],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 285,
    "title": "Real-world deployment of a fine-tuned pathology foundation model for lung cancer biomarker detection | Nature Medicine",
    "url": "https://www.nature.com/articles/s41591-025-03780-x",
    "summary": "",
    "tags": [],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 286,
    "title": "Artificial-intelligence-based molecular classification of diffuse gliomas using rapid, label-free optical imaging | Nature Medicine",
    "url": "https://www.nature.com/articles/s41591-023-02252-4",
    "summary": "",
    "tags": [],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 287,
    "title": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2844908",
    "url": "https://jamanetwork.com/journals/jamaoncology/fullarticle/2844908",
    "summary": "",
    "tags": [],
    "section": "Foundation Models for Cancer 2026",
    "issue": 50
  },
  {
    "id": 288,
    "title": "scGPT: Toward Building a Foundation Model for Single-Cell Multi-omics Using Generative AI",
    "url": "https://www.nature.com/articles/s41592-024-02201-0",
    "summary": "Proposes scGPT, a generative pre-trained transformer pretrained on 33 million human single-cell sequences across 51 organs and 1,000+ cell types. Achieves state-of-the-art performance on cell type annotation, batch integration, multi-omic integration, perturbation response prediction, and gene network inference. A key step toward a foundation model for virtual cell simulation.",
    "tags": [
      "Nature Methods",
      "2024",
      "Single-cell",
      "Foundation Model",
      "Generative Models",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 289,
    "title": "Transfer Learning Enables Predictions in Network Biology (Geneformer)",
    "url": "https://www.nature.com/articles/s41586-023-06139-9",
    "summary": "Introduces Geneformer, a context-aware attention-based deep learning model pretrained on ~30 million single-cell transcriptomes from a diverse human corpus. Fine-tuned for predictions in network biology, accurately predicting network dynamics and identifying novel therapeutic targets for cardiomyopathy. Demonstrates broad transfer learning capability across cell and tissue types.",
    "tags": [
      "Nature",
      "2023",
      "Single-cell",
      "Foundation Model",
      "Transfer Learning",
      "Network Biology",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 290,
    "title": "Universal Cell Embeddings: A Foundation Model for Cell Biology",
    "url": "https://arxiv.org/abs/2309.05923",
    "summary": "Presents Universal Cell Embeddings (UCE), a large-scale self-supervised model trained on 36 million cells from 1,000+ datasets spanning 38 species. Encodes cells using a protein-weighted ESM2 gene embedding, enabling zero-shot biological analysis across cell types and species without fine-tuning. Provides a species-agnostic universal representation of cellular identity.",
    "tags": [
      "arXiv",
      "2023",
      "Single-cell",
      "Foundation Model",
      "Representation Learning",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 291,
    "title": "Cell2Sentence: Teaching Large Language Models the Language of Biology",
    "url": "https://arxiv.org/abs/2309.11631",
    "summary": "Converts single-cell RNA-seq profiles into natural language sentences by ranking genes in order of expression level. Enables general-purpose LLMs to perform cell type prediction, cell generation conditioned on text prompts, and cross-dataset integration without architectural changes. Shows that language models can acquire biological knowledge from transcriptomic data alone.",
    "tags": [
      "arXiv",
      "2023",
      "Single-cell",
      "LLM",
      "Genomics",
      "Generative Models",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 292,
    "title": "Large Scale Foundation Model on Single-Cell Transcriptomics (scFoundation)",
    "url": "https://www.biorxiv.org/content/10.1101/2023.05.29.542705v2",
    "summary": "Pretrains a 100-million-parameter model on 50 million human single-cell transcriptomes covering 19,264 genes. Employs a read-depth-aware modeling strategy to handle sequencing depth variation. Achieves consistent improvements on diverse downstream tasks including cell clustering, gene expression enhancement, drug response prediction, and spatial transcriptomics.",
    "tags": [
      "bioRxiv",
      "2023",
      "Single-cell",
      "Foundation Model",
      "Genomics",
      "Drug Discovery",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 293,
    "title": "Predicting Transcriptional Outcomes of Novel Multigene Perturbations with GEARS",
    "url": "https://www.nature.com/articles/s41587-023-01905-6",
    "summary": "GEARS (Graph-Enhanced Activation Repression Structure) integrates gene-gene relationship graphs from biological knowledge bases with a neural network to predict transcriptional responses after novel single- and multi-gene CRISPR perturbations. Accurately predicts out-of-distribution perturbations including unseen gene combinations, advancing virtual cell modeling for genetic screen design.",
    "tags": [
      "Nature Biotechnology",
      "2024",
      "Single-cell",
      "Perturbation Prediction",
      "GNN",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 294,
    "title": "Predicting Single-Cell Perturbation Responses for Unseen Drugs (CPA)",
    "url": "https://www.embopress.org/doi/full/10.15252/msb.2022115",
    "summary": "Compositional Perturbation Autoencoder (CPA) disentangles cell-intrinsic and perturbation-specific representations, enabling prediction of single-cell transcriptomic responses to unseen drug combinations and concentrations. Uses a structured latent space with covariate embeddings to generalize across novel drug-dose pairs. A foundational method for in-silico drug screening within the virtual cell framework.",
    "tags": [
      "Molecular Systems Biology",
      "2023",
      "Single-cell",
      "Perturbation Prediction",
      "Drug Discovery",
      "Generative Models",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 295,
    "title": "scBERT as a Large-Scale Pretrained Deep Language Model for Cell Type Annotation of Single-Cell RNA-seq Data",
    "url": "https://www.nature.com/articles/s42256-022-00534-z",
    "summary": "Adapts BERT-style pretraining to single-cell RNA-seq data by tokenizing genes via expression bin embeddings and performing masked gene expression prediction. Outperforms existing supervised and self-supervised methods for cell type annotation, especially on rare cell types and cross-dataset transfer. Demonstrates the effectiveness of large-scale pretraining for transcriptomic data.",
    "tags": [
      "Nature Machine Intelligence",
      "2022",
      "Single-cell",
      "Foundation Model",
      "Transfer Learning",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 296,
    "title": "Assigning Cells New Identities: Benchmarking Algorithms for Generalizable Single-Cell Perturbation Response Prediction",
    "url": "https://www.biorxiv.org/content/10.1101/2023.12.28.573533v1",
    "summary": "Comprehensive benchmark of 27 methods for single-cell perturbation response prediction across 29 datasets using 6 performance metrics. Assesses generalizability to unseen cell types, perturbations, and conditions including emerging foundation models. Finds that cellular context embedding is critical for generalizability. Provides guidance for method selection in virtual-cell perturbation research.",
    "tags": [
      "bioRxiv",
      "2023",
      "Single-cell",
      "Perturbation Prediction",
      "Benchmark",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 297,
    "title": "Towards a Foundation Model for Single-Cell Biology: A Systematic Evaluation of the State of the Field",
    "url": "https://www.biorxiv.org/content/10.1101/2023.04.28.538490v2",
    "summary": "Systematically evaluates the landscape of single-cell foundation models across key tasks: cell type annotation, batch correction, trajectory inference, and perturbation prediction. Identifies critical gaps between benchmark performance and real-world utility. Proposes a standardized evaluation framework and highlights the data biases that limit current virtual-cell foundation models.",
    "tags": [
      "bioRxiv",
      "2023",
      "Single-cell",
      "Foundation Model",
      "Benchmark",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 298,
    "title": "A Virtual Cell Model for the Next Generation of Biological Research",
    "url": "https://arxiv.org/abs/2409.11654",
    "summary": "Conceptual framework and research agenda for building a Virtual Cell—a comprehensive, trainable computational model that can simulate any cell type, molecular state, and cellular process. Argues that single-cell multi-omics, spatial transcriptomics, and protein structure prediction together create the data substrate for a universal cell simulator. Discusses key challenges including causal modeling, multi-scale integration, and experimental validation.",
    "tags": [
      "arXiv",
      "2024",
      "Virtual Cell",
      "Foundation Model",
      "Genomics",
      "Perspective"
    ],
    "section": "Virtual Cell 2026",
    "issue": 55
  },
  {
    "id": 299,
    "title": "World Models",
    "url": "https://arxiv.org/abs/1803.10122",
    "summary": "Introduces the World Models framework: an agent learns a compressed spatial (V) and temporal (M) representation of its environment using a VAE and an RNN, then trains a controller entirely within the learned latent world model. Demonstrates that policies learned inside the dream can transfer to the real environment. Foundational paper for the concept of latent-space world modeling that underpins the Virtual Cell paradigm—treating cellular state as a latent world to be simulated.",
    "tags": [
      "arXiv",
      "2018",
      "World Model",
      "Generative Models",
      "Reinforcement Learning",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 300,
    "title": "Mastering Diverse Domains through World Models (DreamerV3)",
    "url": "https://arxiv.org/abs/2301.04104",
    "summary": "DreamerV3 learns a recurrent world model entirely from raw sensory inputs and trains an actor–critic agent purely in the model's latent imagination without environment interaction during training. Achieves human-level or super-human performance across 150+ tasks spanning continuous control, Atari, and Minecraft with a single fixed algorithm and hyperparameter set. Provides the computational blueprint—latent dynamics, reward prediction, and actor–critic planning—that maps naturally onto virtual cell simulation and perturbation design.",
    "tags": [
      "arXiv",
      "2023",
      "World Model",
      "Reinforcement Learning",
      "Generative Models",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 301,
    "title": "Deep Generative Modeling for Single-Cell Transcriptomics (scVI)",
    "url": "https://www.nature.com/articles/s41592-018-0229-2",
    "summary": "scVI uses a hierarchical Bayesian model with a deep neural network encoder/decoder to learn low-dimensional latent representations of single-cell RNA-seq data, accounting for technical noise and batch effects. Enables joint analysis of heterogeneous datasets and serves as a foundational representation backbone for virtual cell world models by mapping high-dimensional gene expression into a structured latent state space.",
    "tags": [
      "Nature Methods",
      "2018",
      "Single-cell",
      "Generative Models",
      "Representation Learning",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 302,
    "title": "Neural Ordinary Differential Equations",
    "url": "https://arxiv.org/abs/1806.07366",
    "summary": "Proposes to parameterize the derivative of a hidden state with a neural network, yielding continuous-depth residual networks and latent variable models defined by ODEs. Enables memory-efficient training via the adjoint method and naturally models continuous-time dynamics. Directly applicable to modeling continuous transcriptional dynamics in virtual cell world models, where gene expression trajectories are treated as solutions to a learned ODE in latent space.",
    "tags": [
      "NeurIPS 2018",
      "2018",
      "Differential Equations",
      "Generative Models",
      "World Model",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 303,
    "title": "Predicting Single-Cell Perturbation Responses Using Neural Optimal Transport (scGEN)",
    "url": "https://www.nature.com/articles/s41592-019-0494-8",
    "summary": "scGEN learns a latent representation of cell states with a VAE and performs perturbation prediction by vector arithmetic in latent space—adding a perturbation vector to control cell embeddings to generate stimulated cell distributions. Accurately predicts gene expression after unseen drug treatments and cross-species perturbations. Embodies the world model idea of state + action → next state in transcriptomic space, making it a core building block for virtual cell simulation.",
    "tags": [
      "Nature Methods",
      "2019",
      "Single-cell",
      "Perturbation Prediction",
      "Generative Models",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 304,
    "title": "Exploring Genetic Interaction Manifolds Constructed from Rich Single-Cell Phenotypes (Perturb-seq)",
    "url": "https://www.science.org/doi/10.1126/science.aax4438",
    "summary": "Develops a pooled CRISPR screening approach (Perturb-seq) that simultaneously captures single-cell transcriptomes and genetic perturbations at scale, mapping combinatorial gene-knockdown effects across thousands of cells. Constructs high-dimensional genetic interaction manifolds revealing epistasis and redundancy. Provides the empirical ground-truth data substrate essential for training and evaluating virtual cell world models that must predict complex multi-gene perturbation outcomes.",
    "tags": [
      "Science",
      "2019",
      "Single-cell",
      "Perturbation Prediction",
      "CRISPR",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 305,
    "title": "Generative Modeling of Single-Cell Time Series with PRESCIENT (PRESCIENT)",
    "url": "https://www.nature.com/articles/s41587-021-00937-6",
    "summary": "PRESCIENT formulates single-cell developmental trajectories as a Waddington potential landscape learned via Wasserstein gradient flows. A neural network parameterizes the potential energy function, and future cell population distributions are predicted by simulating Langevin dynamics from initial cell states. Represents the clearest instantiation of a biological world model: given current cell state, simulate how the population evolves over time under stochastic dynamics.",
    "tags": [
      "Nature Biotechnology",
      "2021",
      "Single-cell",
      "Trajectory Inference",
      "Generative Models",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 306,
    "title": "Mapping Transcriptomic Vector Fields of Single Cells (Dynamo)",
    "url": "https://www.cell.com/cell/fulltext/S0092-8674(22)00477-1",
    "summary": "Dynamo reconstructs continuous RNA velocity vector fields from metabolic labeling data using a thermodynamically consistent kinetic model, enabling analytical computation of cell fate trajectories, Jacobian-based gene regulatory analysis, and in-silico perturbation simulations. Predicts cell cycle arrest and reprogramming outcomes. Provides an explicit mechanistic world model for transcriptional dynamics where the state-transition function is a learned vector field over gene expression space.",
    "tags": [
      "Cell",
      "2022",
      "Single-cell",
      "RNA Velocity",
      "Trajectory Inference",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 307,
    "title": "Dissecting Cell Identity via Network Inference and In Silico Gene Perturbation (CellOracle)",
    "url": "https://www.nature.com/articles/s41586-022-05688-9",
    "summary": "CellOracle integrates single-cell ATAC-seq and RNA-seq to construct cell-type-specific gene regulatory network (GRN) models, then simulates transcriptional shifts caused by transcription factor (TF) perturbations via network propagation. Predicts cell identity changes and developmental trajectories under genetic interventions. Operationalizes a mechanistic world model in which the GRN is the transition function: given current cell state + TF perturbation action, predict the new transcriptional state.",
    "tags": [
      "Nature",
      "2023",
      "Single-cell",
      "Gene Regulatory Network",
      "Perturbation Prediction",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Virtual Cell World Model 2026",
    "issue": 57
  },
  {
    "id": 308,
    "title": "How to Build the Virtual Cell with Artificial Intelligence: Priorities and Opportunities",
    "url": "https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00027-4",
    "summary": "A perspective paper outlining priorities and opportunities for building AI-powered virtual cells that can simulate any cellular process. Argues for tight integration of large-scale single-cell atlases, protein structure prediction, and generative world models to create mechanistic digital twins of cells. Identifies key challenges including causal reasoning, multi-scale modeling, and experimental validation loops as the critical next steps for the field.",
    "tags": [
      "Cell Systems",
      "2024",
      "Virtual Cell",
      "Foundation Model",
      "Perspective",
      "AI"
    ],
    "section": "Universal Cell Embeddings 2026",
    "issue": 61
  },
  {
    "id": 309,
    "title": "Evolutionary-Scale Prediction of Atomic-Level Protein Structure with a Language Model (ESM2)",
    "url": "https://www.science.org/doi/10.1126/science.ade2574",
    "summary": "Trains ESM2, a protein language model scaled to 15 billion parameters on 250 million protein sequences, and the paired structure prediction model ESMFold. ESM2 embeddings capture evolutionary co-variation and functional constraints across the protein universe. Directly relevant to UCE, which uses ESM2 protein embeddings as the gene representation backbone to build species-agnostic cell embeddings.",
    "tags": [
      "Science",
      "2023",
      "Protein Language Model",
      "Representation Learning",
      "Foundation Model",
      "Structure Prediction"
    ],
    "section": "Universal Cell Embeddings 2026",
    "issue": 61
  },
  {
    "id": 310,
    "title": "GenePT: A Simple But Hard-to-Beat Baseline for Non-Sequential Pre-Training of Genomic Data",
    "url": "https://www.biorxiv.org/content/10.1101/2023.10.16.562533",
    "summary": "Uses GPT-3.5 text embeddings of NCBI gene descriptions as fixed gene representations and feeds them into a simple transformer to encode single-cell transcriptomes. Surprisingly competitive with models pretrained on millions of cells for cell type annotation and perturbation prediction. Highlights that high-quality prior biological knowledge embedded in protein/gene descriptions is a strong and underutilized signal for cell representation—supporting the design philosophy of UCE.",
    "tags": [
      "bioRxiv",
      "2023",
      "Single-cell",
      "Foundation Model",
      "Representation Learning",
      "LLM",
      "Genomics"
    ],
    "section": "Universal Cell Embeddings 2026",
    "issue": 61
  },
  {
    "id": 311,
    "title": "Mapping Single-Cell Data to Reference Atlases by Transfer Learning (scArches)",
    "url": "https://www.nature.com/articles/s41587-021-01001-7",
    "summary": "scArches enables transfer learning from pre-trained single-cell reference models to new query datasets without retraining the full model. Uses architectural surgery to add dataset-specific query encoders that align new data into the reference latent space. Operationalizes the atlas-mapping use case that universal cell embeddings such as UCE target: project any new cell into a shared biological coordinate system without fine-tuning.",
    "tags": [
      "Nature Biotechnology",
      "2022",
      "Single-cell",
      "Transfer Learning",
      "Representation Learning",
      "Genomics",
      "Virtual Cell"
    ],
    "section": "Universal Cell Embeddings 2026",
    "issue": 61
  },
  {
    "id": 312,
    "title": "Fast, Sensitive, and Accurate Integration of Single-Cell Data with Harmony",
    "url": "https://www.nature.com/articles/s41592-019-0619-0",
    "summary": "Harmony iteratively clusters cells in a shared embedding space and applies linear corrections to remove batch effects while preserving biological variation. Scales to hundreds of thousands of cells and integrates datasets across technologies, species, and tissues. Represents the batch-integration baseline that large-scale universal cell embedding models like UCE aim to supersede through end-to-end representation learning.",
    "tags": [
      "Nature Methods",
      "2019",
      "Single-cell",
      "Batch Integration",
      "Representation Learning",
      "Genomics"
    ],
    "section": "Universal Cell Embeddings 2026",
    "issue": 61
  },
  {
    "id": 313,
    "title": "A Path Towards Autonomous Machine Intelligence",
    "url": "https://openreview.net/forum?id=BZ5a1r-kVsf",
    "summary": "LeCun proposes a modular cognitive architecture for autonomous AI centered on a Joint-Embedding Predictive Architecture (JEPA). Unlike generative models that reconstruct raw inputs, JEPA learns by predicting abstract representations of missing or future information in a shared latent space, discarding unpredictable details. The architecture couples a world model, a cost module, an actor, and a short-term memory into a unified energy-based framework that enables planning and goal-directed behavior without requiring contrastive samples or pixel-level reconstruction.",
    "tags": [
      "OpenReview",
      "2022",
      "JEPA",
      "World Models",
      "Self-Supervised Learning",
      "Architecture",
      "Energy-Based Models"
    ],
    "section": "JEPA 2026",
    "issue": 59
  },
  {
    "id": 314,
    "title": "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA)",
    "url": "https://arxiv.org/abs/2301.08243",
    "summary": "I-JEPA trains a Vision Transformer encoder by predicting the representations of multiple target image blocks from a single context block entirely in latent space, with no hand-crafted data augmentations. A target encoder (EMA of the online encoder) provides stable prediction targets, and a lightweight predictor conditioned on positional information generates block-level embeddings. I-JEPA matches or surpasses contrastive and masked-image-modeling baselines on ImageNet linear probing, few-shot, and transfer benchmarks while using significantly less compute.",
    "tags": [
      "CVPR",
      "2023",
      "JEPA",
      "Self-Supervised Learning",
      "Vision Transformer",
      "Image Representation"
    ],
    "section": "JEPA 2026",
    "issue": 59
  },
  {
    "id": 315,
    "title": "Revisiting Feature Prediction for Learning Visual Representations from Video (V-JEPA)",
    "url": "https://arxiv.org/abs/2404.08471",
    "summary": "V-JEPA extends the JEPA principle to video by training a video encoder to predict the latent representations of masked spatio-temporal tube regions from unmasked context, using a frozen EMA target encoder and a lightweight predictor. The method requires no pixel reconstruction, no pre-trained image encoders, and no text supervision. V-JEPA achieves strong performance on motion-centric downstream tasks (Something-Something v2, Kinetics) and image understanding benchmarks, demonstrating that feature-level prediction from video alone is a powerful self-supervised signal.",
    "tags": [
      "arXiv",
      "2024",
      "JEPA",
      "Self-Supervised Learning",
      "Video Representation",
      "Vision Transformer"
    ],
    "section": "JEPA 2026",
    "issue": 59
  },
  {
    "id": 316,
    "title": "MC-JEPA: A Joint-Embedding Predictive Architecture for Self-Supervised Learning of Motion and Content Features",
    "url": "https://arxiv.org/abs/2307.12698",
    "summary": "MC-JEPA jointly learns motion and content representations from video within a single JEPA framework. A shared encoder produces interleaved motion and content tokens; separate predictors forecast masked motion-flow targets and masked content targets in latent space. The dual-objective formulation prevents content features from collapsing to trivial motion statistics and vice versa. MC-JEPA achieves competitive results on action recognition and optical-flow estimation without task-specific pre-training or dense pixel supervision.",
    "tags": [
      "arXiv",
      "2023",
      "JEPA",
      "Self-Supervised Learning",
      "Video Representation",
      "Motion Estimation"
    ],
    "section": "JEPA 2026",
    "issue": 59
  },
  {
    "id": 317,
    "title": "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning",
    "url": "https://arxiv.org/abs/2506.09985",
    "summary": "V-JEPA 2 scales the video JEPA paradigm to 1.1B parameters and introduces an action-conditioned world model built on top of frozen V-JEPA features. The system (i) pre-trains a video encoder via masked latent prediction, (ii) trains an action-conditioned latent predictor on human demonstration video, and (iii) uses the predictor as a world model for model-predictive control. V-JEPA 2 achieves state-of-the-art zero-shot performance on video understanding benchmarks and enables a robot to acquire contact-rich manipulation skills from only 20 demonstrations.",
    "tags": [
      "arXiv",
      "2025",
      "JEPA",
      "World Models",
      "Video Representation",
      "Robotics",
      "Self-Supervised Learning"
    ],
    "section": "JEPA 2026",
    "issue": 59
  },
  {
    "id": 318,
    "title": "Virtual Cell Initiative | Arc Institute",
    "url": "https://arcinstitute.org/virtual-cell-initiative",
    "summary": "Arc Institute’s Virtual Cell Initiative aims to build AI-powered digital models of cells capable of predicting how cells behave under any condition or perturbation. The initiative combines large-scale single-cell datasets, foundation models, and mechanistic insights to create generalizable virtual cell simulators. It coordinates open data resources (Arc Virtual Cell Atlas), model development (State), evaluation infrastructure (cell-eval, cell-load), and community competitions (Virtual Cell Challenge) to accelerate progress toward a true computational cell.",
    "tags": [
      "Arc Institute",
      "2025",
      "Virtual Cell",
      "Foundation Model",
      "Single-cell",
      "Initiative"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 63
  },
  {
    "id": 319,
    "title": "Arc Institute launches its inaugural “virtual cell” competition using AI to solve one of biology’s biggest challenges | Arc Institute",
    "url": "https://arcinstitute.org/news/virtual-cell-challenge-2025",
    "summary": "Announcement of the Arc Institute’s inaugural Virtual Cell Challenge 2025, a community competition asking participants to build AI models that predict how cells respond to genetic perturbations. Competitors are given access to the Arc Virtual Cell Atlas (including Tahoe-100M perturbation data) and are evaluated using cell-eval metrics. The challenge is designed to benchmark progress toward building generalizable virtual cell models and to foster collaboration across the computational biology community.",
    "tags": [
      "Arc Institute",
      "2025",
      "Virtual Cell",
      "Competition",
      "Perturbation Prediction",
      "Single-cell"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 63
  },
  {
    "id": 320,
    "title": "GitHub - ArcInstitute/state: State is a machine learning model that predicts cellular perturbation response across diverse contexts · GitHub",
    "url": "https://github.com/ArcInstitute/state",
    "summary": "State is Arc Institute’s open-source machine learning framework for predicting single-cell transcriptomic responses to genetic perturbations. It provides two model types: a State Transition (ST) model that predicts post-perturbation gene expression from control cells, and a State Embedding (SE) model that generates universal cell embeddings. Both support zero-shot and few-shot generalization across cell types and perturbations. State is the reference model for the Virtual Cell Challenge and is trained on the Tahoe-100M dataset from the Arc Virtual Cell Atlas.",
    "tags": [
      "GitHub",
      "2025",
      "Arc Institute",
      "Perturbation Prediction",
      "Single-cell",
      "Foundation Model",
      "PyTorch"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 63
  },
  {
    "id": 321,
    "title": "GitHub - ArcInstitute/arc-virtual-cell-atlas: Arc Virtual Cell Atlas · GitHub",
    "url": "https://github.com/ArcInstitute/arc-virtual-cell-atlas",
    "summary": "The Arc Virtual Cell Atlas is a curated open collection of single-cell datasets assembled to accelerate virtual cell model development. It currently spans over 602 million cells, including Tahoe-100M (a 100-million-cell genetic perturbation dataset from Tahoe Bio) and scBaseCount (an AI agent-curated compendium of public single-cell RNA-seq data). Data is hosted on Google Cloud and accessible via the Google Cloud Marketplace, and is the primary training corpus for the Virtual Cell Challenge.",
    "tags": [
      "GitHub",
      "2025",
      "Arc Institute",
      "Dataset",
      "Single-cell",
      "Virtual Cell",
      "Atlas"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 63
  },
  {
    "id": 322,
    "title": "GitHub - ArcInstitute/cell-eval: Comprehensive suite for evaluating perturbation prediction models · GitHub",
    "url": "https://github.com/ArcInstitute/cell-eval",
    "summary": "cell-eval is an open-source Python library providing a standardized suite of metrics for evaluating models that predict single-cell responses to perturbations. It computes differential expression for predicted and real AnnData objects and then applies a panel of statistical metrics (including distribution-level and gene-rank-based scores) to compare them. It is used as the official scoring framework for the Arc Virtual Cell Challenge and integrates directly with the State model’s evaluation pipeline.",
    "tags": [
      "GitHub",
      "2025",
      "Arc Institute",
      "Evaluation",
      "Perturbation Prediction",
      "Single-cell",
      "Python"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 63
  },
  {
    "id": 323,
    "title": "GitHub - ArcInstitute/cell-load: pytorch dataloaders for single-cell perturbation data · GitHub",
    "url": "https://github.com/ArcInstitute/cell-load",
    "summary": "cell-load is a PyTorch data-loading library tailored for single-cell perturbation datasets stored in H5/H5AD format. It supports flexible TOML-based dataset configuration, zero-shot and few-shot training splits, and multiple control-cell mapping strategies. Key features include consecutive loading for fast I/O, optional cell barcode tracking, and integration with gene embedding files. It serves as the data-pipeline backbone for the State model and is designed to scale to the 100-million-cell Tahoe-100M dataset in the Arc Virtual Cell Atlas.",
    "tags": [
      "GitHub",
      "2025",
      "Arc Institute",
      "Data Loading",
      "Single-cell",
      "PyTorch",
      "Perturbation Prediction"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 63
  },
  {
    "id": 324,
    "title": "scBaseCount: An AI agent-curated, uniformly processed, and continually expanding single cell data repository",
    "url": "https://doi.org/10.1101/2025.02.27.640494",
    "summary": "Presents scBaseCount, an AI agent-curated repository of uniformly processed single-cell RNA-seq data built using the SRAgent LLM-agent pipeline. SRAgent autonomously searches the NCBI Sequence Read Archive, extracts metadata, selects 10x Genomics scRNA-seq datasets, and schedules STARsolo alignment at scale, continuously expanding the corpus without manual curation. scBaseCount is integrated into the Arc Virtual Cell Atlas as its AI-curated component and provides a standardized, ever-growing data substrate for training and benchmarking virtual cell models.",
    "tags": [
      "bioRxiv",
      "2025",
      "Arc Institute",
      "Single-cell",
      "Dataset",
      "AI Agent",
      "LLM",
      "scRNA-seq"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 66
  },
  {
    "id": 325,
    "title": "GitHub - ArcInstitute/SRAgent: LLM agents for working with the SRA and associated bioinformatics databases · GitHub",
    "url": "https://github.com/ArcInstitute/SRAgent",
    "summary": "SRAgent is an open-source agentic workflow system using LLMs to automate querying, metadata extraction, and dataset discovery from the NCBI Sequence Read Archive (SRA). It provides multiple specialized agents—Entrez, SRX-info, papers, tissue-ontology, and disease-ontology—that collaborate to locate, annotate, and curate single-cell RNA-seq datasets at scale. SRAgent was used to construct scBaseCount, the AI agent-curated component of the Arc Virtual Cell Atlas, and supports both OpenAI and Anthropic model backends.",
    "tags": [
      "GitHub",
      "2025",
      "Arc Institute",
      "AI Agent",
      "LLM",
      "SRA",
      "Single-cell",
      "Python"
    ],
    "section": "Summary of Arc's Virtual Cell Research",
    "issue": 66
  },
  {
    "id": 326,
    "title": "Sequence modeling and design from molecular to genome scale with Evo",
    "url": "https://www.science.org/doi/10.1126/science.ado9336",
    "summary": "Presents Evo, a 7B-parameter DNA language model using the StripedHyena hybrid architecture with 131K-token context length, pretrained on a genomic corpus spanning prokaryotes, phages, and eukaryotes at single-nucleotide resolution. Evo performs zero-shot prediction of gene essentiality, splice site strength, and regulatory element activity, and enables multi-scale de novo sequence design from individual genes to whole-genome-length sequences. It establishes the first Arc Institute foundation model for genomics and demonstrates that autoregressive DNA pretraining transfers across the full hierarchy of biological organization.",
    "tags": [
      "Science",
      "2024",
      "Arc Institute",
      "DNA Language Model",
      "Genomics",
      "Foundation Model",
      "StripedHyena"
    ],
    "section": "Summary of Arc's Evo Research",
    "issue": 66
  },
  {
    "id": 327,
    "title": "Genome modeling and design across all domains of life with Evo 2",
    "url": "https://www.nature.com/articles/s41586-026-10176-5",
    "summary": "Presents Evo 2, a DNA language model scaled to 40B parameters using the StripedHyena 2 architecture, trained autoregressively on the OpenGenome2 dataset containing 8.8 trillion tokens from bacteria, archaea, viruses, and eukaryotes at 1 million base pair context length. Achieves state-of-the-art zero-shot variant effect prediction, gene function annotation, and de novo genome-scale sequence design. Includes sparse autoencoders for mechanistic interpretability and is deployed via NVIDIA NIM for accessible hosted inference.",
    "tags": [
      "Nature",
      "2026",
      "Arc Institute",
      "DNA Language Model",
      "Genomics",
      "Foundation Model",
      "StripedHyena"
    ],
    "section": "Summary of Arc's Evo Research",
    "issue": 66
  },
  {
    "id": 328,
    "title": "GitHub - ArcInstitute/evo2: Genome modeling and design across all domains of life · GitHub",
    "url": "https://github.com/ArcInstitute/evo2",
    "summary": "Open-source implementation of Evo 2, providing model weights for 1B, 7B, 20B, and 40B parameter checkpoints with context lengths up to 1 million base pairs. Inference is powered by Vortex and supports FP8 precision on NVIDIA Hopper GPUs. Includes notebooks for zero-shot variant effect prediction (BRCA1), DNA sequence generation, exon classification, and sparse autoencoder feature visualization. Available on NVIDIA NIM for hosted API access and compatible with BioNemo for finetuning.",
    "tags": [
      "GitHub",
      "2026",
      "Arc Institute",
      "DNA Language Model",
      "Genomics",
      "Foundation Model",
      "PyTorch"
    ],
    "section": "Summary of Arc's Evo Research",
    "issue": 66
  },
  {
    "id": 329,
    "title": "Predicting transcriptional outcomes of novel multi-gene perturbations with GEARS",
    "url": "https://www.nature.com/articles/s41587-023-01905-6",
    "summary": "Presents GEARS, a graph neural network framework that predicts transcriptional responses to single and combinatorial multi-gene perturbations from scRNA-seq data. Integrates a Gene Ontology knowledge graph for biological priors and constructs a co-expression perturbation graph, enabling zero-shot prediction of unseen combinatorial outcomes. Outperforms prior methods on Norman, Adamson, and Replogle 2022 benchmarks. Code available at https://github.com/snap-stanford/GEARS as the `cell-gears` pip package.",
    "tags": [
      "Nature Biotechnology",
      "2023",
      "Perturbation",
      "scRNA-seq",
      "GNN",
      "Gene Ontology",
      "Combinatorial Perturbation"
    ],
    "section": "Summary of GEARS, scLAMBDA, and LPM",
    "issue": 68
  },
  {
    "id": 330,
    "title": "Modeling and predicting single-cell multi-gene perturbation responses with scLAMBDA",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11643044/",
    "summary": "Introduces scLAMBDA, a deep generative framework using a disentangled VAE to separate basal cell state from perturbation-induced representations, enabling single-cell level generation rather than population averages. Leverages LLM gene embeddings to generalize to unobserved target genes and combinatorial perturbations, and introduces reliability scores for confidence estimation without ground-truth data. Code at https://github.com/gefeiwang/scLAMBDA with support for multi-cell-line training via context embeddings.",
    "tags": [
      "Genome Research",
      "2024",
      "Perturbation",
      "scRNA-seq",
      "VAE",
      "LLM",
      "Combinatorial Perturbation",
      "Generative Models"
    ],
    "section": "Summary of GEARS, scLAMBDA, and LPM",
    "issue": 68
  },
  {
    "id": 331,
    "title": "In silico biological discovery with large perturbation models",
    "url": "https://www.nature.com/articles/s43588-025-00870-1",
    "summary": "Presents the Large Perturbation Model (LPM), with a PRC-conditioned architecture that jointly conditions on symbolic Perturbation, Readout, and Context representations to learn from heterogeneous pooled experiments (LINCS L1000 and Replogle 2022 scRNA-seq). Disentangles perturbation-response rules from context-specific biases, enabling prediction of unseen outcomes and transferable embeddings for target identification and mechanism-of-action tasks. Implemented in the open-source perturb-lib / perturb-gym framework at https://github.com/perturblib/perturblib.",
    "tags": [
      "Nature Computational Science",
      "2025",
      "Perturbation",
      "scRNA-seq",
      "LINCS L1000",
      "Foundation Model",
      "Drug Discovery"
    ],
    "section": "Summary of GEARS, scLAMBDA, and LPM",
    "issue": 68
  },
  {
    "id": 332,
    "title": "GitHub - snap-stanford/GEARS: GEARS is a geometric deep learning model that predicts outcomes of novel multi-gene perturbations · GitHub",
    "url": "https://github.com/snap-stanford/GEARS",
    "summary": "",
    "tags": [],
    "section": "Summary of GEARS, scLAMBDA, and LPM",
    "issue": 68
  },
  {
    "id": 333,
    "title": "GitHub - gefeiwang/scLAMBDA: Modeling and predicting single-cell multi-gene perturbation responses with scLAMBDA · GitHub",
    "url": "https://github.com/gefeiwang/scLAMBDA",
    "summary": "",
    "tags": [],
    "section": "Summary of GEARS, scLAMBDA, and LPM",
    "issue": 68
  },
  {
    "id": 334,
    "title": "GitHub - perturblib/perturblib · GitHub",
    "url": "https://github.com/perturblib/perturblib",
    "summary": "",
    "tags": [],
    "section": "Summary of GEARS, scLAMBDA, and LPM",
    "issue": 68
  },
  {
    "id": 335,
    "title": "https://openreview.net/forum?id=1pAW0y8WLH",
    "url": "https://openreview.net/forum?id=1pAW0y8WLH",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 336,
    "title": "ICLR Poster DeepSADR: Deep Transfer Learning with Subsequence Interaction and Adaptive Readout for Cancer Drug Response Prediction",
    "url": "https://iclr.cc/virtual/2026/poster/10007850",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 337,
    "title": "ICLR Poster GALAX: Graph-Augmented Language Model for Explainable Reinforcement-Guided Subgraph Reasoning in Precision Medicine",
    "url": "https://iclr.cc/virtual/2026/poster/10011059",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 338,
    "title": "https://openreview.net/forum?id=dbZeLxOCIs",
    "url": "https://openreview.net/forum?id=dbZeLxOCIs",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 339,
    "title": "https://openreview.net/forum?id=hhq89Hs7T3",
    "url": "https://openreview.net/forum?id=hhq89Hs7T3",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 340,
    "title": "https://openreview.net/forum?id=lK82jpa8jr",
    "url": "https://openreview.net/forum?id=lK82jpa8jr",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 341,
    "title": "https://openreview.net/forum?id=40QphlZ9fY",
    "url": "https://openreview.net/forum?id=40QphlZ9fY",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 342,
    "title": "https://openreview.net/forum?id=Hk4Fb6kaYF",
    "url": "https://openreview.net/forum?id=Hk4Fb6kaYF",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 343,
    "title": "https://openreview.net/forum?id=RDAhLHEHDm",
    "url": "https://openreview.net/forum?id=RDAhLHEHDm",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 344,
    "title": "https://openreview.net/forum?id=QSGanMEcUV",
    "url": "https://openreview.net/forum?id=QSGanMEcUV",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 345,
    "title": "https://openreview.net/forum?id=UoYdZQIZWj",
    "url": "https://openreview.net/forum?id=UoYdZQIZWj",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 346,
    "title": "https://openreview.net/forum?id=I4meJN28Ol",
    "url": "https://openreview.net/forum?id=I4meJN28Ol",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 347,
    "title": "https://openreview.net/forum?id=o0Qfsq1fK8",
    "url": "https://openreview.net/forum?id=o0Qfsq1fK8",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 348,
    "title": "https://openreview.net/forum?id=24QX6XpvSL",
    "url": "https://openreview.net/forum?id=24QX6XpvSL",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 349,
    "title": "https://openreview.net/forum?id=KbXl2jfFRn",
    "url": "https://openreview.net/forum?id=KbXl2jfFRn",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 350,
    "title": "https://openreview.net/forum?id=DzSNH5APPl",
    "url": "https://openreview.net/forum?id=DzSNH5APPl",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 351,
    "title": "https://openreview.net/forum?id=5RcoUe1tA1",
    "url": "https://openreview.net/forum?id=5RcoUe1tA1",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 352,
    "title": "https://openreview.net/forum?id=7BLnSeWuei",
    "url": "https://openreview.net/forum?id=7BLnSeWuei",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 353,
    "title": "https://openreview.net/pdf?id=BUUfUcIcfE",
    "url": "https://openreview.net/pdf?id=BUUfUcIcfE",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 354,
    "title": "mCLM: A Modular Chemical Language Model that Generates Functional and Makeable Molecules",
    "url": "https://openreview.net/forum?id=r2HG3xOMJI",
    "summary": "Tokenizes molecules at functional building-block level (analogous to sub-word tokenization in NLP) rather than atom level, enabling a bilingual LLM that jointly understands natural-language function descriptions and molecular fragments. Tested on 430 FDA-approved drugs, outperforms GPT-5 in synthetic accessibility while substantially improving drug-like properties. Can iteratively self-improve and rescue late-stage \"fallen angel\" drug candidates.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Drug Discovery",
      "LLM",
      "Generative Models",
      "Oral"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 355,
    "title": "Scaling Atomistic Protein Binder Design with Generative Pretraining and Test-Time Compute",
    "url": "https://openreview.net/forum?id=qmCpJtFZra",
    "summary": "Proposes Complexa, a fully atomistic protein binder generator that unifies conditional generative modeling and hallucination-based sequence optimization via flow-based pretraining on Teddymer, a new large-scale synthetic binder–target dataset. Inference-time optimization bridges the two paradigms and sets new SOTA in binder design benchmarks. Extensions to small-molecule targets and enzyme design are demonstrated.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Drug Discovery",
      "Protein Design",
      "Generative Models",
      "Oral"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 356,
    "title": "Exploring Synthesizable Chemical Space with Iterative Pathway Refinements",
    "url": "https://openreview.net/forum?id=aQKVfKOkR5",
    "summary": "ReaSyn navigates synthesizable chemical space through bidirectional synthetic pathway generation (bottom-up and top-down) and holistic discrete flow-based editing. A unified autoregressive model samples both traversal directions; an iterative cycle of generation and editing explores the combinatorially large space of synthesizable molecules. Outperforms prior work in synthesizable molecule reconstruction, goal-directed optimization, and hit expansion.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Drug Discovery",
      "Molecular Biology",
      "Generative Models",
      "Oral"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 357,
    "title": "DCFold: Efficient Protein Structure Generation with Single Forward Pass",
    "url": "https://openreview.net/forum?id=LMsdys7t1L",
    "summary": "Achieves AlphaFold3-level all-atom protein structure prediction accuracy in a single forward pass using Dual Consistency training with a Temporal Geodesic Matching scheduler. Delivers a 15× inference speedup over AlphaFold3, enabling practical deployment in high-throughput virtual screening and protein design settings.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Protein Structure",
      "Drug Discovery",
      "Generative Models",
      "Oral"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 358,
    "title": "Extending Sequence Length is Not All You Need: Effective Integration of Multimodal Signals for Gene Expression Prediction",
    "url": "https://openreview.net/forum?id=wwPSfcf5Pj",
    "summary": "Challenges the prevailing assumption that longer DNA sequence context improves gene expression prediction: longer sequences can hurt performance by introducing confounding background chromatin signals. Proposes Prism, which learns multiple combinations of epigenomic features and applies backdoor adjustment to disentangle background chromatin state from active regulatory elements. Achieves SOTA gene expression prediction with short sequences only.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Genomics",
      "Epigenomics",
      "Oral"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 359,
    "title": "Refine Drugs, Don't Complete Them: Uniform-Source Discrete Flows for Fragment-Based Drug Discovery",
    "url": "https://openreview.net/forum?id=Qdu92a5DiM",
    "summary": "Reframes structure-based drug design as a refinement task rather than de novo generation: given a fragment with known pharmacophore, uniform-source discrete flows iteratively complete and optimize the rest of the molecule. This preserves known binding anchors while reducing hallucination of infeasible structures, improving binding affinity and synthesizability jointly.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Drug Discovery",
      "Generative Models",
      "Molecular Biology"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 360,
    "title": "SYNC: Measuring and Advancing Synthesizability in Structure-Based Drug Design",
    "url": "https://openreview.net/forum?id=y1tPw4Uuzg",
    "summary": "Introduces SYNC, a benchmark and metric that explicitly measures synthesizability of generated drug candidates in structure-based drug design. Reveals a large gap between state-of-the-art generative models (which optimize binding affinity) and synthesis-aware design. Proposes training objectives that jointly maximize binding affinity and synthetic accessibility.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Drug Discovery",
      "Benchmark",
      "Molecular Biology"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 361,
    "title": "SubDyve: Subgraph-Driven Dynamic Propagation for Virtual Screening Enhancement Controlling False Positive",
    "url": "https://openreview.net/forum?id=9vo3J4LwoT",
    "summary": "Applies subgraph-driven dynamic message propagation to virtual screening for drug–protein interactions, learning substructure-level binding patterns to explicitly control false positives. Improves hit rate and selectivity metrics over standard GNN-based virtual screening, addressing a key bottleneck in early-stage drug discovery.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Drug Discovery",
      "GNN",
      "Virtual Screening"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 362,
    "title": "3D RNA Inverse Design with Reinforcement Learning-Guided Diffusion Models",
    "url": "https://openreview.net/forum?id=lDyS4Qg5Ww",
    "summary": "Proposes an RL-guided diffusion framework for 3D RNA inverse design—predicting RNA sequences that fold into a target 3D structure. Reinforcement learning provides reward signals from structure prediction models, guiding the diffusion sampler toward sequences that satisfy folding constraints. Outperforms prior inverse design methods in designability, diversity, and novelty.",
    "tags": [
      "ICLR 2026",
      "2026",
      "RNA Design",
      "Generative Models",
      "Reinforcement Learning"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 363,
    "title": "Test-Time Adaptation without Source Data for Out-of-Domain Bioactivity Prediction",
    "url": "https://openreview.net/forum?id=0R6HLWvWYk",
    "summary": "Addresses the challenge of generalizing drug–target bioactivity prediction to out-of-distribution compound–protein pairs without access to source training data. Introduces a test-time adaptation strategy that adapts the pretrained model to novel biological contexts at inference time using only target-domain examples. Significantly improves performance on unseen protein families, a critical requirement for real-world drug discovery.",
    "tags": [
      "ICLR 2026",
      "2026",
      "Drug Discovery",
      "Drug-Target Interaction",
      "Test-Time Adaptation"
    ],
    "section": "ICLR 2026 Papers That Were Skipped but May Be Interesting",
    "issue": 73
  },
  {
    "id": 364,
    "title": "CellStream: Dynamical Optimal Transport Informed Embeddings for Reconstructing Cellular Trajectories from Snapshots Data | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37041",
    "summary": "A method for reconstructing cell trajectories from snapshot single-cell data. Uses Dynamical Optimal Transport to estimate coupling between snapshots and learns cell embeddings. Useful for understanding cell development and differentiation processes.",
    "tags": [
      "AAAI 2026",
      "2026",
      "single-cell",
      "trajectory",
      "optimal transport",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 365,
    "title": "CLM-Access: A Specialized Foundation Model for High-Dimensional Single-Cell ATAC-Seq Analysis | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37046",
    "summary": "A dedicated foundation model for analyzing high-dimensional single-cell ATAC-seq data. Designed to handle the high dimensionality and sparsity of chromatin accessibility data, enabling cell type identification, peak importance interpretation, and generalization to out-of-training data.",
    "tags": [
      "AAAI 2026",
      "2026",
      "single-cell",
      "ATAC-seq",
      "foundation model",
      "epigenomics",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 366,
    "title": "When Genes Speak: A Semantic-Guided Framework for Spatially Resolved Transcriptomics Data Clustering | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37047",
    "summary": "Proposes a semantic-guided framework for clustering spatial transcriptomics data. Integrates spatial context and semantic information of gene expression to achieve precise identification of tissue domains.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "clustering",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 367,
    "title": "Gene Incremental Learning for Single-Cell Transcriptomics | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37062",
    "summary": "A study addressing the continual learning problem of genes in single-cell transcriptomics. Proposes a framework that enables continual learning while preventing catastrophic forgetting when model updates occur as new gene information is added.",
    "tags": [
      "AAAI 2026",
      "2026",
      "single-cell",
      "continual learning",
      "scRNA-seq",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 368,
    "title": "GROVER: Graph-guided Representation of Omics and Vision with Expert Regulation for Adaptive Spatial Multi-omics Fusion | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37104",
    "summary": "A graph-guided representation learning framework for fusing spatial multi-omics data. Integrates gene expression (omics) and tissue images (vision) using graph structures and adaptively fuses them with expert-regulated Mixture-of-Experts. Applicable to spatial domain identification and cell type annotation.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "multi-omics",
      "graph neural network",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 369,
    "title": "scCluBench: Comprehensive Benchmarking of Clustering Algorithms for Single-Cell RNA Sequencing | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37110",
    "summary": "A comprehensive benchmark of clustering algorithms for single-cell RNA sequencing. Compares diverse datasets, metrics, and methods using a unified evaluation framework, clarifying the strengths and weaknesses of each approach.",
    "tags": [
      "AAAI 2026",
      "2026",
      "single-cell",
      "scRNA-seq",
      "clustering",
      "benchmark",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 370,
    "title": "Learning to Cluster Rare Cell Types: Implicit Semantic Data Augmentation for Spatial Multi-modal Omics Analysis | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37646",
    "summary": "A method for clustering rare cell types in spatial multimodal omics. Uses Implicit Semantic Data Augmentation to enrich representations of rare cell types that exist in small numbers, improving clustering accuracy.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "rare cell types",
      "clustering",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 371,
    "title": "Auxiliary Gene Learning: Spatial Gene Expression Estimation by Auxiliary Gene Selection | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/37857",
    "summary": "A method leveraging auxiliary gene selection to estimate spatial gene expression. A framework that dynamically selects auxiliary genes when predicting spatial gene expression from tissue section images to stabilize and improve learning.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "gene expression",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 372,
    "title": "HiFusion: Hierarchical Intra-Spot Alignment and Regional Context Fusion for Spatial Gene Expression Prediction from Histopathology | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38036",
    "summary": "Proposes HiFusion for predicting spatial gene expression from histopathology images. Achieves more precise gene expression prediction through hierarchical alignment within spots and regional context fusion from neighboring spots.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "histopathology",
      "gene expression prediction",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 373,
    "title": "SpaCRD: Multimodal Deep Fusion of Histology and Spatial Transcriptomics for Cancer Region Detection | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38135",
    "summary": "Cancer region detection through multimodal deep fusion of histopathology and spatial transcriptomics. Proposes SpaCRD, which integrates visual features of tissue images and gene expression profiles to identify cancer regions with high accuracy.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "cancer",
      "histopathology",
      "multimodal",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 374,
    "title": "SSL-CST: Cell Segmentation for Single-Cell Spatial Transcriptome Based on Self-Supervised Learning | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38804",
    "summary": "A cell segmentation method for single-cell spatial transcriptomics. Based on self-supervised learning, it learns cell boundaries from unlabeled data, enabling analysis of spatial omics data at cellular resolution.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "cell segmentation",
      "self-supervised",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 375,
    "title": "Dual-Path Knowledge-Augmented Contrastive Alignment Network for Spatially Resolved Transcriptomics | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38278",
    "summary": "A knowledge-enhanced contrastive alignment network for spatially resolved transcriptomics. Uses a dual-path design to align image and gene expression features, improving the accuracy of spatial domain identification.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "contrastive learning",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 376,
    "title": "Departures: Distributional Transport for Single-Cell Perturbation Prediction with Neural Schrödinger Bridges | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/39190",
    "summary": "A distribution transport method for single-cell perturbation prediction using neural Schrödinger bridges. Learns stochastic transport maps between pre- and post-perturbation cell states, predicting the distribution of cellular responses to unseen drugs and genetic manipulations. A novel approach capturing perturbation effects from an optimal transport perspective.",
    "tags": [
      "AAAI 2026",
      "2026",
      "single-cell",
      "perturbation",
      "optimal transport",
      "Schrödinger bridge",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 377,
    "title": "TLAGC: Taylor Linear Attention-Guided Graph Convolutions for Revealing Spatial Domains in Spatial Multi-Omics Data | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/39272",
    "summary": "A graph convolution method for uncovering spatial domains in spatial multi-omics data. Guides learning with linear attention based on Taylor expansion, balancing computational efficiency and representational power. Identifies biologically meaningful spatial structures within tissue sections with high accuracy.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "multi-omics",
      "graph neural network",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 378,
    "title": "ST-LLM: Spatial Transcriptomics Embedding with Large Language Models | Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/40713",
    "summary": "An embedding method for spatial transcriptomics leveraging large language models. By combining LLM text understanding capabilities with spatial gene expression data, enables spatial structure analysis of tissue, cell type annotation, and transfer to downstream tasks.",
    "tags": [
      "AAAI 2026",
      "2026",
      "spatial transcriptomics",
      "LLM",
      "foundation model",
      "Copilot"
    ],
    "section": "AAAI 2026",
    "issue": 45
  },
  {
    "id": 379,
    "title": "https://www.biorxiv.org/content/10.64898/2026.02.14.705918v1.full.pdf",
    "url": "https://www.biorxiv.org/content/10.64898/2026.02.14.705918v1.full.pdf",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 380,
    "title": "https://arxiv.org/pdf/2602.17532",
    "url": "https://arxiv.org/pdf/2602.17532",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 381,
    "title": "https://www.biorxiv.org/content/10.64898/2026.02.19.706756v1",
    "url": "https://www.biorxiv.org/content/10.64898/2026.02.19.706756v1",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 382,
    "title": "https://www.biorxiv.org/content/10.64898/2026.02.18.706454v1",
    "url": "https://www.biorxiv.org/content/10.64898/2026.02.18.706454v1",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 383,
    "title": "Foundation Models Improve Perturbation Response Prediction - Genbio AI",
    "url": "https://genbio.ai/foundation-models-improve-perturbation-response-prediction/",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 384,
    "title": "GitHub - genbio-ai/foundation-models-perturbation: Code for \"Foundation Models Improve Perturbation Response Prediction\" · GitHub",
    "url": "https://github.com/genbio-ai/foundation-models-perturbation",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 385,
    "title": "[2604.02346] DrugPlayGround: Benchmarking Large Language Models and Embeddings for Drug Discovery",
    "url": "https://arxiv.org/abs/2604.02346",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 386,
    "title": "https://openreview.net/forum?id=rvpDHfoTd2",
    "url": "https://openreview.net/forum?id=rvpDHfoTd2",
    "summary": "",
    "tags": [
      "ICLR 2026",
      "2026"
    ],
    "section": "ICLR2026",
    "issue": 70
  },
  {
    "id": 387,
    "title": "https://www.biorxiv.org/content/10.64898/2026.04.03.715101v1",
    "url": "https://www.biorxiv.org/content/10.64898/2026.04.03.715101v1",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  },
  {
    "id": 388,
    "title": "[2604.06264] ToxReason: A Benchmark for Mechanistic Chemical Toxicity Reasoning via Adverse Outcome Pathway",
    "url": "https://arxiv.org/abs/2604.06264",
    "summary": "",
    "tags": [],
    "section": "From scholar inbox",
    "issue": 3
  }
];
