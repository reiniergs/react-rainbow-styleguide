'use strict';

var _fetchStars = require('../fetchStars');

var _fetchStars2 = _interopRequireDefault(_fetchStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = jest.fn();

beforeEach(function () {
    fetch.mockReset();
    fetch.mockReturnValue(Promise.resolve());
});

describe('fetch stars method', function () {
    it('should call fetch with the right data', function () {
        (0, _fetchStars2.default)();
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/repos/reiniergs/react-rainbow-components/stargazers');
    });
    it('should return the number of stars for the repository', function () {
        fetch.mockReturnValue(Promise.resolve({
            text: function text() {
                return Promise.resolve('[{}, {}, {}]');
            }
        }));
        expect((0, _fetchStars2.default)()).resolves.toBe(3);
    });
});