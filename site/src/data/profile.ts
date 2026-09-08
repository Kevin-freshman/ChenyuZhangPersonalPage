export const profile = {
  name: 'Chenyu Zhang',
  nickname: 'Kevin',
  role: 'HKUST CSE undergraduate',
  headline: 'Robotics & embodied AI',
  summary: 'I work on hand teleoperation and human–robot interaction. I’m interested in how robots sense human movement and act on it.',
  email: 'czhangew@connect.ust.hk',
  github: 'https://github.com/Kevin-freshman',
  linkedin: 'https://www.linkedin.com/in/kevin-zhang-34485a392/',
  quant: 'https://github.com/Kevin-freshman/Blockspace/tree/main/Polymarket',
  skills: [
    { label: 'Programming', text: 'Python · C++ · Java' },
    { label: 'Robotics', text: 'MuJoCo · Arduino · IMU sensing' },
    { label: 'Engineering', text: 'OpenCV · Git · Linux · Data pipelines' },
  ],
};

export const research = [
  {
    id: 'teleoperation', number: '01', title: 'Hand teleoperation',
    category: 'Dexterous manipulation',
    question: 'From a human hand to a robot hand.',
    description: 'My glove project connects wearable motion sensing to a simulated robotic hand. The system uses 11 IMUs across the wrist and fingers to drive a 16-DOF hand in MuJoCo.',
    notes: [
      { label: 'System', text: 'Arduino Mega 2560 and a CD74HC4067 multiplexer form the sensor acquisition pipeline.' },
      { label: 'Engineering focus', text: 'Sensor synchronization, serial bandwidth and filtering affect latency and motion jitter.' },
      { label: 'Research interest', text: 'How can captured human motion become useful control input for dexterous manipulation?' },
    ],
    tools: ['IMU sensing', 'MuJoCo', 'Arduino', 'Motion mapping'],
  },
  {
    id: 'interaction', number: '02', title: 'Human–robot turn-taking',
    category: 'Human–robot interaction',
    question: 'When should a robot respond?',
    description: 'My research interests also include conversational turn-taking: how a robot can time its response during an interaction with a person.',
    notes: [
      { label: 'Context', text: 'Undergraduate research at HKUST, exploring conversational timing in human–robot interaction.' },
      { label: 'Research question', text: 'What signals help a system decide when to keep listening and when to take a turn?' },
      { label: 'Connection to robotics', text: 'Response timing is part of how a robot behaves around people, alongside perception and physical action.' },
    ],
    tools: ['Turn-taking', 'Conversational timing', 'Human–robot interaction'],
  },
] as const;
