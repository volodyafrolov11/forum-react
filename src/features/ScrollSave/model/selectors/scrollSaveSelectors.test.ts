import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath } from './scrollSaveSelectors';

describe('scrollSaveSelectors.test', () => {
    test('should return scroll', () => {
        const state: DeepPartial<StateSchema> = {
            scrollSave: {
                scroll: {
                    '/articles': 123,
                },
            },
        };
        expect(getScrollByPath(state as StateSchema, '/articles')).toEqual(123);
    });
});
