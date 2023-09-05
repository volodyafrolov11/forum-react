import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/addCommentForm';

describe('loginSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '',
        };
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('some text')))
            .toEqual({ text: 'some text' });
    });
});
