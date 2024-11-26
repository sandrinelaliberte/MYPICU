import { v4 as uuid } from 'uuid';

export const greetingItems = [
  {
    title: '#9 Patients in Ped A',
    text: 'I would not recommend to take patient today.',
    icon: 'chess-rook',
    color: 'warning'
  },
  {
    title: '#4 nurses in Ped A',
    text: 'Avoid unnecessary transfers on the unit.',
    icon: 'crown',
    color: 'warning'
  },
  {
    title: 'Patient #25 is outside guidelines.',
    text: 'Start the medical tour with this patient. Close monitoring.',
    icon: 'user',
    color: 'warning'
  },
  {
    title: 'Patient #25 is outside guidelines.',
    text: 'Start the medical tour with this patient. Close monitoring.',
    icon: 'user',
    color: 'warning'
  }
];

// ----------- Patients list ------------------------

export const runningProjects = [
  {
    id: 1,
    title: 'Bureaux, Charlotte, 10j',
    avatar: {
      name: '2',
      size: 'xl',
      contentClass: 'text-success bg-success-subtle fs-9'
    },
    projectName: 'Femelle, 4.560 kg',
    members: [
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        name: '+5',
        size: 'xl'
      }
    ],
    diagnosis: 'Convulsions',
    jusip: 'J3',
    progress: 78,
    color: 'success',
    transfer: 'CT Scan',
    systemfailure: ''
  },

  {
    id: 2,
    title: 'Brossoi, Benjamin, 10j',
    avatar: {
      name: '3',
      size: 'xl',
      contentClass: 'text-success bg-success-subtle fs-9'
    },
    projectName: 'Male, 4.560 kg',
    members: [
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        name: '+5',
        size: 'xl'
      }
    ],
    diagnosis: 'Détresse respiratoire',
    jusip: 'J3',
    progress: 70,
    color: 'warning',
    transfer: '',
    systemfailure: ''
  },
  {
    id: 3,
    title: 'Gagnon, Eli, 3a 4m 12j',
    avatar: {
      name: '4',
      size: 'xl',
      contentClass: 'text-info bg-info-subtle fs-9'
    },
    projectName: 'Male, 7.800kg',
    members: [
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      }
    ],
    diagnosis: 'Pneumonie',
    jusip: 'J5',
    progress: 56,
    color: 'danger',
    transfer: '',
    systemfailure: ''
  },
  {
    id: 4,
    title: 'Gagné, Coralie, 4a 4m 12j',
    avatar: {
      name: '5',
      size: 'xl',
      contentClass: 'text-warning bg-warning-subtle fs-9'
    },
    projectName: 'Femelle, 4.560 kg',
    members: [
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        name: '+2',
        size: 'xl'
      }
    ],
    diagnosis: 'Trauma crânien',
    jusip: 'J6',
    progress: 56,
    color: 'danger',
    transfer: 'CT Scan',
    systemfailure: ''
  },
  {
    id: 5,
    title: 'Dagenais, Étienne, 7a 2m 6j',
    avatar: {
      name: '6',
      size: 'xl',
      contentClass: 'text-danger bg-danger-subtle fs-9'
    },
    projectName: 'Male, 4.560 kg',
    members: [
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      }
    ],
    diagnosis: 'Post-op Adéno-Amégdalectomie',
    jusip: 'J2',
    progress: 89,
    color: 'success',
    transfer: '',
    systemfailure: ''
  },
  {
    id: 6,
    title: 'Haly, Lucy, 7j',
    avatar: {
      name: '7',
      size: 'xl',
      contentClass: 'text-success bg-success-subtle fs-9'
    },
    projectName: 'Femelle, 3,75 kg,',
    members: [
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      },
      {
        id: uuid(),
        size: 'xl'
      }
    ],
    diagnosis: 'Transposition des gros vaisseaux',
    jusip: 'J10',
    progress: 90,
    color: 'success',
    transfer: '',
    systemfailure: ''
  }
];

export const todoList = [
  {
    id: 1,
    task: 'See Ped B',
    color: 'primary'
  },
  {
    id: 2,
    task: 'See Ped C',
    color: 'primary'
  },
  {
    id: 3,
    task: 'Acess TVL',
    color: 'primary'
  }
];
