import { fibonacci } from ".";

test('fibonacci function is defined', () => {
    expect(fibonacci).toBeDefined();
});

test('Calling fibonacci with `5` prints out 5 statements', () => {
    fibonacci(5);
    expect((console.log as any).mock.calls.length).toEqual(5);
});

test('Calling fibonacci with 12 prints out the correct values', () => {
    fibonacci(12);

    expect((console.log as any).mock.calls[0][0]).toEqual(0);
    expect((console.log as any).mock.calls[1][0]).toEqual(1);
    expect((console.log as any).mock.calls[2][0]).toEqual(1);
    expect((console.log as any).mock.calls[3][0]).toEqual(2);
    expect((console.log as any).mock.calls[4][0]).toEqual(3);
    expect((console.log as any).mock.calls[5][0]).toEqual(5);
    expect((console.log as any).mock.calls[6][0]).toEqual(8);
    expect((console.log as any).mock.calls[7][0]).toEqual(13);
    expect((console.log as any).mock.calls[8][0]).toEqual(21);
    expect((console.log as any).mock.calls[9][0]).toEqual(34);
    expect((console.log as any).mock.calls[10][0]).toEqual(55);
    expect((console.log as any).mock.calls[11][0]).toEqual(89);
});

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    (console.log as any).mockRestore();
});
