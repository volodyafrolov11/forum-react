import { ScrollSaveSchema } from '../types/ScrollSaveSchema';
import { scrollSaveReducer, scrollSaveActions } from './scrollSaveSlice';

describe('scrollSaveSlice.test', () => {
    test('set scroll set position', () => {
        const state: ScrollSaveSchema = {
            scroll: {},
        };
        expect(
            scrollSaveReducer(
                state as ScrollSaveSchema,
                scrollSaveActions.setScrollPosition({
                    path: '/articles',
                    position: 123,
                }),
            ),
        ).toEqual({
            scroll: {
                '/articles': 123,
            },
        });
    });
});
