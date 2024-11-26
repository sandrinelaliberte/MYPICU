import React from 'react';
import PropTypes from 'prop-types';
import { Card, ProgressBar } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Avatar, { AvatarGroup } from 'components/common/Avatar';
import { Link } from 'react-router-dom';
import CardFooterLink from 'components/common/CardFooterLink';
import CardHeader from 'components/common/FalconCardHeader';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const columns = [
  {
    accessorKey: 'title',
    header: '#Bed and Patient informations',
    meta: {
      headerProps: { className: 'text-800' }
    },
    cell: ({ row: { original } }) => {
      const { avatar, color, title, projectName } = original;
      return (
        <Flex alignItems="center" className="position-relative">
          <Avatar
            name={avatar.name}
            width="40"
            alt="#lit"
            mediaClass={`text-${color}-emphasis bg-${color}-subtle fs-9`}
          />
          <div className="flex-1 ms-3">
            <h6 className="mb-0 fw-semibold">
              <Link className="text-1100 stretched-link" to="#!">
                {title}
              </Link>
            </h6>
            <p className="fs-11 mb-0 text-500">{projectName}</p>
          </div>
        </Flex>
      );
    }
  },

  {
    accessorKey: 'diagnosis',
    header: 'Admission diagnosis',
    meta: {
      cellProps: {
        className: 'text-center fw-semibold fs-10'
      },
      headerProps: {
        className: 'text-center text-800'
      }
    }
  },

  {
    accessorKey: 'jusip',
    header: '#J USIP',
    meta: {
      cellProps: {
        className: 'text-center fw-semibold fs-10'
      },
      headerProps: {
        className: 'text-center text-800'
      }
    }
  },
  {
    accessorKey: 'GlobalAdherence',
    header: 'Global Adherence',
    meta: {
      headerProps: {
        className: 'text-center text-800'
      },
      cellProps: {
        className: 'text-center'
      }
    },
    cell: ({ row: { original } }) => {
      const { progress, color } = original;
      return (
        <ProgressBar
          now={progress}
          style={{ height: 5 }}
          className="rounded-pill align-middle"
          variant="progress-gradient"
        />
      );
    }
  },
  {
    accessorKey: 'systemfailure',
    header: 'System failures',
    meta: {
      cellProps: {
        className: 'text-center fw-semibold fs-10'
      },
      headerProps: {
        className: 'text-center text-800'
      }
    }
  },
  {
    accessorKey: 'transfers',
    header: 'Transfers',
    meta: {
      cellProps: {
        className: 'text-center fw-semibold fs-10'
      },
      headerProps: {
        className: 'text-center text-800'
      }
    }
  }
];

const RunningProjects = ({ data }) => {
  const table = useAdvanceTable({
    data,
    columns,
    sortable: false,
    pagination: true,
    perPage: 10
  });

  return (
    <AdvanceTableProvider {...table}>
      <Card className="h-100">
        <CardHeader title="Patients List PED A" titleTag="h6" />
        <Card.Body className="p-0">
          <AdvanceTable
            headerClassName="bg-body-tertiary text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              borderless: true,
              className: 'fs-11 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
        <CardFooterLink title="Add more patients" size="sm" />
      </Card>
    </AdvanceTableProvider>
  );
};

RunningProjects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.string
      }),
      projectName: PropTypes.string.isRequired,
      members: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          img: PropTypes.string,
          size: PropTypes.string
        })
      ),
      date: PropTypes.string.isRequired,
      isLast: PropTypes.bool
    })
  )
};

export default RunningProjects;
