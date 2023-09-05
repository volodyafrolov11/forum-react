import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'some text',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('some text');
    });

    test('getAddCommentFormText selector should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {},
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('getAddCommentFormText selector should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {},
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
