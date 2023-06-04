import { add } from '@/lib/sample';

describe('Sample unit tests.', () => {
    test('1 + 2 = 3', () => {
        expect(add(1, 2)).toBe(3);
    });
});