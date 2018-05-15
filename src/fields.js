import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:organizations_naturalhistory': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/organization/domain/naturalhistory',
        },
      },
      termSource: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.organizations_naturalhistory.termSource.name',
              defaultMessage: 'Term source',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      associatedPersonGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        associatedPersonGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_naturalhistory.associatedPersonGroup.name',
                defaultMessage: 'Associated person',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          associatedPerson: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.organizations_naturalhistory.associatedPerson.fullName',
                  defaultMessage: 'Associated person name',
                },
                name: {
                  id: 'field.organizations_naturalhistory.associatedPerson.name',
                  defaultMessage: 'Name',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          associatedPersonRole: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.organizations_naturalhistory.associatedPersonRole.fullName',
                  defaultMessage: 'Associated person role',
                },
                name: {
                  id: 'field.organizations_naturalhistory.associatedPersonRole.name',
                  defaultMessage: 'Role',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
