const STATUS_ENUM = {
  TODO: 'TODO',
  INPROGRESS: 'INPROGRESS',
  DONE: 'DONE',
};

export default STATUS_ENUM;

export const statusColorMap = {
  [STATUS_ENUM.TODO]: 'red',
  [STATUS_ENUM.INPROGRESS]: 'yellow',
  [STATUS_ENUM.DONE]: 'green',
};
