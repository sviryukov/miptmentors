import {LongTextField} from "../common/forms/LongTextField";

const reminderFormData = [
    {
        name: 'email',
        check: value => /^.+@.+$/.test(value),
        Component: LongTextField,
        props: {
            label: 'E-mail',
            required: true
        }
    }
];

export {reminderFormData};