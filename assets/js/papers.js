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
    "summary": "LLM-as-a-Judge パラダイムを提唱した seminal paper。MT-Bench（マルチターン問題集）と Chatbot Arena（クラウドソーシングによるペア比較）を導入し、GPT-4 が人間の好みと約80%一致することを示した。position bias・verbosity bias などの限界も体系的に分析。",
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
    "summary": "LLM を \"試験官\" として動的に評価するフレームワーク。反復的な質問生成と採点を行い、固定ベンチマークでは測れない開放的能力を評価。知識の深さと応答の一貫性を多角的に検証できる。",
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
    "summary": "GPT-4 を用いた NLG 評価フレームワーク。Chain-of-Thought によって評価基準を明示化し、フォーム形式のスコアリングで ROUGE・BERTScore より高い人間との相関を達成。テキスト要約・ダイアログ生成タスクで有効性を実証。",
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
    "summary": "LLM（ChatGPT など）が人間評価者の代替として機能するかを網羅的に検証した研究。人間とのアノテーション一致率・費用・一貫性を多タスクで比較し、テキスト生成品質評価における LLM の有効性と限界を明らかにした。",
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
    "summary": "複数の LLM エージェントがディベートを通じて合意を形成する評価フレームワーク。単一エージェント評価に比べ position bias を低減し、Human 判定との一致率が向上。MT-Bench・FairEval での評価で優位性を示した。",
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
    "summary": "LLM の能力を「論理的思考」「事実性」「指示追従」など細粒度スキルに分解して評価するプロトコル。スキル単位のスコアで弱点を特定でき、汎用スコアでは隠れていたモデル間の差異を可視化。",
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
    "summary": "ルーブリック（採点基準）付きフィードバックデータで訓練したオープンソース評価 LLM（7B・13B）。GPT-4 に匹敵する評価性能を達成しつつ、ローカル実行可能でプロプライエタリ API 依存を回避。",
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
    "summary": "中国語・英語の LLM に対する多次元評価フレームワーク。タスク設計・評価者選択・スコアリング基準など評価プロセス全体を体系化し、GPT-4 ベースの自動評価と人間評価の相関分析を実施。",
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
    "summary": "中国語 LLM のアライメントを評価するベンチマーク。8 カテゴリ・700 以上の問題で構成され、GPT-4 による自動採点に rule-calibration を導入して position bias を軽減。中国語 LLM の能力比較に広く利用される。",
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
    "summary": "LLM ジャッジに内在する12種類のバイアス（verbosity・authority・beauty など）を定量評価した研究。バイアスの種類・強度をモデル横断で測定し、信頼性の高い評価のためのデバイアス手法を提案。",
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
    "summary": "LLM 評価手法を網羅的にまとめたサーベイ（ACM TIST vol.15, no.3）。LLM-as-a-Judge を含む自動評価・人間評価・ベンチマーク評価を体系化し、知識・推論・コード生成・倫理など多次元の評価軸を整理。200 本以上の論文を網羅し、今後の研究課題も提示。",
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
    "summary": "42 シナリオ・7 評価軸にわたる包括的 LLM 評価フレームワーク（Stanford CRFM）。単一指標に依存しない多面的評価を提案し、モデルのトレードオフを可視化。LLM-as-a-Judge 研究の基盤となる評価設計思想を確立。",
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
    "summary": "LLM（GPT-3.5/GPT-4）が抽象型要約の評価者として人間レベルに達していないことを示した論文。一貫性・関連性・流暢性などの次元で人間との相関を測定し、LLM ジャッジの限界と適用条件を明確化。",
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
    "summary": "ChatGPT をゼロショット感情分析の評価者として系統的に評価。18 データセット・5 タスクで既存の SOTA と比較し、few-shot プロンプトの効果・ドメイン依存性・バイアスを分析。LLM が judge として機能する範囲と限界を示す実証研究。",
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
    "summary": "LMSYS が構築したオープンな LLM 評価プラットフォーム（TMLR Featured Certification）。ユーザーが 2 モデルの出力を比較し優劣を投票する Elo レーティング方式を採用。GPT-4・Claude・Llama など主要モデルを人間選好に基づいてランキング。",
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
    "summary": "PROMETHEUS の後継となるオープンソース評価専用 LLM（7B・8×7B）。直接評価とペア比較の両方に対応し、GPT-4 ベースジャッジとの相関を大幅に向上。ルーブリック付き評価データで訓練し、多様な評価基準に対応。",
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
    "summary": "ChatGPT を中心に実務応用における LLM 活用法を体系化したサーベイ（IEEE TKDE）。テキスト分類・情報抽出・要約・翻訳・QA など多タスクでの評価方法論を整理。LLM を judge として利用する際の実践的ガイドラインを提供。",
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
    "summary": "プロンプトベースの NLP 手法を体系的にまとめたサーベイ（ACM CSUR）。LLM-as-a-Judge で広く用いられる評価プロンプト設計の理論的基盤を提供。Chain-of-Thought・few-shot プロンプティングなど評価タスクで利用される技術を網羅。",
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
    "summary": "GPT-3.5・GPT-4 を用いてコード要約の品質を自動評価する研究（Elsevier ESWA）。人間評価との相関・一貫性・再現性を実験的に測定し、LLM ジャッジの強みと限界をコード生成ドメインで明確化。",
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
    "summary": "大規模言語モデルの現状を包括的にまとめたサーベイ（Springer AI Review）。アーキテクチャ・学習・ファインチューニング・評価手法を横断的に調査。LLM-as-a-Judge を含む自動評価の潮流と課題を多角的に整理し、評価研究者にとっての全体像を提供。",
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
  }
];
