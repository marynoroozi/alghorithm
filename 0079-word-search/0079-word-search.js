/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(i, j, index) {
        // 1. شرط توقف: اگه همه کاراکترهای کلمه رو پیدا کردیم
        if (index === word.length) return true;

        // 2. شرط‌های نامعتبر
        if (i < 0 || j < 0 || i >= rows || j >= cols) return false;
        if (board[i][j] !== word[index]) return false;

        // 3. انتخاب (mark visited)
        const temp = board[i][j];
        board[i][j] = "#";  // علامت‌گذاری موقت

        // 4. حرکت در چهار جهت
        const found =
            backtrack(i + 1, j, index + 1) ||
            backtrack(i - 1, j, index + 1) ||
            backtrack(i, j + 1, index + 1) ||
            backtrack(i, j - 1, index + 1);

        // 5. backtrack (برگردوندن حالت)
        board[i][j] = temp;

        return found;
    }

    // شروع از همه خانه‌ها
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }

    return false;
};