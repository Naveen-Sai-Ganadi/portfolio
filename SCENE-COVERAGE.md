# Scene coverage and source mapping

39 experience scenes preserve the order of all 39 supplied experience paragraphs. Sixteen GitHub scenes explain eight verified public repositories. Scene types describe conceptual 3D arrangements, not product recordings or client data.

## Lead AI Engineer — SpendRule

### 1. Make every invoice accountable.

- 3D scene: invoice-desk
- Environment: warm
- Scene labels: INVOICE · CONTRACT · EVIDENCE
- Highlight: Healthcare — spend intelligence

Source paragraph 1:

> Healthcare spend-audit platform that checks hospital invoices against contract terms, used by MemorialCare, OSF HealthCare, MUSC, Kettering Health and MultiCare.

### 2. Own the whole production system.

- 3D scene: operations-console
- Environment: build
- Scene labels: AI PIPELINE · CUSTOMER APP · EXTRACTION
- Highlight: 1,230+ — commits across both app repos

Source paragraph 2:

> Lead engineering across three production systems: a Python AI validation pipeline, a Next.js + Express customer app, and a cloud extraction service. Top committer on both app repos (1,230+ commits).

### 3. Follow every line to its evidence.

- 3D scene: line-evidence
- Environment: flow
- Scene labels: INNGEST · CLAUDE · QDRANT · POSTGRES · NEO4J
- Highlight: 35K — validated lines · $93.6M

Source paragraph 3:

> Built an LLM validation pipeline (Inngest orchestration, Claude matching, Qdrant vector search, Postgres + Neo4j) that validated 35K invoice lines worth $93.6M across 11 tenants and flagged $137.6M in unvalidated spend.

### 4. Verify first. Then route.

- 3D scene: review-sorter
- Environment: alert
- Scene labels: VERIFIED · 81% ACCEPT · 16% RECHECK · 3% REVIEW
- Highlight: 90% — dropped shift rows uncovered

Source paragraph 4:

> Designed a verify-then-route pipeline that checks every extracted value before routing: 81% auto-accepted, 16% second pass, 3% human review. It caught that 90% of shift rows ($37.8M of $41.5M) were being dropped during extraction. Live for MultiCare since Oct 2026.

### 5. Bring hidden variance into view.

- 3D scene: audit-inspection
- Environment: alert
- Scene labels: 3,844 ROWS · 713 CHECKS · 6 AGENTS
- Highlight: $173.5M — hidden variance surfaced

Source paragraph 5:

> Led audits that surfaced $173.5M of hidden variance across 3,844 rows. A six-agent audit of 713 validations found $17.9M priced from excluded contracts and a calculation bug hiding $3.15M.

### 6. Give remediation a workforce.

- 3D scene: repair-bench
- Environment: resolve
- Scene labels: DETECT · TRIAGE · REPAIR · OPEN PR
- Highlight: 9 — agents · 30 detectors

Source paragraph 6:

> Built an autonomous remediation fleet: 9 AI agents running 30 detectors across 14 tenants with zero detector errors, surfacing $39M reported as $0 and opening fix PRs automatically.

### 7. Bring the documents home.

- 3D scene: document-archive
- Environment: flow
- Scene labels: ERP · BROWSERBASE · INNGEST · S3
- Highlight: 38 / 38 — documents ingested every run

Source paragraph 7:

> Built Phoenix from scratch: Browserbase browser automation + Inngest pulling invoices and contracts from hospital ERP and contract systems (OSF Premier, CobbleStone, MUSC GHX) into S3. Made ingestion deterministic (38 of 38 documents every run, up from 26–38). Shipped with Docker, GHCR CI, Cycle and Vercel.

### 8. Keep every tenant in its own world.

- 3D scene: tenant-lockers
- Environment: secure
- Scene labels: 51 VIEWS · TENANT FILTER · WORKOS · ENTRA
- Highlight: 51 — tenant-filtered views

Source paragraph 8:

> Hardened multi-tenant security: fixed cross-tenant data leaks, moved AI-generated SQL onto 51 tenant-filtered views so it fails closed, and set up enterprise SSO with WorkOS and Microsoft Entra.

### 9. Answer with boundaries.

- 3D scene: guarded-assistant
- Environment: calm
- Scene labels: QUESTION · GUARDRAILS · STREAM
- Highlight: 8 / 8 — Claude evaluation test cases

Source paragraph 9:

> Built the in-app AI assistant with streaming answers and topic guardrails; ran the model evaluation (Claude 8/8 vs GPT-4.1 5/8 on the test set).

### 10. Turn findings into action.

- 3D scene: claims-desk
- Environment: resolve
- Scene labels: REVIEW · CASE · CLAIM · LETTER
- Highlight: 3–6× — faster key queries

Source paragraph 10:

> Shipped dispute management (Cases and Claims with demand letters), an invoice-review workbench and analytics; added Redis caching and rate limiting and made key queries 3–6x faster.

### 11. Recover what the queue left behind.

- 3D scene: recovery-conveyor
- Environment: alert
- Scene labels: STALLED · RECOVERED · CMS RATES
- Highlight: 3,542 — stalled invoices found

Source paragraph 11:

> Shipped a recovery job that found 3,542 stalled invoices (7x the estimate) and a pricing benchmark built on the CMS ambulance fee schedule.

### 12. Carry the system into production.

- 3D scene: release-dock
- Environment: build
- Scene labels: CUTOVER · RELEASE · AWS CDK · VERCEL
- Highlight: ~11 — production releases

Source paragraph 12:

> Led the MemorialCare production cutover and working sessions with hospital AP and IT teams; published about 11 production releases; built the sales demo environment on AWS CDK + Vercel.

### 13. Build the team around the system.

- 3D scene: team-table
- Environment: calm
- Scene labels: STANDUP · PR REVIEW · HIRING · ONBOARDING
- Highlight: 7–9 — people in the daily standup

Source paragraph 13:

> Run the daily standup for a team of 7–9, set the PR review process, wrote role specs and ran technical interviews for backend, full-stack and data engineering hires, and onboard new engineers.

## Founding AI Engineer — Infillo AI

### 1. One practice. Eight connected services.

- 3D scene: clinic-miniature
- Environment: calm
- Scene labels: VOICE · SCHEDULE · RECORDS · STAFF · INVENTORY · BILLING · ANALYTICS · ACCESS
- Highlight: 8 — practice services

Source paragraph 1:

> Built eight healthcare practice services end to end with the co-founders: voice receptionist, scheduling, patient records, staff management, inventory, billing, analytics and access controls.

### 2. Build from the first foundation.

- 3D scene: blueprint-workshop
- Environment: build
- Scene labels: ARCHITECTURE · APPLICATION · CLOUD · LAUNCH
- Highlight: End to end — founding engineering

Source paragraph 2:

> Built the AI-powered healthcare platform from the ground up as sole engineer: architecture, full-stack app, cloud infrastructure and production launch.

### 3. Turn a voice into an appointment.

- 3D scene: reception-booking
- Environment: flow
- Scene labels: OPENAI REALTIME · TWILIO · SCHEDULING
- Highlight: Realtime — voice receptionist

Source paragraph 3:

> Engineered a real-time Voice AI receptionist on OpenAI's Realtime API and Twilio that greets patients, books appointments, answers FAQs from a knowledge base and routes calls, with multi-language support and voice cloning.

### 4. Route each request to the right model.

- 3D scene: model-switchboard
- Environment: resolve
- Scene labels: MODEL ROUTING · PROMPT CACHE · RESPONSE
- Highlight: 25–30% — lower AI inference cost

Source paragraph 4:

> Built a unified LLM gateway with per-service model routing and Claude prompt caching, cutting AI inference cost 25–30% and improving P95 latency 30–35%.

### 5. Scale the service, not the ceremony.

- 3D scene: serverless-launch
- Environment: build
- Scene labels: API GATEWAY · LAMBDA · DYNAMODB · COGNITO · CDK
- Highlight: ~60% — less new-service delivery time

Source paragraph 5:

> Architected a serverless AWS backend with an "Agent-as-a-Lambda" pattern (API Gateway, DynamoDB, Cognito, CDK), reducing new-service delivery time ~60% across 11+ microservices.

### 6. Give every service a clear structure.

- 3D scene: module-toolbox
- Environment: calm
- Scene labels: ROUTER · HANDLER · SERVICE · MODELS · RESOURCE
- Highlight: 5 — files in the Lambda standard

Source paragraph 6:

> Set a modular 5-file Lambda standard (router, handler, service, data models, resource) across every service for consistency and fast onboarding.

### 7. Make onboarding resilient.

- 3D scene: onboarding-cabinet
- Environment: secure
- Scene labels: 28+ TABLES · LAZY INIT · ONBOARDING
- Highlight: 28+ — DynamoDB tables

Source paragraph 7:

> Designed a 28+ table DynamoDB schema with lazy user initialization and resilient onboarding for zero data loss.

### 8. Ship the interface without interruption.

- 3D scene: dashboard-handoff
- Environment: build
- Scene labels: REACT · TYPESCRIPT · ACTIONS · DEV / PROD
- Highlight: Zero downtime — deployment workflow

Source paragraph 8:

> Built a React + TypeScript frontend with a healthcare dashboard, and CI/CD on GitHub Actions for zero-downtime deploys to dev and prod.

### 9. Take the product beyond the code.

- 3D scene: launch-planner
- Environment: warm
- Scene labels: RESEARCH · UX · INTEGRATE · LAUNCH
- Highlight: Full lifecycle — research through go-to-market

Source paragraph 9:

> Owned the product lifecycle from market research and UX through SEO, Cal.com and Twilio integrations, and go-to-market.

## Data Scientist — RevScale AI

### 1. Bring the business into the model.

- 3D scene: franchise-street
- Environment: calm
- Scene labels: C-SUITE · CUSTOMER SUCCESS · ML WORKFLOWS
- Highlight: Business + ML — lead-generation systems

Source paragraph 1:

> Worked with the C-suite and customer success on ML models and workflows for lead generation and multi-franchise business analysis.

### 2. Teach the model the right tone.

- 3D scene: language-tuning
- Environment: build
- Scene labels: LLAMA-3 8B · SFT · LORA · DPO
- Highlight: 25% — better personalization

Source paragraph 2:

> Fine-tuned LLaMA-3 8B with SFT + LoRA + DPO for domain- and tone-specific generation, raising personalization 25% and client engagement 30%.

### 3. Put four agents to work.

- 3D scene: sales-workstations
- Environment: flow
- Scene labels: INBOUND · OUTBOUND · FDD TARGET · RESPONDER
- Highlight: 4 — production agents

Source paragraph 3:

> Shipped four production agents (Inbound Agent, Outbound Prospector, FDD Targeting Agent, Auto-Responder) across acquisition channels.

### 4. Move a lead through the whole journey.

- 3D scene: lead-funnel
- Environment: resolve
- Scene labels: LANGCHAIN · AIRFLOW · CREWAI · SCORING
- Highlight: 500+ — leads processed each day

Source paragraph 4:

> Built multi-agent lead pipelines with LangChain + Airflow and CrewAI scoring, processing 500+ leads/day, improving lead gathering 40% and driving a 50% conversion uplift.

### 5. Improve the signal. Watch the system.

- 3D scene: retrieval-library
- Environment: calm
- Scene labels: DEBERTA · PINECONE RAG · AZURE · W&B
- Highlight: +18% / +20% — model and RAG accuracy gains

Source paragraph 5:

> Improved accuracy with DeBERTa sentiment and intent models (+18%) and a Pinecone RAG agent (+20%), deployed on Azure (Blob, CosmosDB, Functions, GPU VMs) with GitHub Actions CI/CD and W&B monitoring.

### 6. Connect technical work to the next chapter.

- 3D scene: pitch-room
- Environment: warm
- Scene labels: DATA SCIENCE · PRODUCT · LEADERSHIP
- Highlight: Sole — data scientist

Source paragraph 6:

> Played a pivotal role as the sole data scientist in helping the team secure funding.

## AI Engineer — Thirdi.co

### 1. Give conversation a shared context.

- 3D scene: conversation-terminals
- Environment: calm
- Scene labels: LLAMA-3-70B · BERT · SPACY
- Highlight: Multimodel — conversational support

Source paragraph 1:

> Built a multi-model AI therapist platform combining LLaMA-3-70B, BERT and spaCy for context-aware conversational support through Telegram and a web UI.

### 2. Read more than the words.

- 3D scene: multimodal-instruments
- Environment: flow
- Scene labels: TEXT · SPEECH · EXPRESSION
- Highlight: 3 — input modalities

Source paragraph 2:

> Fine-tuned LLaMA-3-70B with multimodal inputs (text, speech, facial emotion recognition) for mood detection and personalized interactions.

### 3. Let the response follow the sentiment.

- 3D scene: sentiment-dial
- Environment: resolve
- Scene labels: NLP · RANDOM FOREST · SVM · RESPONSE
- Highlight: Realtime — sentiment adaptation

Source paragraph 3:

> Developed real-time NLP pipelines and mood models (Random Forest, SVM) that adapt responses to user sentiment.

### 4. Build protection into the pipeline.

- 3D scene: protected-cloud
- Environment: secure
- Scene labels: ENCRYPTION · ACCESS · AUDIT LOG · ML PIPELINE
- Highlight: AWS — protected deployment

Source paragraph 4:

> Deployed a HIPAA-compliant system on AWS with encryption, access controls, audit logging and automated ML pipelines.

## ML Engineer — Workmate Inc (Client: Morgan Stanley)

### 1. Prepare the signal before the model.

- 3D scene: data-refinery
- Environment: flow
- Scene labels: S3 · CLEAN · OUTLIERS · FEATURES
- Highlight: Python + C++ — data preparation

Source paragraph 1:

> Built Python and C++ preprocessing pipelines over large client and portfolio data in S3: missing-data handling, transaction outlier detection, consistency checks and feature engineering.

### 2. Let the experiments compete.

- 3D scene: experiment-podium
- Environment: build
- Scene labels: XGBOOST · LIGHTGBM · GRADIENT BOOST · NEURAL NET
- Highlight: 12% — model performance gain

Source paragraph 2:

> Led experiments across 10+ algorithms (Gradient Boosting, XGBoost, LightGBM, neural nets) for risk profiling and portfolio optimization, a 12% performance gain through tuning and k-fold validation.

### 3. Find the anomaly, reduce the noise.

- 3D scene: trading-radar
- Environment: alert
- Scene labels: TRADING SIGNAL · ANOMALY · REVIEW
- Highlight: 20% — fewer false positives

Source paragraph 3:

> Deployed risk and anomaly detection models for unusual trading behavior, cutting false positives 20% and improving detection accuracy 25%.

### 4. Close the training and serving loop.

- 3D scene: training-deployment
- Environment: resolve
- Scene labels: SAGEMAKER · LAMBDA · RAY · GPU EC2
- Highlight: Train → serve — automated ML infrastructure

Source paragraph 4:

> Designed ML infrastructure on SageMaker and Lambda for automated training and retraining; served optimized BERT with Ray, Databricks and GPU EC2 clusters for lower latency.

## Machine Learning Engineer — Capgemini

### 1. Bring the useful answer to the top.

- 3D scene: support-search
- Environment: calm
- Scene labels: CANDIDATES · RERANK · RECOMMEND
- Highlight: Telecom — support recommendations

Source paragraph 1:

> Implemented a customer-support recommendation system for telecom with a reranking algorithm.

### 2. Turn live streams into better decisions.

- 3D scene: telecom-towers
- Environment: flow
- Scene labels: C++ STREAMS · FEATURES · AIRFLOW
- Highlight: 22% — uplift in network optimization

Source paragraph 2:

> Built C++ feature extraction for low-latency telecom data streams, a 22% uplift in network optimization models; automated ETL with Airflow, cutting load time 40%.

### 3. Keep the live system in sight.

- 3D scene: network-control-room
- Environment: build
- Scene labels: NEW RELIC · DATADOG · GIT CI/CD
- Highlight: Realtime — monitoring and delivery

Source paragraph 3:

> Built real-time monitoring dashboards in New Relic and Datadog and CI/CD with Git-based version control.

## Public GitHub project scenes

### [agentsmd](https://github.com/Naveen-Sai-Ganadi/agentsmd)

1. **Keep the rules in sync.** One AGENTS.md source generates the instruction files used by Claude, Cursor, Copilot, and Windsurf. Scene: config-typewriter; environment: flow.

2. **Catch drift before it ships.** Linting, quality scoring, and nested-file checks turn configuration quality into a GitHub Actions gate. Scene: config-inspector; environment: resolve.

### [AI Debate Arena](https://github.com/Naveen-Sai-Ganadi/ai-debate-arena)

1. **Make different models challenge an idea.** Claude and ChatGPT exchange arguments while Gemini mediates the conversation in an Electron desktop window. Scene: debate-roundtable; environment: flow.

2. **Bring the debate to a conclusion.** Convergence, fixed-turn, and manual modes guide the exchange; the full transcript can be saved to Markdown. Scene: debate-transcript; environment: resolve.

### [Voice at the edge](https://github.com/Naveen-Sai-Ganadi/slashh-executorch)

1. **Keep the intelligence on the phone.** WavLM analyzes audio while Whisper-Tiny provides text for a local classifier; the Snapdragon Hexagon NPU runs the neural models. Scene: edge-phone; environment: flow.

2. **Fuse the signals before reacting.** Audio and text scores feed a fusion model, smoothing, and hysteresis before a sustained signal produces a calming nudge. Scene: audio-mixing; environment: calm.

### [Company Brain](https://github.com/Naveen-Sai-Ganadi/slashh)

1. **Connect knowledge to its sources.** The public core ingests documents, chunks, entities, and relations into a pluggable knowledge layer. Scene: knowledge-library; environment: flow.

2. **Let specialists work together.** A supervisor delegates to agents through REST and MCP tools; the graph supports grounded answers with citations. Scene: agent-toolbench; environment: resolve.

### [Load](https://github.com/Naveen-Sai-Ganadi/load)

1. **Move knowledge into the right fields.** A Chrome extension detects forms, reads uploaded knowledge files, and maps relevant information to the page. Scene: browser-autofill; environment: flow.

2. **Show the reasoning before the fill.** Review mode presents proposed answers, reasoning, and confidence before the user confirms the fill. Scene: human-review; environment: calm.

### [Resume Analyzer](https://github.com/Naveen-Sai-Ganadi/Resume_Analyzer)

1. **Compare experience with the role.** The application uses GPT-4 to analyze a résumé against a job description and return scoring and feedback. Scene: resume-scales; environment: flow.

2. **Connect the analysis to an application.** A React interface, Flask API, MongoDB store, JWT-cookie authentication, and Docker Compose support the workflow. Scene: fullstack-workspace; environment: build.

### [GodsEye](https://github.com/Naveen-Sai-Ganadi/GodsEye)

1. **Find the face. Read the mask.** An OpenCV camera workflow passes detected faces to a TensorFlow face-mask classification model. Scene: mask-detection; environment: flow.

2. **Train the model behind the detector.** Training and evaluation notebooks prepare the data and export a model for the live camera application. Scene: training-lighttable; environment: build.

### [Expression Recognition](https://github.com/Naveen-Sai-Ganadi/Facial_Expression_Recognition)

1. **Learn patterns in expression.** A CNN notebook combines exploratory data analysis with facial-expression classification. Scene: expression-study; environment: flow.

2. **Look at the data before the model.** NumPy, Pandas, Matplotlib, and Seaborn support exploration before the TensorFlow / Keras training workflow. Scene: data-exploration-lab; environment: calm.

