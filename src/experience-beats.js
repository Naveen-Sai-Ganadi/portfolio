// Each entry maps by index to one complete paragraph in content.json.
// Scene captions condense that paragraph; the original remains in the point dialog and résumé.
const b=(title,caption,type,labels,metric,metricLabel,mood='calm')=>({title,caption,type,labels,metric,metricLabel,mood});
export const experienceBeats=[
 [
  b('Make every invoice accountable.','Connect hospital invoices to the contract terms that govern them.','invoice-desk',['INVOICE','CONTRACT','EVIDENCE'],'Healthcare','spend intelligence','warm'),
  b('Own the whole production system.','Connect the validation pipeline, customer application, and extraction service into one operating platform.','operations-console',['AI PIPELINE','CUSTOMER APP','EXTRACTION'],'1,230+','commits across both app repos','build'),
  b('Follow every line to its evidence.','Orchestrate matching, vector retrieval, and graph context across 11 tenants.','line-evidence',['INNGEST','CLAUDE','QDRANT','POSTGRES','NEO4J'],'35K','validated lines · $93.6M','flow'),
  b('Verify first. Then route.','Extracted values pass through verification before acceptance, a second pass, or human review.','review-sorter',['VERIFIED','81% ACCEPT','16% RECHECK','3% REVIEW'],'90%','dropped shift rows uncovered','alert'),
  b('Bring hidden variance into view.','Audit agents trace invoice rows to excluded contracts and incorrect calculations.','audit-inspection',['3,844 ROWS','713 CHECKS','6 AGENTS'],'$173.5M','hidden variance surfaced','alert'),
  b('Give remediation a workforce.','Nine agents run thirty detectors, surface silent failures, and open fix pull requests.','repair-bench',['DETECT','TRIAGE','REPAIR','OPEN PR'],'9','agents · 30 detectors','resolve'),
  b('Bring the documents home.','Phoenix pulls invoices and contracts from hospital systems into a deterministic S3 ingestion pipeline.','document-archive',['ERP','BROWSERBASE','INNGEST','S3'],'38 / 38','documents ingested every run','flow'),
  b('Keep every tenant in its own world.','Tenant-filtered SQL views and enterprise SSO close the gaps between customer boundaries.','tenant-lockers',['51 VIEWS','TENANT FILTER','WORKOS','ENTRA'],'51','tenant-filtered views','secure'),
  b('Answer with boundaries.','Streaming assistance combines topic guardrails with a measured model evaluation.','guarded-assistant',['QUESTION','GUARDRAILS','STREAM'],'8 / 8','Claude evaluation test cases','calm'),
  b('Turn findings into action.','Cases, claims, demand letters, and a review workbench connect audit findings to the recovery workflow.','claims-desk',['REVIEW','CASE','CLAIM','LETTER'],'3–6×','faster key queries','resolve'),
  b('Recover what the queue left behind.','A recovery job finds stalled invoices; CMS ambulance rates provide a pricing benchmark.','recovery-conveyor',['STALLED','RECOVERED','CMS RATES'],'3,542','stalled invoices found','alert'),
  b('Carry the system into production.','Lead hospital cutovers, production releases, and a sales demonstration environment.','release-dock',['CUTOVER','RELEASE','AWS CDK','VERCEL'],'~11','production releases','build'),
  b('Build the team around the system.','Daily coordination, PR review, interviews, role definition, and onboarding connect the people doing the work.','team-table',['STANDUP','PR REVIEW','HIRING','ONBOARDING'],'7–9','people in the daily standup','calm')
 ],
 [
  b('One practice. Eight connected services.','Voice, scheduling, records, staff, inventory, billing, analytics, and access work as one platform.','clinic-miniature',['VOICE','SCHEDULE','RECORDS','STAFF','INVENTORY','BILLING','ANALYTICS','ACCESS'],'8','practice services','calm'),
  b('Build from the first foundation.','Own architecture, the full-stack application, cloud infrastructure, and production launch as the sole engineer.','blueprint-workshop',['ARCHITECTURE','APPLICATION','CLOUD','LAUNCH'],'End to end','founding engineering','build'),
  b('Turn a voice into an appointment.','A multilingual receptionist greets patients, answers from the knowledge base, books visits, and routes calls.','reception-booking',['OPENAI REALTIME','TWILIO','SCHEDULING'],'Realtime','voice receptionist','flow'),
  b('Route each request to the right model.','A shared LLM gateway selects models by service and reuses cached prompts.','model-switchboard',['MODEL ROUTING','PROMPT CACHE','RESPONSE'],'25–30%','lower AI inference cost','resolve'),
  b('Scale the service, not the ceremony.','Agent-as-a-Lambda connects API Gateway, DynamoDB, Cognito, and CDK across the backend.','serverless-launch',['API GATEWAY','LAMBDA','DYNAMODB','COGNITO','CDK'],'~60%','less new-service delivery time','build'),
  b('Give every service a clear structure.','Five modules separate routing, handling, business logic, data models, and resources.','module-toolbox',['ROUTER','HANDLER','SERVICE','MODELS','RESOURCE'],'5','files in the Lambda standard','calm'),
  b('Make onboarding resilient.','A DynamoDB schema connects more than twenty-eight tables with lazy initialization and resilient onboarding.','onboarding-cabinet',['28+ TABLES','LAZY INIT','ONBOARDING'],'28+','DynamoDB tables','secure'),
  b('Ship the interface without interruption.','A React and TypeScript dashboard moves through GitHub Actions into development and production.','dashboard-handoff',['REACT','TYPESCRIPT','ACTIONS','DEV / PROD'],'Zero downtime','deployment workflow','build'),
  b('Take the product beyond the code.','Market research, UX, SEO, Cal.com, Twilio, and go-to-market complete the product lifecycle.','launch-planner',['RESEARCH','UX','INTEGRATE','LAUNCH'],'Full lifecycle','research through go-to-market','warm')
 ],
 [
  b('Bring the business into the model.','Work with leadership and customer success on lead generation and multi-franchise analysis.','franchise-street',['C-SUITE','CUSTOMER SUCCESS','ML WORKFLOWS'],'Business + ML','lead-generation systems','calm'),
  b('Teach the model the right tone.','Supervised fine-tuning, LoRA, and preference optimization adapt LLaMA-3 to the domain.','language-tuning',['LLAMA-3 8B','SFT','LORA','DPO'],'25%','better personalization','build'),
  b('Put four agents to work.','Inbound, outbound prospecting, FDD targeting, and response agents span acquisition channels.','sales-workstations',['INBOUND','OUTBOUND','FDD TARGET','RESPONDER'],'4','production agents','flow'),
  b('Move a lead through the whole journey.','LangChain, Airflow, and CrewAI connect collection, orchestration, scoring, and conversion.','lead-funnel',['LANGCHAIN','AIRFLOW','CREWAI','SCORING'],'500+','leads processed each day','resolve'),
  b('Improve the signal. Watch the system.','DeBERTa intent models and Pinecone retrieval run on Azure with deployment and model monitoring.','retrieval-library',['DEBERTA','PINECONE RAG','AZURE','W&B'],'+18% / +20%','model and RAG accuracy gains','calm'),
  b('Connect technical work to the next chapter.','As the sole data scientist, support the team’s fundraising with the ML work behind the product.','pitch-room',['DATA SCIENCE','PRODUCT','LEADERSHIP'],'Sole','data scientist','warm')
 ],
 [
  b('Give conversation a shared context.','LLaMA-3-70B, BERT, and spaCy power conversational support through Telegram and a web interface.','conversation-terminals',['LLAMA-3-70B','BERT','SPACY'],'Multimodel','conversational support','calm'),
  b('Read more than the words.','Text, speech, and facial-expression inputs inform mood detection and personalized interactions.','multimodal-instruments',['TEXT','SPEECH','EXPRESSION'],'3','input modalities','flow'),
  b('Let the response follow the sentiment.','Real-time NLP and Random Forest / SVM mood models adapt the conversation to incoming signals.','sentiment-dial',['NLP','RANDOM FOREST','SVM','RESPONSE'],'Realtime','sentiment adaptation','resolve'),
  b('Build protection into the pipeline.','AWS deployment combines encryption, access controls, audit logs, and automated ML workflows.','protected-cloud',['ENCRYPTION','ACCESS','AUDIT LOG','ML PIPELINE'],'AWS','protected deployment','secure')
 ],
 [
  b('Prepare the signal before the model.','Python and C++ pipelines clean client and portfolio data in S3, check consistency, and extract features.','data-refinery',['S3','CLEAN','OUTLIERS','FEATURES'],'Python + C++','data preparation','flow'),
  b('Let the experiments compete.','Compare more than ten algorithms with tuning and k-fold validation for risk and portfolio models.','experiment-podium',['XGBOOST','LIGHTGBM','GRADIENT BOOST','NEURAL NET'],'12%','model performance gain','build'),
  b('Find the anomaly, reduce the noise.','Risk models surface unusual trading behavior while reducing false alarms.','trading-radar',['TRADING SIGNAL','ANOMALY','REVIEW'],'20%','fewer false positives','alert'),
  b('Close the training and serving loop.','SageMaker and Lambda automate retraining; Ray, Databricks, and GPU EC2 serve optimized BERT.','training-deployment',['SAGEMAKER','LAMBDA','RAY','GPU EC2'],'Train → serve','automated ML infrastructure','resolve')
 ],
 [
  b('Bring the useful answer to the top.','A reranking algorithm improves telecom customer-support recommendations.','support-search',['CANDIDATES','RERANK','RECOMMEND'],'Telecom','support recommendations','calm'),
  b('Turn live streams into better decisions.','Low-latency C++ features and Airflow ETL improve network models and data loading.','telecom-towers',['C++ STREAMS','FEATURES','AIRFLOW'],'22%','uplift in network optimization','flow'),
  b('Keep the live system in sight.','New Relic, Datadog, and Git-based delivery connect monitoring with the release workflow.','network-control-room',['NEW RELIC','DATADOG','GIT CI/CD'],'Realtime','monitoring and delivery','build')
 ]
];
