// ─────────────────────────────────────────────────────────────────────────────
// CCC Governance & Regulatory Readiness Diagnostic — questions.js
// 6 sections × 6 questions = 36 total. Each option scored 1–4.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS = [

  // ══════════════════════════════════════════════════════════════════
  // SECTION 1 — BOARD OVERSIGHT & GOVERNANCE STRUCTURE
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'board',
    title: 'Board Oversight',
    fullTitle: 'Board Oversight & Governance Structure',
    icon: '⬡',
    questions: [
      {
        id: 'b1',
        text: 'When your board last reviewed a significant risk or compliance matter, which best describes what happened?',
        options: [
          { text: 'The CEO gave a verbal update. There was no structured document and the board accepted the summary without substantive challenge.', score: 1 },
          { text: 'A written report was presented, but it focused on past events rather than forward-looking risks. Discussion stayed at the surface.', score: 2 },
          { text: 'A structured MI pack was presented with current risk ratings and compliance status. The board reviewed it against the firm\'s risk appetite and requested specific follow-up actions.', score: 3 },
          { text: 'The board received forward-looking intelligence, challenged management on specific exposures, and the discussion directly shaped a strategic or operational decision.', score: 4 }
        ]
      },
      {
        id: 'b2',
        text: 'How would you describe the independence and function of your board\'s oversight committees — Audit, Risk, Remuneration?',
        options: [
          { text: 'Committees either do not exist or meet infrequently without formal terms of reference.', score: 1 },
          { text: 'Committees exist and meet regularly, but mandates are informal and independent NEDs do not consistently drive the agenda.', score: 2 },
          { text: 'Committees have documented terms of reference, are chaired by independent NEDs, and produce minutes evidencing substantive oversight.', score: 3 },
          { text: 'Committees are demonstrably independent, their outputs feed directly into board decisions, and their effectiveness is formally reviewed at least annually.', score: 4 }
        ]
      },
      {
        id: 'b3',
        text: 'When your business model, risk profile, or regulatory environment changed materially, how did your governance structure respond?',
        options: [
          { text: 'The governance structure remained unchanged. No review was triggered.', score: 1 },
          { text: 'Informal adjustments were made to reporting lines, but no formal governance review was conducted.', score: 2 },
          { text: 'A governance review was initiated, terms of reference were updated, and changes were approved by the board.', score: 3 },
          { text: 'A structured governance review was conducted, findings reported to the board with evidence, and an improvement plan implemented and tracked.', score: 4 }
        ]
      },
      {
        id: 'b4',
        text: 'How does your board ensure that its own composition, skills, and effectiveness remain fit for purpose over time?',
        options: [
          { text: 'There is no formal succession planning or board effectiveness process. Directors serve until they resign or are removed.', score: 1 },
          { text: 'Board composition is reviewed informally. Some awareness of skills gaps exists but no documented succession or refreshment plan is in place.', score: 2 },
          { text: 'A skills matrix and succession plan are documented and reviewed annually. Board effectiveness is assessed internally on a defined cycle.', score: 3 },
          { text: 'Board composition, succession, and effectiveness are proactively managed. An independent board effectiveness review is conducted on a defined cycle and findings are actioned.', score: 4 }
        ]
      },
      {
        id: 'b5',
        text: 'Think about the last major strategic or capital decision your board made. How did governance and risk considerations feature in that process?',
        options: [
          { text: 'Governance and risk were not formally considered. The decision was driven by commercial rationale and approved without a structured risk assessment.', score: 1 },
          { text: 'A risk assessment was produced but it was developed after the decision direction had effectively been set — it confirmed rather than informed the outcome.', score: 2 },
          { text: 'Risk and governance considerations were presented to the board alongside the commercial case and materially influenced the final decision and conditions attached to it.', score: 3 },
          { text: 'Risk and governance were integrated into the decision process from the outset. The board challenged the risk assessment independently and required conditions or mitigants to be in place before approving.', score: 4 }
        ]
      },
      {
        id: 'b6',
        text: 'What does the content of your board minutes reveal about the quality of oversight actually exercised?',
        options: [
          { text: 'Minutes record decisions only, with no evidence of debate, challenge, or substantive discussion of risk and compliance matters.', score: 1 },
          { text: 'Minutes record some discussion but challenge is rare, and it is not possible to demonstrate that the board scrutinised management proposals independently.', score: 2 },
          { text: 'Minutes evidence substantive discussion, questions raised, and conditions or actions attached to approvals. Risk and compliance matters appear as standing agenda items.', score: 3 },
          { text: 'Minutes demonstrate active, documented challenge at board level — questions raised, proposals deferred or modified, and clear evidence that the board exercises independent judgement rather than endorsing management positions.', score: 4 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // SECTION 2 — ACCOUNTABILITY & LEADERSHIP RESPONSIBILITY
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'accountability',
    title: 'Accountability',
    fullTitle: 'Accountability & Leadership Responsibility',
    icon: '◈',
    questions: [
      {
        id: 'a1',
        text: 'If a regulator asked your firm to demonstrate who is individually accountable for each key risk and compliance function, which best describes your position?',
        options: [
          { text: 'We would struggle to produce a clear answer. Accountability is understood informally but not documented.', score: 1 },
          { text: 'We have some accountability mapping, but it has gaps and has not been updated since it was first created.', score: 2 },
          { text: 'We have a documented accountability framework, including Statements of Responsibility for senior roles, reviewed at least annually.', score: 3 },
          { text: 'Our accountability framework is current, covers technology and AI governance, and is independently reviewed on a defined cycle.', score: 4 }
        ]
      },
      {
        id: 'a2',
        text: 'For individuals in senior or regulated roles, how does your firm manage fitness and propriety beyond the point of appointment?',
        options: [
          { text: 'Fit and proper assessments are done at appointment only. There is no structured process after that.', score: 1 },
          { text: 'We know reassessment is required but the process is informal and inconsistently applied.', score: 2 },
          { text: 'Reassessment is triggered by defined events and conducted on an annual cycle, with records maintained.', score: 3 },
          { text: 'Fit and proper is managed as a continuous obligation — scheduled, event-driven, evidenced, and integrated into performance management.', score: 4 }
        ]
      },
      {
        id: 'a3',
        text: 'Who is accountable at senior level for your firm\'s information security, data governance, and AI or automated systems?',
        options: [
          { text: 'These are managed operationally. There is no named senior owner for any of these areas.', score: 1 },
          { text: 'There is informal senior ownership but it is not documented and boundaries of responsibility are unclear.', score: 2 },
          { text: 'Named individuals at senior management level are accountable for these functions, with documented scope and escalation protocols.', score: 3 },
          { text: 'Senior accountability for technology, data, and AI is formally allocated, integrated into the accountability framework, and reviewed as part of the governance cycle.', score: 4 }
        ]
      },
      {
        id: 'a4',
        text: 'How does your firm\'s delegation of authority framework operate in practice?',
        options: [
          { text: 'Delegation of authority is informal. Approval limits exist in people\'s heads or in email chains rather than in a documented framework.', score: 1 },
          { text: 'A delegation framework exists but it is out of date and not consistently followed, particularly following organisational changes.', score: 2 },
          { text: 'A documented delegation of authority framework is in place, reviewed following material organisational changes, and enforced with defined escalation thresholds.', score: 3 },
          { text: 'Delegation of authority is formally documented, systematically reviewed, and integrated with the accountability framework and risk appetite. Breaches of limits are escalated and recorded.', score: 4 }
        ]
      },
      {
        id: 'a5',
        text: 'When accountability gaps emerge — for example, a risk domain with no owner, or a regulatory obligation nobody has picked up — how does your firm typically identify and resolve them?',
        options: [
          { text: 'Gaps typically surface when something goes wrong. There is no proactive mechanism for identifying accountability gaps before they create problems.', score: 1 },
          { text: 'Gaps are sometimes identified during audits or reviews but the resolution process is ad hoc and inconsistent.', score: 2 },
          { text: 'The accountability framework is reviewed on a defined cycle and following regulatory or structural change. Gaps identified are assigned and tracked to resolution.', score: 3 },
          { text: 'Accountability gaps are proactively identified through a structured review process and treated as a governance risk in their own right. Resolution is tracked at senior management level with board visibility.', score: 4 }
        ]
      },
      {
        id: 'a6',
        text: 'Under SM&CR or an equivalent individual accountability regime, how accurate and current are your regulatory submissions — Statements of Responsibility, management responsibilities maps — relative to how the firm actually operates?',
        options: [
          { text: 'Submissions were made at implementation and have not been updated since. They do not reflect current responsibilities or the actual structure of the firm.', score: 1 },
          { text: 'Submissions are updated when significant changes occur, but minor shifts in responsibility are not consistently captured.', score: 2 },
          { text: 'Submissions are reviewed and updated at least annually and on material change. The documents reflect how the firm actually operates.', score: 3 },
          { text: 'Submissions are maintained as living documents. Any change in responsibility triggers an immediate review. Accuracy relative to actual operations is independently verified on a defined cycle.', score: 4 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // SECTION 3 — RISK MANAGEMENT FRAMEWORK EFFECTIVENESS
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'risk',
    title: 'Risk Management',
    fullTitle: 'Risk Management Framework Effectiveness',
    icon: '◎',
    questions: [
      {
        id: 'r1',
        text: 'Your firm\'s risk appetite statement — which best describes how it functions in practice?',
        options: [
          { text: 'We have a risk appetite statement but it is qualitative and not referenced in day-to-day decisions.', score: 1 },
          { text: 'Risk appetite has some quantitative thresholds, but breaches are not consistently escalated and it is not embedded in strategic planning.', score: 2 },
          { text: 'Risk appetite includes quantitative and qualitative tolerances with defined escalation thresholds, reviewed by the board at least annually.', score: 3 },
          { text: 'Risk appetite is operational — referenced in new product approvals, capital decisions, and strategic planning. Breach escalations are evidenced in board minutes.', score: 4 }
        ]
      },
      {
        id: 'r2',
        text: 'In practice, how do your first line (business), second line (risk and compliance), and third line (internal audit) functions operate?',
        options: [
          { text: 'The three lines are not formally defined. Risk activities are performed by the same people regardless of function.', score: 1 },
          { text: 'The model is documented but first and second line often perform the same activities, and third line challenge is limited.', score: 2 },
          { text: 'The three lines are structurally separate with documented roles, genuine second-line independence, and a risk-based internal audit mandate.', score: 3 },
          { text: 'All three lines operate with demonstrable independence. The model is reviewed for effectiveness as part of the governance cycle and outputs are reported to the board.', score: 4 }
        ]
      },
      {
        id: 'r3',
        text: 'Think about emerging risks — AI, cyber, climate, geopolitical. How does your firm identify and escalate them?',
        options: [
          { text: 'We become aware of emerging risks when they materialise or when a regulator raises them. There is no proactive process.', score: 1 },
          { text: 'Senior individuals informally track developments. Escalation depends on individual initiative rather than a structured process.', score: 2 },
          { text: 'A horizon scanning process exists and produces periodic reporting to senior management or the risk committee.', score: 3 },
          { text: 'Emerging risk identification is structured and documented. Findings are regularly reported to the board and inform strategic planning and risk appetite review.', score: 4 }
        ]
      },
      {
        id: 'r4',
        text: 'How frequently is your risk register updated, and what does that process tell you about how risk management actually operates at your firm?',
        options: [
          { text: 'The risk register exists but updates are infrequent and largely administrative. It does not reflect the firm\'s current risk environment.', score: 1 },
          { text: 'The register is updated on an annual cycle, but updates are driven by the calendar rather than by actual changes in risk.', score: 2 },
          { text: 'The register is reviewed at a defined frequency and updated when material risk events, regulatory changes, or business changes occur. Owners are assigned to each risk.', score: 3 },
          { text: 'The risk register is a live management tool. Updates occur continuously in response to the risk environment and the register is actively used by the board to manage exposures.', score: 4 }
        ]
      },
      {
        id: 'r5',
        text: 'Does your firm conduct scenario analysis or stress testing to test the resilience of its risk management framework?',
        options: [
          { text: 'No formal scenario analysis or stress testing is conducted. The framework has never been tested beyond routine operations.', score: 1 },
          { text: 'Some scenario planning takes place informally, but it is not structured, documented, or reported to the board.', score: 2 },
          { text: 'Documented stress tests or scenarios are conducted on a defined cycle, results are reviewed by senior management, and findings inform risk appetite or control improvements.', score: 3 },
          { text: 'Scenario analysis is embedded in strategic planning and capital allocation. Results are reported to the board with documented action plans. Scenarios include climate, cyber, and geopolitical risk events.', score: 4 }
        ]
      },
      {
        id: 'r6',
        text: 'How does risk management information actually reach the board, and how confident are you that it reflects the firm\'s real risk position?',
        options: [
          { text: 'Risk information reaches the board informally or only when an issue has escalated. There is no structured risk MI pack.', score: 1 },
          { text: 'A risk report is produced for board meetings but it is largely backward-looking and summarises events rather than current exposures or forward-looking indicators.', score: 2 },
          { text: 'Structured risk MI is provided to the board on a regular cycle, covering key risk categories, KRI movements, and updates on material risk events.', score: 3 },
          { text: 'Risk MI is forward-looking, benchmarked against risk appetite, and reported in a format the board can use to make decisions. The board challenges the MI and its completeness on a regular basis.', score: 4 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // SECTION 4 — COMPLIANCE & REGULATORY ENGAGEMENT
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'compliance',
    title: 'Compliance',
    fullTitle: 'Compliance & Regulatory Engagement',
    icon: '◇',
    questions: [
      {
        id: 'c1',
        text: 'How does your compliance function decide what to monitor and how often?',
        options: [
          { text: 'Compliance monitoring is reactive. Reviews happen when a problem is identified or a regulator requests them.', score: 1 },
          { text: 'A monitoring plan exists, but coverage is uniform regardless of actual risk — driven by schedule, not risk assessment.', score: 2 },
          { text: 'Monitoring is risk-based with a documented annual plan, defined scope, and completion evidenced to the board or risk committee.', score: 3 },
          { text: 'The monitoring programme is risk-based, dynamically updated as the risk environment changes, and its outputs directly inform board decision-making.', score: 4 }
        ]
      },
      {
        id: 'c2',
        text: 'When your primary regulator issues new guidance, consults on a rule change, or publishes supervisory priorities, how does your firm respond?',
        options: [
          { text: 'We typically learn about regulatory changes after they come into force — sometimes through enforcement action or peer communications.', score: 1 },
          { text: 'We monitor developments but the process is informal. Response depends on who picks it up and whether it is flagged to the right person.', score: 2 },
          { text: 'A regulatory change process exists: changes are identified, assessed for impact, assigned to an owner, and tracked to completion.', score: 3 },
          { text: 'Regulatory change management is systematic and proactive. We engage with consultation processes and track implementation with board-level visibility.', score: 4 }
        ]
      },
      {
        id: 'c3',
        text: 'When did your firm last update its AML/CFT risk assessment, and what triggered that update?',
        options: [
          { text: 'We have an AML/CFT risk assessment but it was completed some time ago and has not been meaningfully updated since.', score: 1 },
          { text: 'The assessment is updated periodically, but the trigger is the annual review cycle rather than actual changes in the risk environment.', score: 2 },
          { text: 'The assessment is reviewed annually and updated when material changes occur — new products, new markets, or new customer segments.', score: 3 },
          { text: 'The assessment is dynamic — updated on a defined cycle and on an event-driven basis — and used to actively tune controls and monitoring thresholds.', score: 4 }
        ]
      },
      {
        id: 'c4',
        text: 'When a regulatory breach or compliance incident occurs, how does your firm manage the identification, escalation, and notification process?',
        options: [
          { text: 'Breaches are identified and managed informally. There is no documented process for escalation or regulatory notification and timelines are not tracked.', score: 1 },
          { text: 'A process exists but it is inconsistently followed. Some breaches have been reported late or not at all, and notification timelines are not actively managed.', score: 2 },
          { text: 'A documented breach reporting process is in place with defined escalation timelines, clear ownership, and evidence of timely regulatory notification where required.', score: 3 },
          { text: 'The breach reporting process is embedded, tested, and periodically reviewed. Root cause analysis is conducted for all material breaches. Regulatory notifications are tracked and lessons learned are incorporated into the compliance programme.', score: 4 }
        ]
      },
      {
        id: 'c5',
        text: 'How would you characterise your firm\'s relationship with its primary regulator?',
        options: [
          { text: 'The relationship is reactive. We engage with our regulator only when required — during examinations, in response to requests, or following an issue.', score: 1 },
          { text: 'We maintain the required engagement but do not proactively manage the relationship. We are not confident our regulator has an accurate picture of our risk profile.', score: 2 },
          { text: 'The regulatory relationship is actively managed at senior level. We proactively communicate significant developments and ensure our regulator has an accurate and current view of our business.', score: 3 },
          { text: 'The relationship is strategically managed. We engage proactively, participate in industry consultations, and our regulator regards us as a firm with strong governance. Engagement is evidenced and reviewed at board level.', score: 4 }
        ]
      },
      {
        id: 'c6',
        text: 'How does compliance training reach staff, and how does your firm know it has been effective?',
        options: [
          { text: 'Training is ad hoc or mandatory-only. Completion is tracked but effectiveness is not assessed and training is not tailored to specific risk areas.', score: 1 },
          { text: 'Structured training exists for key risk areas but it is largely policy-based. Whether it has changed behaviour or understanding is not measured.', score: 2 },
          { text: 'Training is risk-based and role-specific. Completion is tracked, tested, and reported. Training is refreshed in response to regulatory change or emerging risk.', score: 3 },
          { text: 'Training effectiveness is actively measured through assessment and behavioural indicators. Results are used to refine the programme. Training outcomes are reported to the board as a governance and culture indicator.', score: 4 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // SECTION 5 — CONTROL ENVIRONMENT STRENGTH
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'controls',
    title: 'Control Environment',
    fullTitle: 'Control Environment Strength',
    icon: '⬡',
    questions: [
      {
        id: 'ct1',
        text: 'How does your firm manage information security — and how do you know your controls are actually working?',
        options: [
          { text: 'Information security is managed informally. We have an IT team but no documented framework and controls have not been independently tested.', score: 1 },
          { text: 'We have an information security policy and some controls, but they are not mapped to a recognised standard and independent testing is infrequent.', score: 2 },
          { text: 'An ISMS is in place, controls are mapped to ISO 27001 or equivalent, and penetration testing is conducted on a defined annual cycle.', score: 3 },
          { text: 'The ISMS is implemented, tested, and independently validated. Findings are remediated on a tracked cycle. Cyber MI reaches the board on a regular, structured basis.', score: 4 }
        ]
      },
      {
        id: 'ct2',
        text: 'If your firm uses AI tools, automated decision-making, or algorithmic systems — which best describes your governance of them?',
        options: [
          { text: 'AI tools are used operationally but there is no governance framework, ownership, or risk assessment in place.', score: 1 },
          { text: 'Some awareness of AI risk exists at senior level but accountability is informal and there is no documented oversight process.', score: 2 },
          { text: 'An AI system register exists, named senior accountability is in place, and a risk assessment has been completed for material systems.', score: 3 },
          { text: 'AI governance is embedded: systems are registered, risk-assessed, subject to fairness review, and human override provisions are documented and tested.', score: 4 }
        ]
      },
      {
        id: 'ct3',
        text: 'Your Business Continuity and Disaster Recovery capability — how confident are you it would perform under real conditions?',
        options: [
          { text: 'We have a BCP document but it has not been tested. Confidence in its performance under live conditions is low.', score: 1 },
          { text: 'The BCP has been reviewed on paper but never subjected to a live exercise. Results have not been documented.', score: 2 },
          { text: 'Live exercises are conducted annually. Results are documented, reviewed by senior management, and lessons learned are formally recorded.', score: 3 },
          { text: 'BCP and DR are tested under realistic conditions on a defined cycle. Exercise outcomes drive documented improvements reported to the board.', score: 4 }
        ]
      },
      {
        id: 'ct4',
        text: 'How does your firm manage access to critical systems — particularly privileged and administrative access?',
        options: [
          { text: 'Access controls are basic. Privileged accounts are not systematically reviewed, shared accounts exist, and dormant access is not removed.', score: 1 },
          { text: 'Access controls are documented but access recertification is infrequent and privilege management is inconsistent across systems.', score: 2 },
          { text: 'Access is formally documented with role-based controls. Privileged access is managed and reviewed on a defined cycle. Dormant accounts are identified and removed.', score: 3 },
          { text: 'Access controls meet ISO 27001 and PCI DSS requirements. Access recertification is evidenced and independent. Privileged access management is continuously monitored with automated alerting.', score: 4 }
        ]
      },
      {
        id: 'ct5',
        text: 'When was your firm\'s last cyber incident or breach, and how well did your response capability perform?',
        options: [
          { text: 'We have not had a major incident but our response capability has never been tested. We do not have a documented incident response plan.', score: 1 },
          { text: 'An incident response plan exists but it has not been tested or rehearsed. Roles and escalation paths in a real incident would be unclear.', score: 2 },
          { text: 'The incident response plan is documented, roles are assigned, and the plan has been rehearsed via a tabletop exercise with results documented.', score: 3 },
          { text: 'Incident response is tested under realistic conditions, results are documented and reported to the board, and the plan is updated following each exercise and after any real incident.', score: 4 }
        ]
      },
      {
        id: 'ct6',
        text: 'How does your firm manage the risk posed by third-party vendors and technology service providers with access to your systems or data?',
        options: [
          { text: 'Third-party risk is not formally managed. Vendors are onboarded without structured due diligence and there are no contractual security requirements.', score: 1 },
          { text: 'Due diligence is conducted for major vendors but the process is inconsistent, contracts do not consistently include security obligations, and ongoing monitoring is absent.', score: 2 },
          { text: 'A third-party risk framework is in place. Due diligence is conducted at onboarding, contractual security obligations are included, and critical vendors are subject to ongoing monitoring.', score: 3 },
          { text: 'Third-party risk management meets ISO 27001 Annex A and PCI DSS requirements. Vendor risk is tracked in a register, assessed on a risk-based cycle, and reported to the board. Supply chain risk is integrated into the overall control environment.', score: 4 }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // SECTION 6 — CULTURE, CONDUCT & RISK OWNERSHIP
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'culture',
    title: 'Culture & Conduct',
    fullTitle: 'Culture, Conduct & Risk Ownership',
    icon: '◉',
    questions: [
      {
        id: 'cu1',
        text: 'Think about the last time a member of staff identified a compliance concern or potential breach. What happened?',
        options: [
          { text: 'There is no clear process for raising concerns. Staff would not know who to tell or whether it would be acted on.', score: 1 },
          { text: 'A process exists, but staff are not consistently aware of it and it is not perceived as genuinely confidential or independent.', score: 2 },
          { text: 'A documented speak-up process is in place, communicated to all staff, independently managed, and usage data is tracked.', score: 3 },
          { text: 'The speak-up programme is embedded and demonstrably used. Trends in usage data are reported to the board as a cultural health indicator.', score: 4 }
        ]
      },
      {
        id: 'cu2',
        text: 'How does your firm\'s remuneration structure account for conduct, risk management, and compliance performance?',
        options: [
          { text: 'Remuneration is driven almost entirely by commercial performance. Conduct and risk outcomes have no formal influence on pay decisions.', score: 1 },
          { text: 'There is an expectation that conduct matters, but it is not documented in the remuneration framework or consistently applied.', score: 2 },
          { text: 'The remuneration policy includes documented provisions for risk adjustment, malus, and clawback where conduct or risk failures occur.', score: 3 },
          { text: 'Conduct, risk management, and compliance outcomes are formally weighted in remuneration decisions at all senior levels, evidenced and reviewed by the Remuneration Committee.', score: 4 }
        ]
      },
      {
        id: 'cu3',
        text: 'How does your firm know — with evidence, not assumption — what its risk culture actually looks like?',
        options: [
          { text: 'We assume culture is healthy because we have not had a major incident. No formal assessment has been conducted.', score: 1 },
          { text: 'We use staff surveys but results are not specifically analysed for risk culture indicators.', score: 2 },
          { text: 'A formal culture or conduct assessment has been conducted within the last two years, reported to the board, and used to inform governance decisions.', score: 3 },
          { text: 'Culture is assessed on a defined cycle, independently facilitated, and findings are integrated into the governance framework. The board treats culture as a leading indicator of future conduct risk.', score: 4 }
        ]
      },
      {
        id: 'cu4',
        text: 'How does the behaviour of your board and senior leadership team demonstrate their commitment to governance and conduct standards — in practice, not just in policy?',
        options: [
          { text: 'Senior leaders communicate the importance of compliance and governance in formal settings but their day-to-day behaviour does not consistently reinforce those messages.', score: 1 },
          { text: 'There is genuine intent at senior level, but instances where commercial pressure has visibly overridden governance standards are not uncommon and go unchallenged.', score: 2 },
          { text: 'Senior leaders visibly model expected behaviours, call out inconsistencies when they see them, and their conduct is broadly consistent with the firm\'s stated values and governance standards.', score: 3 },
          { text: 'The board leads by demonstrable example. Cases where governance or conduct standards are upheld at commercial cost are known across the organisation. This is evidenced, documented, and referenced in culture assessments.', score: 4 }
        ]
      },
      {
        id: 'cu5',
        text: 'When your firm experiences repeated conduct issues within the same team or business line, what typically happens next?',
        options: [
          { text: 'Incidents are managed individually. Each case is addressed in isolation without any analysis of whether a pattern exists.', score: 1 },
          { text: 'Patterns are sometimes noticed informally, but there is no systematic review process and root cause analysis is not consistently conducted.', score: 2 },
          { text: 'Repeated conduct issues in the same area trigger a structured review. Root cause analysis is conducted and findings are reported to senior management with an action plan.', score: 3 },
          { text: 'Conduct trend data is monitored proactively. Patterns are identified before they escalate into significant incidents. The board receives conduct MI that enables it to identify systemic issues, not just individual events.', score: 4 }
        ]
      },
      {
        id: 'cu6',
        text: 'Where AI or automated tools are used in decisions affecting customers or employees — hiring, credit, customer service — how is fairness and transparency maintained?',
        options: [
          { text: 'AI tools are used in decisions but there is no governance process, fairness review, or transparency mechanism in place.', score: 1 },
          { text: 'Awareness of the issue exists at senior level but no documented process for fairness review or explainability has been implemented.', score: 2 },
          { text: 'A governance process for AI-driven decisions is in place: systems are documented, fairness is assessed, and human override provisions exist for material decisions.', score: 3 },
          { text: 'AI fairness and transparency are embedded in governance. Reviews are independent, outcomes are monitored for bias, explainability is available for all material decisions, and the board is informed of AI governance risks.', score: 4 }
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// SCORING UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
const MATURITY_LABELS  = { 1: 'Initial', 2: 'Developing', 3: 'Established', 4: 'Optimised' };
const MATURITY_COLORS  = { 1: '#DC2626', 2: '#D97706', 3: '#2563EB', 4: '#0DAACC' };
const MATURITY_BG      = { 1: 'rgba(220,38,38,0.09)', 2: 'rgba(217,119,6,0.09)', 3: 'rgba(37,99,235,0.09)', 4: 'rgba(13,170,204,0.09)' };

function getMaturityLevel(score) {
  if (score < 1.75) return 1;
  if (score < 2.5)  return 2;
  if (score < 3.25) return 3;
  return 4;
}

function getSectionScore(sectionId, answers) {
  const sec = SECTIONS.find(s => s.id === sectionId);
  if (!sec) return 0;
  const scores = sec.questions.map(q => answers[q.id] || 1);
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function getAllScores(answers) {
  const sections = {};
  SECTIONS.forEach(s => { sections[s.id] = getSectionScore(s.id, answers); });
  const overall = Object.values(sections).reduce((a, b) => a + b, 0) / SECTIONS.length;
  return { sections, overall };
}

// ─────────────────────────────────────────────────────────────────────────────
// RESULT CONTENT
// Each section has: scoreExplanation[1–4], recommendations[1–4]
// ─────────────────────────────────────────────────────────────────────────────
const SECTION_RESULTS = {
  board: {
    scoreExplanation: {
      1: 'Your responses indicate that board oversight is informal and not evidenced. Governance decisions appear to be driven by management rather than independently scrutinised by the board. This is the pattern regulators identify in most enforcement cases involving governance failure.',
      2: 'Your responses suggest a governance structure is in place but operates inconsistently. Committees exist and some MI reaches the board, but there is limited evidence of independent challenge or that governance arrangements evolve with the business.',
      3: 'Your responses indicate a well-structured governance framework. The board receives regular, substantive MI, committees function with documented mandates, and governance is reviewed when material changes occur. This is broadly consistent with FCA SYSC and CBN Corporate Governance Guidelines expectations.',
      4: 'Your responses indicate governance at an advanced maturity level. The board leads proactively, challenges management independently, integrates risk into strategic decisions, and reviews its own effectiveness on a defined cycle. This is the standard regulators associate with exemplary governance.'
    },
    recommendations: {
      1: 'Priority actions: Establish documented board and committee terms of reference. Introduce structured board MI covering risk, compliance, and financial performance. Appoint independent NEDs with defined independence criteria. Initiate a board effectiveness review. These steps are foundational — without them, all other governance controls are undermined.',
      2: 'Priority actions: Formalise committee mandates and ensure independent chairs are in place. Strengthen MI quality to include forward-looking risk indicators, not just historical reporting. Introduce a board effectiveness review on a biennial cycle. Document governance arrangements and ensure they are updated following any material business or structural change.',
      3: 'Priority actions: Introduce an independent board effectiveness review if one has not been conducted. Ensure forward-looking risk intelligence — not just current-state MI — is reaching the board. Review board succession planning and document a refreshment cycle. Consider benchmarking your governance arrangements against the King IV Report and Basel Committee Corporate Governance Principles.',
      4: 'Maintenance actions: Continue the independent effectiveness review cycle. Ensure governance arrangements are benchmarked against emerging regulatory expectations as the FCA, PRA, and CBN develop their supervisory priorities. Maintain the evidenced record of board challenge and independent decision-making — this is what regulators look for in a crisis.'
    }
  },
  accountability: {
    scoreExplanation: {
      1: 'Your responses indicate that individual accountability is informal across the firm. Responsibility for key risk and compliance functions is understood loosely but not documented. Under SM&CR and CBN Fit and Proper requirements, this is a primary point of regulatory vulnerability — and one that surfaces quickly when a supervisor visits.',
      2: 'Your responses suggest an accountability framework exists but is incomplete or not current. Fit and proper management is ad hoc, and accountability for technology and data governance is informal. The framework does not yet operate as a genuine governance control.',
      3: 'Your responses indicate a functioning accountability framework with documented responsibilities, regular fitness and propriety management, and named senior ownership of key functions including technology and data. This is broadly consistent with SM&CR and CBN expectations.',
      4: 'Your responses indicate an accountability framework operating at best practice level. Responsibilities are current, comprehensive, and independently reviewed. Fit and proper is managed continuously. Technology, data, and AI governance all have named senior owners integrated into the formal accountability structure.'
    },
    recommendations: {
      1: 'Priority actions: Map individual accountability across all senior roles immediately, including SM&CR Statements of Responsibility or equivalent. Establish a fit and proper reassessment cycle. Identify and fill gaps in senior ownership for information security, data governance, and AI systems. Document a delegation of authority framework. These are baseline regulatory requirements in both the UK and Nigerian jurisdictions.',
      2: 'Priority actions: Update the accountability framework to reflect current responsibilities and structure. Implement a defined fit and proper reassessment trigger and annual cycle. Formali senior ownership of technology and AI. Review SM&CR submissions for accuracy relative to how the firm actually operates — not how it was structured when submissions were originally made.',
      3: 'Priority actions: Introduce an independent review of the accountability framework on a biennial cycle. Ensure AI and data governance accountability is integrated into the formal framework. Review delegation of authority following any structural change. Consider how accountability mapping feeds into performance management — accountability that does not influence rewards is unlikely to drive behaviour.',
      4: 'Maintenance actions: Maintain the currency and accuracy of all regulatory submissions. Introduce independent validation of the accountability framework annually. Ensure that emerging areas of responsibility — new technology, new regulatory obligations — are assigned proactively rather than reactively.'
    }
  },
  risk: {
    scoreExplanation: {
      1: 'Your responses indicate that risk management is reactive and undocumented. Risk appetite is not operational, the Three Lines model is theoretical, and the board is not receiving structured risk intelligence. This is the profile that consistently appears in the root cause analysis of regulatory enforcement cases.',
      2: 'Your responses suggest a risk framework exists on paper but does not function as a genuine governance tool. Risk appetite is defined but not embedded, Three Lines separation is limited, and risk MI does not adequately inform board decision-making.',
      3: 'Your responses indicate a functioning risk management framework. Risk appetite is operational, the Three Lines model works with genuine independence, emerging risks are identified systematically, and the board receives structured risk MI. This is broadly consistent with ISO 31000, COSO ERM, and CBN Risk-Based Supervision expectations.',
      4: 'Your responses indicate risk management at an advanced maturity level. Risk is integrated into strategic planning, scenario analysis is conducted, the board receives forward-looking risk intelligence, and the Three Lines model is reviewed for effectiveness. This is the standard associated with best practice under Basel Committee and COSO ERM frameworks.'
    },
    recommendations: {
      1: 'Priority actions: Establish a board-approved risk management framework and policy as an immediate priority. Define risk appetite with quantitative tolerances. Implement a structured Three Lines model with documented and non-overlapping roles. Introduce a risk register with named owners. Establish a regular risk MI reporting cycle to the board. Without these foundations, the firm cannot demonstrate even basic risk governance to its regulator.',
      2: 'Priority actions: Move risk appetite from aspiration to operation — build quantitative breach thresholds and escalation protocols. Separate first and second line risk activities structurally. Introduce a horizon scanning process for emerging risks. Strengthen the quality and forward-looking content of risk MI reaching the board. Document and test the Three Lines model independently.',
      3: 'Priority actions: Introduce scenario analysis and stress testing if not already in place. Ensure risk appetite is explicitly referenced in new product approvals and capital decisions — not just in risk committee documentation. Review the quality of risk MI to ensure it is genuinely forward-looking. Consider an independent review of the Three Lines model effectiveness.',
      4: 'Maintenance actions: Maintain the scenario analysis and stress testing cycle. Ensure emerging risk categories — particularly AI, climate, and geopolitical risk — remain integrated into horizon scanning. Review the risk framework against the latest NIST CSF v2.0 and ISO 31000:2018 updates. Benchmark risk MI quality against the FSB guidance on supervisory interaction on risk culture.'
    }
  },
  compliance: {
    scoreExplanation: {
      1: 'Your responses indicate that compliance is reactive and structurally under-resourced. Regulatory obligations are identified after the fact, monitoring is not risk-based, and the regulatory relationship is managed defensively. This is the compliance profile that creates maximum regulatory exposure.',
      2: 'Your responses suggest compliance structures are in place but operate in a first-order way — responding to what is required rather than anticipating what is needed. Monitoring is not risk-based, regulatory change management is informal, and the regulatory relationship is transactional.',
      3: 'Your responses indicate a functioning compliance programme. Monitoring is risk-based, regulatory change is proactively managed, the AML/CFT risk assessment is current, and the regulatory relationship is actively managed. This is broadly consistent with ISO 37301, FCA SYSC 6.1, and CBN Compliance Function expectations.',
      4: 'Your responses indicate compliance at an advanced maturity level. The firm engages proactively with its regulators, participates in consultation, and compliance MI informs strategic decisions. Training effectiveness is measured. Breach reporting is systematic with root cause analysis embedded. This is the standard regulators associate with firms they regard as well-governed.'
    },
    recommendations: {
      1: 'Priority actions: Develop a risk-based compliance monitoring plan as an immediate priority. Map and document all regulatory obligations across your key jurisdictions. Implement a regulatory change management process with assigned ownership. Update your AML/CFT risk assessment. Establish a breach reporting protocol with defined timelines. These are baseline regulatory requirements in both the UK and Nigerian jurisdictions.',
      2: 'Priority actions: Transition monitoring to a risk-based approach — coverage should reflect actual risk exposure, not just regulatory cycle. Formalise the regulatory change process with board-level visibility on implementation. Conduct an event-driven review of the AML/CFT risk assessment. Elevate regulatory relationship management to senior level with documented engagement records.',
      3: 'Priority actions: Introduce effectiveness measurement for compliance training — completion rates alone are insufficient. Develop a proactive regulatory engagement strategy. Consider participating in industry consultation to strengthen your regulatory positioning. Review breach reporting to ensure root cause analysis is embedded and findings are used to improve the compliance programme.',
      4: 'Maintenance actions: Maintain the dynamic risk-based monitoring programme. Ensure the AML/CFT risk assessment is updated following any business change without waiting for the annual cycle. Continue proactive regulatory engagement. Review the compliance programme against ISO 37301:2021 and FATF Recommendation 35 guidance on compliance functions at least biennially.'
    }
  },
  controls: {
    scoreExplanation: {
      1: 'Your responses indicate that the control environment is ad hoc and largely untested. Information security, AI governance, business continuity, and third-party risk are managed without a recognised framework. Under ISO 27001, CBN Cyber Security Framework, and PCI DSS requirements, this represents material and quantifiable regulatory exposure.',
      2: 'Your responses suggest controls exist but are not consistently mapped to recognised standards, not independently tested, and not validated against current regulatory expectations. The gap between having controls and having demonstrably effective controls is significant at this level.',
      3: 'Your responses indicate a functioning control environment. Core controls are mapped to ISO 27001 and NIST CSF, independently tested, and AI governance and BCP are evidenced. This meets the baseline expectations of regulators and auditors across the relevant jurisdictions.',
      4: 'Your responses indicate a control environment at an advanced maturity level. Controls are continuously monitored, independently validated, and improved. AI governance is embedded per ISO 42001. Third-party risk is actively managed. Cyber and resilience MI reaches the board on a structured basis.'
    },
    recommendations: {
      1: 'Priority actions: Implement an ISMS aligned to ISO 27001:2022 as an immediate priority. Conduct an independent penetration test and implement a remediation cycle. Develop a documented AI governance framework including a system register and risk assessment. Document and test your BCP and DR capability. Establish a third-party risk management process with due diligence requirements and contractual security obligations.',
      2: 'Priority actions: Map existing controls to ISO 27001 or NIST CSF to identify gaps systematically. Introduce annual penetration testing. Implement privileged access management with regular recertification. Conduct a live BCP exercise and document results. Formali AI governance with named senior accountability and risk assessments for material systems.',
      3: 'Priority actions: Introduce independent validation of the ISMS on a biennial cycle. Ensure AI governance meets the requirements of ISO 42001:2023, including fairness review and human override provisions. Strengthen third-party risk management with continuous monitoring for critical vendors. Escalate cyber and resilience MI to board level on a structured and regular basis.',
      4: 'Maintenance actions: Maintain the independent validation cycle for all major control domains. Benchmark the control framework against the latest NIST CSF v2.0 and ISO 27001:2022 guidance. Ensure supply chain risk management meets PCI DSS v4.0 Requirement 12.8 and NIST CSF GV.SC standards. Review AI governance against ISO 42001 Annex A annually.'
    }
  },
  culture: {
    scoreExplanation: {
      1: 'Your responses indicate that culture is assumed rather than managed. The speak-up infrastructure is absent or ineffective, remuneration reinforces commercial outcomes over conduct, and risk culture has never been formally assessed. The FSB, FCA, and Basel Committee have specifically identified this profile as a leading indicator of future conduct risk.',
      2: 'Your responses suggest that cultural foundations exist but are not functioning as governance controls. The speak-up programme is underused, remuneration alignment to conduct is informal, and culture is assessed through general staff surveys rather than targeted risk culture diagnostics. Regulators increasingly examine the gap between stated and lived culture.',
      3: 'Your responses indicate a culture that is actively monitored and managed. The speak-up programme is independent and evidenced, remuneration is linked to conduct outcomes, and a formal risk culture assessment has been conducted and reported to the board. This is consistent with PRA Remuneration Code, FCA COCON, and CBN Corporate Governance expectations.',
      4: 'Your responses indicate culture governance at an advanced maturity level. Culture is a board-level priority supported by evidence. Risk culture is independently assessed on a defined cycle. The board leads by demonstrable example. AI fairness governance is embedded. This is the standard the FCA, Basel Committee, and FSB associate with genuinely well-governed firms.'
    },
    recommendations: {
      1: 'Priority actions: Implement an independently managed, confidential speak-up channel as an immediate priority and communicate it to all staff. Introduce documented risk adjustment provisions into the remuneration framework. Conduct a formal risk culture assessment — do not rely on the absence of incidents as a proxy for cultural health. Ensure conduct standards are enforced consistently across all seniority levels, not just operationally.',
      2: 'Priority actions: Commission an independent review of the speak-up programme — are staff actually aware of it? Do they trust it? Document and apply remuneration risk adjustment consistently. Commission a targeted risk culture diagnostic rather than relying on general engagement surveys. Report culture and conduct MI to the board as a governance indicator, not just a HR metric.',
      3: 'Priority actions: Introduce independent facilitation for the next risk culture assessment. Ensure AI fairness governance is documented and that human override provisions exist for material automated decisions. Analyse conduct trend data to identify systemic patterns — not just individual incidents. Build conduct performance into senior leaders\' scorecards in a way that is visible and consistently applied.',
      4: 'Maintenance actions: Maintain the independently facilitated culture assessment cycle. Ensure the board reviews conduct trend MI as a forward-looking governance indicator on a regular basis. Continue to evidence the board\'s leadership role in culture — documented examples of conduct being upheld at commercial cost are among the most persuasive evidence of a genuine culture of compliance.'
    }
  }
};

const OVERALL_SUMMARIES = {
  1: {
    headline: 'Governance foundations are not yet in place.',
    body: 'Across most themes, governance and regulatory readiness are at an early stage. Immediate, prioritised remediation is required. Regulatory exposure is likely elevated and may already be visible to supervisors or auditors. A structured remediation plan with board visibility should be initiated without delay.',
    colour: '#DC2626'
  },
  2: {
    headline: 'Foundational structures exist but readiness is inconsistent.',
    body: 'Governance structures are in place across most areas but are not consistently documented, applied, or evidenced. Targeted remediation is required, particularly in the sections scoring below 2.5. Priority gaps should be addressed within 60 days with a documented action plan reported to the board.',
    colour: '#D97706'
  },
  3: {
    headline: 'Governance is established and substantively evidenced.',
    body: 'The assessment indicates a well-functioning governance framework across most themes. Policies and controls are documented and consistently applied. Enhancement is required in the sections identified as Developing. A continuous improvement plan should be maintained and reported to the board on a defined cycle.',
    colour: '#2563EB'
  },
  4: {
    headline: 'Governance is mature, proactive, and independently evidenced.',
    body: 'Governance and regulatory readiness are at an advanced, optimised level. Best practice standards are met or exceeded across all six themes. This position should be maintained through ongoing independent assurance and regular benchmarking against emerging regulatory expectations across your key jurisdictions.',
    colour: '#0DAACC'
  }
};
