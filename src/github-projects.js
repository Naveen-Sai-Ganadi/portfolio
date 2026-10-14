import repositoryIndex from './github-index.json';
export const githubProfile='https://github.com/Naveen-Sai-Ganadi';
const point=(title,caption,type,labels,metric,metricLabel,mood='calm')=>({title,caption,type,labels,metric,metricLabel,mood,source:caption});
const project=(id,company,role,accent,background,beats)=>({id,company,year:'GitHub',role,accent,background,url:`${githubProfile}/${id}`,beats,business:role});
export const githubChapters=[
 project('agentsmd','agentsmd','AI developer tooling · TypeScript','#d6c29c','#302519',[
  point('Keep the rules in sync.','One AGENTS.md source generates the instruction files used by Claude, Cursor, Copilot, and Windsurf.','config-typewriter',['AGENTS.md','CLAUDE.md','CURSOR','COPILOT','WINDSURF'],'1 → 5','configuration files from one source','flow'),
  point('Catch drift before it ships.','Linting, quality scoring, and nested-file checks turn configuration quality into a GitHub Actions gate.','config-inspector',['DETECT','SYNC','LINT','AUDIT','CHECK'],'Pre-alpha','CLI + reusable GitHub Action','resolve')]),
 project('ai-debate-arena','AI Debate Arena','Desktop experiment · Electron / React','#d0a7f0','#2e1b3c',[
  point('Make different models challenge an idea.','Claude and ChatGPT exchange arguments while Gemini mediates the conversation in an Electron desktop window.','debate-roundtable',['CLAUDE','GEMINI','CHATGPT'],'3','model conversations','flow'),
  point('Bring the debate to a conclusion.','Convergence, fixed-turn, and manual modes guide the exchange; the full transcript can be saved to Markdown.','debate-transcript',['ARGUMENT','MEDIATION','CONVERGENCE'],'Markdown','saved debate transcript','resolve')]),
 project('slashh-executorch','Voice at the edge','Team hackathon project · Android / ExecuTorch','#55ccea','#113845',[
  point('Keep the intelligence on the phone.','WavLM analyzes audio while Whisper-Tiny provides text for a local classifier; the Snapdragon Hexagon NPU runs the neural models.','edge-phone',['WAVLM','WHISPER-TINY','HEXAGON NPU'],'On device','no audio leaves the phone','flow'),
  point('Fuse the signals before reacting.','Audio and text scores feed a fusion model, smoothing, and hysteresis before a sustained signal produces a calming nudge.','audio-mixing',['AUDIO','TEXT','FUSION'],'Voice tension','a reflection tool, not a medical device','calm')]),
 project('slashh','Company Brain','Knowledge and agent framework · TypeScript','#b0ce8c','#26371e',[
  point('Connect knowledge to its sources.','The public core ingests documents, chunks, entities, and relations into a pluggable knowledge layer.','knowledge-library',['DOCUMENTS','VECTORS','GRAPH'],'Source-linked','company knowledge','flow'),
  point('Let specialists work together.','A supervisor delegates to agents through REST and MCP tools; the graph supports grounded answers with citations.','agent-toolbench',['SUPERVISOR','REST','MCP','CITATIONS'],'Public core','agent and knowledge foundations','resolve')]),
 project('load','Load','Form-filling extension · JavaScript','#efb16d','#392517',[
  point('Move knowledge into the right fields.','A Chrome extension detects forms, reads uploaded knowledge files, and maps relevant information to the page.','browser-autofill',['KNOWLEDGE','FIELD MAP','FORM'],'Chrome','Manifest V3 extension','flow'),
  point('Show the reasoning before the fill.','Review mode presents proposed answers, reasoning, and confidence before the user confirms the fill.','human-review',['ANALYZE','REVIEW','CONFIRM','FILL'],'User review','before form filling','calm')]),
 project('Resume_Analyzer','Resume Analyzer','Full-stack AI application · React / Flask','#9dbefa','#1c2945',[
  point('Compare experience with the role.','The application uses GPT-4 to analyze a résumé against a job description and return scoring and feedback.','resume-scales',['RESUME','JOB DESCRIPTION','FEEDBACK'],'GPT-4','résumé and role comparison','flow'),
  point('Connect the analysis to an application.','A React interface, Flask API, MongoDB store, JWT-cookie authentication, and Docker Compose support the workflow.','fullstack-workspace',['REACT','FLASK','MONGODB','DOCKER'],'Full stack','documented application architecture','build')]),
 project('GodsEye','GodsEye','Computer vision · Python / TensorFlow','#71d6c3','#123830',[
  point('Find the face. Read the mask.','An OpenCV camera workflow passes detected faces to a TensorFlow face-mask classification model.','mask-detection',['CAMERA','FACE REGION','MASK MODEL'],'Computer vision','face-mask detection','flow'),
  point('Train the model behind the detector.','Training and evaluation notebooks prepare the data and export a model for the live camera application.','training-lighttable',['DATA','TRAIN','EVALUATE','EXPORT'],'Notebook → app','training and camera inference','build')]),
 project('Facial_Expression_Recognition','Expression Recognition','Research notebook · TensorFlow / Keras','#e5b2c6','#352334',[
  point('Learn patterns in expression.','A CNN notebook combines exploratory data analysis with facial-expression classification.','expression-study',['FACE INPUT','CNN','EXPRESSION'],'CNN','facial-expression research','flow'),
  point('Look at the data before the model.','NumPy, Pandas, Matplotlib, and Seaborn support exploration before the TensorFlow / Keras training workflow.','data-exploration-lab',['EXPLORE','VISUALIZE','TRAIN'],'EDA + learning','documented notebook workflow','calm')])
];
export {repositoryIndex};
