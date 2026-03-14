from flask import Flask, request
from ollama import chat, ChatResponse
from flask_cors import CORS


PLANNER_SYSTEM_PROMPT = """You are an expert project manager and contract planner for a freelance escrow platform called TrustVault.

Your job is to convert a client's project description into a structured, milestone-based contract plan.

Each milestone must include:
  - id         : sequential integer starting from 1
  - objective  : short, clear title (e.g. "UX Research & Wireframing")
  - description: detailed description of work in this milestone
  - deliverables: list of SPECIFIC, VERIFIABLE outputs (e.g. "Low-fi Figma link", "Deployed API endpoint URL")
  - acceptance_criteria: list of MEASURABLE conditions to mark milestone complete
  - estimated_days: realistic number of working days
  - amount_percentage: percentage of total budget (all milestones must sum to 100)

Also provide a top-level project_analysis:
  - project_type: category (e.g. web_application, mobile_app, data_pipeline)
  - complexity: "low", "medium", or "high"
  - estimated_total_days: sum of all milestone estimated_days

STRICT RULES:
1. Deliverables must be verifiable outputs — NOT vague tasks like "build backend".
2. Acceptance criteria must be measurable — NOT "looks good".
3. All milestones must be logically sequenced (research before development, etc.).
4. amount_percentage values must sum to exactly 100.
5. Return ONLY a valid JSON object — no markdown fences, no extra text, no explanation.

JSON FORMAT:
{
  "project_analysis": {
    "project_type": "string",
    "complexity": "low | medium | high",
    "estimated_total_days": integer
  },
  "milestones": [
    {
      "id": 1,
      "objective": "string",
      "description": "string",
      "deliverables": ["string"],
      "acceptance_criteria": ["string"],
      "estimated_days": integer,
      "amount_percentage": integer
    }
  ]
}
"""


def generate_response(messages):
    response: ChatResponse = chat(model="gpt-oss:120b-cloud", messages=[{
        "role": "user",
        "content": PLANNER_SYSTEM_PROMPT + messages}])
    return response["message"]["content"]


app = Flask(__name__)
CORS(app) 

@app.route("/", methods=["POST"])
def gen_res():
    resp = generate_response(request.json["messages"])
    return resp

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000)
