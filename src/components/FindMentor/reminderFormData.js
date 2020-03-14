import {LongTextField} from "../common/forms/LongTextField";

const reminderFormData = [
    {
        name: 'email',
        type: 'string',
        check: value => /^.+@.+$/.test(value),
        Component: LongTextField,
        props: {
            label: 'E-mail',
            required: true
        }
    }
];

export {reminderFormData};