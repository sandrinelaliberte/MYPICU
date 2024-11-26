import { getDates } from 'helpers/utils';

export const statsData = [
  {
    id: 1,
    title: 'Global adherence',
    amount: 70,
    target: '0 vs 100',
    icon: '',
    caret: 'caret-down',
    color: 'danger',
    caretColor: 'danger',
    data: [71, 72, 75, 65, 66, 67, 70, 70]
  },
  {
    id: 2,
    title: 'Neurologic State',
    amount: 13,
    target: '1635 vs 863',
    icon: 'user',
    caret: 'caret-up',
    color: 'info',
    caretColor: 'success',
    data: [90, 160, 150, 120, 230, 155, 220, 240]
  }
];

export const patientChartData = {
  dates: getDates(
    new Date('5-6-2024'),
    new Date('5-7-2024'),
    1000 * 60 * 60 * 24 * 30
  ),
  dataset: {
    Heartrate: [
      [
        150, 140, 120, 140, 120, 115, 170, 170, 165, 156, 156, 166, 177, 170,
        150, 160, 150, 160, 165, 150, 160, 160, 165, 111, 150
      ],
      [
        150, 250, 270, 400, 175, 180, 200, 400, 600, 380, 340, 550, 650, 450,
        400, 688, 650, 721, 500, 300, 445, 680, 568, 400, 371
      ]
    ],

    BT: [
      [
        545, 500, 650, 727, 773, 705, 686, 501, 643, 580, 604, 615, 755, 722,
        727, 816, 836, 952, 719, 758, 937, 785, 872, 850, 800
      ],
      [
        340, 360, 230, 250, 410, 430, 450, 200, 220, 540, 500, 250, 355, 320,
        500, 630, 680, 500, 520, 550, 750, 720, 700, 780, 750
      ]
    ]
  }
};
