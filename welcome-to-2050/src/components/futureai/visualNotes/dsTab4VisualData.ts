import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

export const DS_TAB4_BLUEPRINTS: DsTopicBlueprint[] = [
  // =========================================================================
  // MODULE 16: NumPy for Numerical Computing (IDs 157–167)
  // =========================================================================
  {
    id: 157,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 1,
    title: 'What Is NumPy?',
    subtitle: 'SUPERCHARGED NUMBER ARRAYS THAT POWER PYTHON DATA SCIENCE',
    coreEn:
      'NumPy (Numerical Python) is a Python library that stores numbers in tight, uniform blocks called arrays and runs math on millions of numbers at C-level speed.',
    coreHi:
      'NumPy (Numerical Python) ek Python library hai jo numbers ko ek compact, same-type block (array) mein store karti hai aur lakho numbers par super-fast C-level speed se math chalati hai.',
    analogyTitle: 'Egg Carton vs Loose Groceries in a Bag',
    analogyEn:
      'A normal Python list is like tossing eggs, apples, and bread loosely into one bag — you have to check each item before using it. A NumPy array is a neat egg carton where every slot holds the exact same size egg, so you can carry and count 12 at once in one smooth motion.',
    analogyHi:
      'Normal Python list ek shopping bag jaisi hai jisme alag-alag cheezein bikhri hui hain — har item ko alag se check karna padta hai. NumPy array ek perfect egg tray jaisa hai jisme har slot mein same size ka egg hai, isliye sabko ek saath tez process kar sakte hain.',
    steps: [
      {
        title: 'Import NumPy',
        en: 'Load the library with the universal shortcut `import numpy as np`.',
        hi: 'Hamesha standard shortcut `import numpy as np` se library ko load karein.',
      },
      {
        title: 'Store Uniform Numbers',
        en: 'Convert raw Python lists into a contiguous `ndarray` where every element shares one data type.',
        hi: 'Raw Python list ko ek contiguous `ndarray` mein badlein jisme saare numbers ek hi type ke hon.',
      },
      {
        title: 'Run Fast Array Math',
        en: 'Apply arithmetic across the entire array at once without writing slow Python `for` loops.',
        hi: 'Slow Python `for` loop likhe bina poore array par ek hi line mein math apply karein.',
      },
      {
        title: 'Feed Downstream Libraries',
        en: 'Pass NumPy arrays seamlessly into Pandas, Scikit-Learn, Matplotlib, and PyTorch.',
        hi: 'Inhi NumPy arrays ko aage Pandas, Scikit-Learn, Matplotlib aur PyTorch mein directly use karein.',
      },
    ],
    codeLabel: 'PYTHON • NUMPY SPEED & SIMPLICITY',
    code: `import numpy as np

prices = np.array([100, 250, 400, 150])
with_gst = prices * 1.18
print("Original:", prices)
print("With 18% GST:", with_gst)`,
    codeOutput: `Original: [100 250 400 150]
With 18% GST: [118. 295. 472. 177.]`,
    codeCaptionEn: 'Multiplying a NumPy array by 1.18 updates every price in one clean step.',
    codeCaptionHi: 'NumPy array ko 1.18 se multiply karte hi saare prices ek hi step mein update ho jaate hain.',
    tableTitle: 'Python List vs NumPy Array Comparison',
    tableHeaders: ['Feature', 'Python List', 'NumPy Array (ndarray)'],
    tableRows: [
      ['Data Types', 'Mixed (int, str, float)', 'Uniform single type (e.g., float64)'],
      ['Memory Layout', 'Scattered object pointers', 'Contiguous tight memory block'],
      ['Bulk Math', 'Requires a for-loop', 'Direct array * 2 (vectorized)'],
      ['Speed on 1M Numbers', 'Slow (~100 ms+)', 'Very fast (~1–3 ms)'],
    ],
    tableNoteEn: 'Because all items share one type in contiguous memory, your CPU processes them in batches.',
    tableNoteHi: 'Kyunki saare items ek hi type ke aur saath-saath memory mein hote hain, CPU unhe batch mein tez solve karta hai.',
    mistakeEn: 'Treating a NumPy array like a Python list and writing manual `for` loops to multiply or add numbers one by one.',
    mistakeHi: 'NumPy array ko normal Python list samajhkar har element par manual `for` loop chalana.',
    proHabitEn: 'Always check `.dtype` and use NumPy’s built-in array operations so your code stays short, readable, and 50x faster.',
    proHabitHi: 'Hamesha `.dtype` check karein aur NumPy ke built-in array operations use karein taaki code chhota aur 50x tez rahe.',
    jobUseEn: 'Every ML model, image pixel matrix, audio waveform, and financial time-series in Python runs on NumPy arrays under the hood.',
    jobUseHi: 'Python ka har ML model, image pixel matrix, audio signal aur financial data andar se NumPy arrays par hi chalta hai.',
    mcq1Question: 'Why is a NumPy array much faster than a regular Python list for numerical math?',
    mcq1Correct: 'It stores uniform-type numbers in contiguous memory and runs compiled C-level operations.',
    mcq1Wrongs: [
      'It deletes decimal points from every number automatically.',
      'It requires an internet connection to compute on remote servers.',
      'It can only hold up to 100 numbers at a time.',
    ],
    mcq1Explain: 'Contiguous, single-type memory lets the CPU run compiled C loops without Python type-checking overhead.',
    mcq2Question: 'What happens if you run `np.array([10, 20, 30]) * 2` in Python?',
    mcq2Correct: 'It returns `array([20, 40, 60])` by doubling every element.',
    mcq2Wrongs: [
      'It repeats the list twice to make `[10, 20, 30, 10, 20, 30]`.',
      'It raises a TypeError because arrays cannot be multiplied.',
      'It only doubles the first number `10`.',
    ],
    mcq2Explain: 'Unlike Python lists where `* 2` repeats the list, NumPy performs element-wise mathematical multiplication.',
    realWorldScenario:
      'Your e-commerce team needs to apply a 15% festive discount to 2 million product prices before midnight. Choose between a Python loop and a NumPy array operation.',
    interviewQ1: 'What is the main difference between a Python list and a NumPy `ndarray`?',
    interviewA1:
      'A Python list is a flexible container of pointers to mixed Python objects, while a NumPy `ndarray` is a fixed-type, contiguous memory block optimized for fast, vectorized numerical computing.',
    interviewQ2: 'Why do Pandas and Scikit-Learn depend heavily on NumPy?',
    interviewA2:
      'They use NumPy arrays as their core numerical storage layer so tabular math, matrix multiplication, and statistical calculations execute at C speed while keeping a friendly Python API.',
  },
  {
    id: 158,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 2,
    title: 'Creating NumPy Arrays',
    subtitle: 'BUILDING ARRAYS FROM LISTS, RANGES, ZEROS, AND RANDOM DATA',
    coreEn:
      'NumPy gives you factory functions like `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()`, and `np.random` to create arrays for any starting task.',
    coreHi:
      'NumPy aapko `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()` aur `np.random` jaise factory functions deta hai jinse aap kisi bhi kaam ke liye turant array bana sakte hain.',
    analogyTitle: 'Blank Graph Paper vs Pre-Printed Forms',
    analogyEn:
      'When preparing a ledger, you do not draw every box by hand. Sometimes you grab a blank sheet (`np.zeros`), sometimes a numbered ticket roll (`np.arange`), and sometimes a ruler with equal marks (`np.linspace`).',
    analogyHi:
      'Account register banate waqt aap har dabba haath se nahi banate. Kabhi blank grid (`np.zeros`), kabhi serial number roll (`np.arange`), aur kabhi barabar hisson wala scale (`np.linspace`) lete hain.',
    steps: [
      {
        title: 'Convert Existing Data',
        en: 'Wrap a Python list or nested list with `np.array(...)` to turn existing values into an array.',
        hi: 'Pehle se maujood Python list ya nested list ko `np.array(...)` mein daalkar array banayein.',
      },
      {
        title: 'Initialize Placeholders',
        en: 'Use `np.zeros((rows, cols))` or `np.ones(...)` to reserve empty slots before filling results.',
        hi: 'Results bharne se pehle `np.zeros((rows, cols))` ya `np.ones(...)` se clean placeholder grid banayein.',
      },
      {
        title: 'Generate Number Sequences',
        en: 'Use `np.arange(start, stop, step)` for step-based counts or `np.linspace(start, stop, count)` for exact spacing.',
        hi: 'Fixed step ke liye `np.arange` aur barabar tukdon ke liye `np.linspace` use karein.',
      },
      {
        title: 'Set Seed for Random Arrays',
        en: 'Use `np.random.default_rng(42)` to create reproducible random test numbers.',
        hi: 'Reproducible random test numbers banane ke liye `np.random.default_rng(42)` use karein.',
      },
    ],
    codeLabel: 'PYTHON • COMMON ARRAY CREATORS',
    code: `import numpy as np

from_list = np.array([5, 10, 15])
zeros_grid = np.zeros((2, 3), dtype=int)
even_nums = np.arange(0, 10, 2)
equal_steps = np.linspace(0, 1, 5)

print("List:", from_list)
print("Zeros:\\n", zeros_grid)
print("Arange:", even_nums)
print("Linspace:", equal_steps)`,
    codeOutput: `List: [ 5 10 15]
Zeros:
 [[0 0 0]
 [0 0 0]]
Arange: [0 2 4 6 8]
Linspace: [0.   0.25 0.5  0.75 1.  ]`,
    codeCaptionEn: 'Notice `arange(0, 10, 2)` stops before 10, while `linspace(0, 1, 5)` includes both 0 and 1.',
    codeCaptionHi: 'Dhyan dein `arange(0, 10, 2)` 10 se pehle ruk jaata hai, jabki `linspace(0, 1, 5)` 0 aur 1 dono ko include karta hai.',
    tableTitle: 'Which NumPy Array Creator Should You Pick?',
    tableHeaders: ['Function', 'What It Creates', 'Example Call'],
    tableRows: [
      ['np.array()', 'Array from Python list/tuple', 'np.array([1, 2, 3])'],
      ['np.zeros()', 'All-zero placeholder array', 'np.zeros((3, 4))'],
      ['np.arange()', 'Sequence by fixed step size', 'np.arange(0, 20, 5)'],
      ['np.linspace()', 'Exact number of evenly spaced points', 'np.linspace(0, 100, 5)'],
    ],
    tableNoteEn: 'Pass a tuple like `(3, 4)` for 2D shapes in `np.zeros` and `np.ones`.',
    tableNoteHi: '`np.zeros` aur `np.ones` mein 2D shape dene ke liye hamesha tuple `(3, 4)` pass karein.',
    mistakeEn: 'Writing `np.zeros(3, 4)` without inner parentheses — NumPy treats the second argument as `dtype` and throws a TypeError.',
    mistakeHi: 'Inner brackets bhoolkar `np.zeros(3, 4)` likhna — isse NumPy 4 ko `dtype` samajhkar TypeError de deta hai.',
    proHabitEn: 'Always pass shapes as a tuple `np.zeros((3, 4))` and specify `dtype` when memory or integer precision matters.',
    proHabitHi: 'Shape hamesha tuple `np.zeros((3, 4))` mein dein aur zaroorat par explicit `dtype` set karein.',
    jobUseEn: 'Used daily to initialize neural network weight matrices, generate synthetic simulation data, and build smooth x-axis grids for charts.',
    jobUseHi: 'Neural network weights initialize karne, simulation data banane aur charts ke smooth x-axis points generate karne mein roz use hota hai.',
    mcq1Question: 'Which function creates 5 evenly spaced numbers from 0 to 10 including both endpoints?',
    mcq1Correct: 'np.linspace(0, 10, 5)',
    mcq1Wrongs: ['np.arange(0, 10, 5)', 'np.zeros((0, 10))', 'np.array(0, 10, 5)'],
    mcq1Explain: '`np.linspace(start, stop, num)` generates `num` evenly spaced values inclusive of both endpoints by default.',
    mcq2Question: 'Why does `np.zeros(2, 3)` raise an error in NumPy?',
    mcq2Correct: 'The shape must be passed as a single tuple `(2, 3)`, not two separate arguments.',
    mcq2Wrongs: [
      'NumPy cannot create arrays with 2 rows.',
      'You must use `np.zero` instead of `np.zeros`.',
      'Zeros arrays only work with floating-point shapes.',
    ],
    mcq2Explain: 'The first parameter of `np.zeros` is `shape` (a tuple for multi-dimensional arrays) and the second is `dtype`.',
    realWorldScenario:
      'You need to create a 100-point smooth temperature grid between 0°C and 100°C to plot a sensor calibration curve.',
    interviewQ1: 'What is the difference between `np.arange()` and `np.linspace()`?',
    interviewA1:
      '`np.arange()` takes a step size and excludes the stop value (like Python `range`), whereas `np.linspace()` takes the total number of points desired and includes the stop value by default.',
    interviewQ2: 'Why should you set a random seed like `np.random.default_rng(42)` when generating random arrays?',
    interviewA2:
      'Setting a seed guarantees reproducible results so teammates, tests, and experiments get the exact same random numbers every time the script runs.',
  },
  {
    id: 159,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 3,
    title: 'Array Dimensions and Shapes',
    subtitle: 'UNDERSTANDING 1D, 2D, 3D ARRAYS, SHAPE, NDIM, AND SIZE',
    coreEn:
      'Every NumPy array has a `.ndim` (number of axes/dimensions), `.shape` (exact length along each axis), `.size` (total elements), and `.dtype` (data type).',
    coreHi:
      'Har NumPy array ki char pehchan hoti hain: `.ndim` (kitni dimensions/axes), `.shape` (har axis par kitne elements), `.size` (total numbers), aur `.dtype` (data type).',
    analogyTitle: 'Street Address: Flat, Floor, Building',
    analogyEn:
      'A 1D array is a single row of houses on a street. A 2D array is an apartment building with floors (rows) and flats per floor (columns). A 3D array is a whole housing society with multiple buildings stacked together.',
    analogyHi:
      '1D array ek gali mein line se bane ghar hain. 2D array ek building hai jisme floors (rows) aur flats (columns) hain. 3D array poori society hai jisme kai buildings ek saath hain.',
    steps: [
      {
        title: 'Check `.ndim`',
        en: 'Count how many axes the array has: 1 for a list, 2 for a table, 3 for stacked tables/RGB images.',
        hi: 'Check karein array mein kitni axes hain: 1 list ke liye, 2 table ke liye, 3 stacked tables ya color image ke liye.',
      },
      {
        title: 'Inspect `.shape`',
        en: 'Read the tuple `(rows, cols)` from outer dimension to inner dimension.',
        hi: '`(rows, cols)` tuple ko outer dimension se inner dimension tak padhein.',
      },
      {
        title: 'Verify `.size` and `.dtype`',
        en: 'Multiply shape numbers to confirm total element count and check whether data is `int64` or `float64`.',
        hi: 'Shape ke numbers multiply karke total elements (`.size`) aur data type (`.dtype`) verify karein.',
      },
      {
        title: 'Track Axis 0 vs Axis 1',
        en: 'Remember that `axis=0` moves down rows (column-wise) and `axis=1` moves across columns (row-wise).',
        hi: 'Yaad rakhein `axis=0` rows ke neeche chalta hai aur `axis=1` columns ke aar-paar chalta hai.',
      },
    ],
    codeLabel: 'PYTHON • INSPECTING ARRAY STRUCTURE',
    code: `import numpy as np

marks = np.array([
    [85, 90, 78],
    [92, 88, 95]
])
print("ndim:", marks.ndim)
print("shape:", marks.shape)
print("size:", marks.size)
print("dtype:", marks.dtype)`,
    codeOutput: `ndim: 2
shape: (2, 3)
size: 6
dtype: int64`,
    codeCaptionEn: '2 students (rows) × 3 subjects (columns) gives shape `(2, 3)` and total size `6`.',
    codeCaptionHi: '2 students (rows) × 3 subjects (columns) ka shape `(2, 3)` aur total size `6` hota hai.',
    tableTitle: 'Dimensions in Real Data Science Work',
    tableHeaders: ['Dimensions', 'Shape Example', 'Real-World Data Example'],
    tableRows: [
      ['0D (Scalar)', '()', 'Single temperature reading: 36.6'],
      ['1D (Vector)', '(7,)', 'Daily sales for 7 days of a week'],
      ['2D (Matrix)', '(1000, 12)', '1,000 customers × 12 features table'],
      ['3D (Tensor)', '(224, 224, 3)', 'One RGB color image (height × width × 3 channels)'],
    ],
    tableNoteEn: 'A 1D array of 5 items has shape `(5,)`, which is different from a 2D row `(1, 5)` or column `(5, 1)`.',
    tableNoteHi: '5 items ke 1D array ka shape `(5,)` hota hai, jo 2D row `(1, 5)` aur column `(5, 1)` se alag hai.',
    mistakeEn: 'Confusing a 1D array of shape `(5,)` with a 2D column vector of shape `(5, 1)`, causing Scikit-Learn models to throw shape errors.',
    mistakeHi: '1D array `(5,)` aur 2D column `(5, 1)` ko ek hi samajhna, jisse Scikit-Learn models mein shape error aa jaata hai.',
    proHabitEn: 'Print `.shape` right after loading or transforming any array — 80% of ML debugging is catching a shape mismatch early.',
    proHabitHi: 'Har data load ya transform ke turant baad `.shape` print karein — 80% ML bugs shape mismatch se hi aate hain.',
    jobUseEn: 'Computer vision pipelines constantly inspect 3D/4D image tensor shapes `(batch, height, width, channels)` before feeding models.',
    jobUseHi: 'Computer vision aur deep learning mein model ko data dene se pehle hamesha `(batch, height, width, channels)` shape verify kiya jaata hai.',
    mcq1Question: 'What is the `.shape` of a 2D NumPy array with 4 rows and 5 columns?',
    mcq1Correct: '(4, 5)',
    mcq1Wrongs: ['(5, 4)', '(20,)', '(2, 20)'],
    mcq1Explain: 'In 2D NumPy arrays, `.shape` always lists `(number_of_rows, number_of_columns)`.',
    mcq2Question: 'What does `arr.ndim` return for an RGB color image array of shape `(128, 128, 3)`?',
    mcq2Correct: '3',
    mcq2Wrongs: ['128', '49152', '2'],
    mcq2Explain: '`.ndim` counts the number of axes in the shape tuple; `(128, 128, 3)` has 3 axes.',
    realWorldScenario:
      'Your machine learning model expects a 2D feature matrix `(n_samples, 1)` but your array has shape `(100,)`. You need to inspect and identify the dimension mismatch.',
    interviewQ1: 'What is the difference between `.shape` and `.size` in NumPy?',
    interviewA1:
      '`.shape` returns a tuple showing the length along each dimension (e.g., `(2, 3)`), whereas `.size` returns a single integer equal to the total number of elements (`6`).',
    interviewQ2: 'Why does a shape of `(5,)` behave differently from `(5, 1)` in linear algebra or ML libraries?',
    interviewA2:
      '`(5,)` is a 1D vector with only one axis, while `(5, 1)` is a 2D matrix with 5 rows and 1 column. Many ML estimators require explicit 2D inputs `(samples, features)`.',
  },
  {
    id: 160,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 4,
    title: 'Array Indexing and Slicing',
    subtitle: 'PICKING EXACT ELEMENTS, ROWS, COLUMNS, AND SUB-GRIDS',
    coreEn:
      'Indexing grabs a single element using 0-based positions (`arr[row, col]`), while slicing extracts a range (`start:stop:step`) across rows and columns simultaneously.',
    coreHi:
      'Indexing 0-based position (`arr[row, col]`) se ek exact element nikalta hai, aur slicing (`start:stop:step`) se aap ek saath multiple rows aur columns ka tukda kaat sakte hain.',
    analogyTitle: 'Cutting a Rectangular Piece from a Chocolate Bar',
    analogyEn:
      'Imagine a grid-shaped chocolate bar. Indexing picks one single square (`row 1, col 2`). Slicing cuts out a whole rectangular block (`rows 0 to 2, cols 1 to 3`) in one clean snap.',
    analogyHi:
      'Ek grid wali chocolate bar sochiye. Indexing se aap ek single square uthate hain (`row 1, col 2`), aur slicing se poora chhota rectangle (`rows 0 se 2, cols 1 se 3`) kaat lete hain.',
    steps: [
      {
        title: 'Use 0-Based Positions',
        en: 'Remember the first row/column is index `0`, and `-1` always points to the very last item.',
        hi: 'Yaad rakhein pehla row/column index `0` hota hai, aur `-1` hamesha aakhiri item dikhata hai.',
      },
      {
        title: 'Index 2D with a Comma',
        en: 'Write `arr[row, col]` instead of `arr[row][col]` for cleaner and faster 2D lookups.',
        hi: '2D array mein `arr[row][col]` ki jagah clean aur fast `arr[row, col]` syntax likhein.',
      },
      {
        title: 'Slice Ranges with Colons',
        en: 'Use `arr[0:2, 1:3]` where the `stop` index is excluded, or `:` alone to mean "all".',
        hi: '`arr[0:2, 1:3]` likhein jahan `stop` index exclude hota hai, aur sirf `:` ka matlab "sab kuch" hota hai.',
      },
      {
        title: 'Copy When Modifying Safely',
        en: 'NumPy slices are live views of the original array; call `.copy()` if you want an independent copy.',
        hi: 'NumPy slice original array ka live view hota hai; alag copy chahiye toh `.copy()` lagayein.',
      },
    ],
    codeLabel: 'PYTHON • 2D INDEXING & SLICING',
    code: `import numpy as np

grid = np.array([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
])
print("Center element:", grid[1, 1])
print("Last column:", grid[:, -1])
print("Top-left 2x2:\\n", grid[0:2, 0:2])`,
    codeOutput: `Center element: 50
Last column: [30 60 90]
Top-left 2x2:
 [[10 20]
 [40 50]]`,
    codeCaptionEn: '`grid[:, -1]` selects all rows (`:`) from the last column (`-1`).',
    codeCaptionHi: '`grid[:, -1]` ka matlab hai saari rows (`:`) aur aakhiri column (`-1`).',
    tableTitle: 'Essential NumPy Slicing Patterns',
    tableHeaders: ['Expression', 'Meaning', 'Result on 3×3 Grid'],
    tableRows: [
      ['grid[0, 2]', 'Row 0, Column 2', '30'],
      ['grid[1, :]', 'Entire second row', '[40, 50, 60]'],
      ['grid[:, 0]', 'Entire first column', '[10, 40, 70]'],
      ['grid[1:, 1:]', 'Bottom-right 2×2 block', '[[50, 60], [80, 90]]'],
    ],
    tableNoteEn: 'Changing a value inside a slice like `sub = grid[0:2, 0:2]; sub[0, 0] = 999` also changes `grid` unless you used `.copy()`.',
    tableNoteHi: 'Slice ke andar value badalne se original `grid` bhi badal jaata hai jab tak aap `.copy()` na lagayein.',
    mistakeEn: 'Assuming a NumPy slice creates a brand-new copy like a Python list slice, and accidentally overwriting the original dataset.',
    mistakeHi: 'Python list ki tarah NumPy slice ko bhi alag copy samajh lena aur galti se original data overwrite kar dena.',
    proHabitEn: 'Use `.copy()` whenever you extract a slice that you plan to edit independently, and prefer `arr[r, c]` comma notation.',
    proHabitHi: 'Jab bhi slice ko alag se edit karna ho toh `.copy()` lagayein aur hamesha `arr[r, c]` comma notation use karein.',
    jobUseEn: 'Used to crop image regions in computer vision, split feature columns `X = data[:, :-1]` from target `y = data[:, -1]`, and grab time-series windows.',
    jobUseHi: 'Images crop karne, ML mein features `X = data[:, :-1]` aur target `y = data[:, -1]` alag karne, aur time-series window nikalne mein use hota hai.',
    mcq1Question: 'Given a 2D array `data`, what does `data[:, -1]` select?',
    mcq1Correct: 'All rows from the last column.',
    mcq1Wrongs: [
      'All columns from the last row.',
      'Only the top-right corner element.',
      'Every element except the last column.',
    ],
    mcq1Explain: '`:` selects every row along axis 0, and `-1` selects the final column along axis 1.',
    mcq2Question: 'What happens to the original array `a` if you modify `b = a[0:3]; b[0] = 99`?',
    mcq2Correct: '`a[0]` also changes to `99` because basic slicing returns a view, not a copy.',
    mcq2Wrongs: [
      '`a` stays unchanged because slices always copy data.',
      'NumPy raises a ReadOnlyError.',
      'Only `b[0]` changes and `a` is deleted.',
    ],
    mcq2Explain: 'NumPy basic slicing creates a memory-efficient view pointing to the same data buffer unless `.copy()` is called.',
    realWorldScenario:
      'You have a 2D dataset array with 10 columns where the first 9 columns are input features and the 10th column is the house price target. You need to split `X` and `y` cleanly.',
    interviewQ1: 'What is the difference between a view and a copy in NumPy slicing?',
    interviewA1:
      'A view shares the same underlying memory as the original array (so edits affect both), whereas a copy allocates new memory and is completely independent.',
    interviewQ2: 'How would you separate features `X` and label `y` from a 2D NumPy matrix where `y` is the last column?',
    interviewA2:
      'Use `X = data[:, :-1]` for all rows and all columns up to the last one, and `y = data[:, -1]` for all rows of the final column.',
  },
  {
    id: 161,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 5,
    title: 'Vectorized Operations',
    subtitle: 'REPLACING SLOW PYTHON LOOPS WITH SINGLE-LINE ARRAY MATH',
    coreEn:
      'Vectorization means performing an operation on an entire NumPy array at once in compiled C code instead of looping over elements one by one in Python.',
    coreHi:
      'Vectorization ka matlab hai slow Python `for` loop chalane ke bajaye poore NumPy array par ek hi line mein compiled C speed se operation chalana.',
    analogyTitle: 'Stamping 100 Letters with a Printing Press vs Hand-Writing',
    analogyEn:
      'A Python loop is like signing 1,000 invitations one by one with a pen. Vectorization is like running all 1,000 sheets through a printing press in one second.',
    analogyHi:
      'Python loop 1,000 cards par ek-ek karke haath se sign karne jaisa hai. Vectorization ek printing press jaisa hai jo ek second mein sabhi 1,000 cards print kar de.',
    steps: [
      {
        title: 'Spot the Loop Pattern',
        en: 'Identify any `for` loop that applies the same formula to every element in a list.',
        hi: 'Pehchaniye ki kahan `for` loop har item par wahi same formula laga raha hai.',
      },
      {
        title: 'Convert to NumPy Arrays',
        en: 'Put both inputs (e.g., `quantities` and `unit_prices`) into NumPy arrays of matching shape.',
        hi: 'Dono inputs (jaise `quantities` aur `unit_prices`) ko same shape ke NumPy arrays mein rakhein.',
      },
      {
        title: 'Apply Direct Operators',
        en: 'Write `totals = quantities * unit_prices` — NumPy pairs elements automatically.',
        hi: 'Seedha `totals = quantities * unit_prices` likhein — NumPy har pair ko apne aap multiply kar dega.',
      },
      {
        title: 'Benchmark and Verify',
        en: 'Confirm the vectorized output matches your manual calculation while running orders of magnitude faster.',
        hi: 'Check karein ki vectorized result manual calculation se exact match karta hai aur kai guna tez chalta hai.',
      },
    ],
    codeLabel: 'PYTHON • VECTORIZED REVENUE CALCULATION',
    code: `import numpy as np

qty = np.array([2, 5, 1, 4])
price = np.array([300, 120, 950, 200])

revenue = qty * price
print("Line totals:", revenue)
print("Grand total:", revenue.sum())`,
    codeOutput: `Line totals: [600 600 950 800]
Grand total: 2950`,
    codeCaptionEn: 'Zero loops written — `qty * price` multiplies index 0 with 0, 1 with 1, and so on.',
    codeCaptionHi: 'Ek bhi loop nahi likha — `qty * price` ne index 0 ko 0 se, 1 ko 1 se seedha multiply kar diya.',
    tableTitle: 'Loop Approach vs Vectorized NumPy Approach',
    tableHeaders: ['Task', 'Slow Python Loop', 'Vectorized NumPy'],
    tableRows: [
      ['Add 10 to all', '[x + 10 for x in arr]', 'arr + 10'],
      ['Multiply 2 arrays', '[a[i]*b[i] for i in range(n)]', 'a * b'],
      ['Square every item', '[x**2 for x in arr]', 'arr ** 2'],
      ['Celsius to Fahrenheit', '[c*1.8 + 32 for c in temps]', 'temps * 1.8 + 32'],
    ],
    tableNoteEn: 'Vectorized code is not only faster — it is also shorter, cleaner, and easier to read like standard math.',
    tableNoteHi: 'Vectorized code sirf tez hi nahi hota, balki chhota, clean aur math formula jaisa padhne mein aasan hota hai.',
    mistakeEn: 'Writing nested `for` loops over NumPy arrays inside data cleaning or ML scripts, turning a 0.05-second job into a 15-second bottleneck.',
    mistakeHi: 'NumPy arrays ke upar nested `for` loops likhna, jisse 0.05 second ka kaam 15 second mein hota hai.',
    proHabitEn: 'Whenever you feel tempted to write a `for` loop over numbers, pause and ask: "Can I express this as a single array expression?"',
    proHabitHi: 'Jab bhi numbers par `for` loop likhne ka mann kare, ruk kar sochein: "Kya yeh ek hi NumPy array expression mein ho sakta hai?"',
    jobUseEn: 'Vectorization is essential for real-time fraud scoring, Monte Carlo financial simulations, and deep learning gradient updates.',
    jobUseHi: 'Real-time fraud scoring, financial simulations aur deep learning calculations mein vectorization ke bina speed possible hi nahi hai.',
    mcq1Question: 'What does "vectorization" mean in NumPy?',
    mcq1Correct: 'Applying operations to entire arrays at once in compiled C code instead of Python loops.',
    mcq1Wrongs: [
      'Drawing arrows on a chart with Matplotlib.',
      'Converting text sentences into alphabetical order.',
      'Splitting a 2D array into separate text files.',
    ],
    mcq1Explain: 'Vectorization pushes the loop down into optimized C/SIMD instructions on contiguous memory.',
    mcq2Question: 'What is the result of `np.array([1, 2, 3]) + np.array([10, 20, 30])`?',
    mcq2Correct: 'array([11, 22, 33])',
    mcq2Wrongs: [
      'array([1, 2, 3, 10, 20, 30])',
      'array([66])',
      'TypeError: cannot add arrays',
    ],
    mcq2Explain: 'NumPy adds arrays element by element: 1+10, 2+20, and 3+30.',
    realWorldScenario:
      'A weather analytics script converts 5 million hourly Celsius readings to Fahrenheit. Refactoring the Python `for` loop to `temps * 1.8 + 32` cuts runtime from 2.4 seconds to 15 milliseconds.',
    interviewQ1: 'Why is vectorization so much faster than a standard Python `for` loop?',
    interviewA1:
      'Python loops check object types and dispatch bytecode on every single iteration. Vectorized NumPy operations execute a single tight C loop over fixed-type contiguous memory using CPU SIMD instructions.',
    interviewQ2: 'Give an example of replacing a Python loop with a vectorized NumPy operation.',
    interviewA2:
      'Instead of `[p * (1 - d) for p, d in zip(prices, discounts)]`, write `prices * (1 - discounts)` on two NumPy arrays.',
  },
  {
    id: 162,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 6,
    title: 'Broadcasting',
    subtitle: 'HOW NUMPY DOES MATH ON ARRAYS OF DIFFERENT SHAPES',
    coreEn:
      'Broadcasting is NumPy’s automatic rule for stretching a smaller array (without copying memory) so it matches the shape of a larger array during arithmetic.',
    coreHi:
      'Broadcasting NumPy ka smart rule hai jisse chhote array ko (extra memory copy kiye bina) bade array ke shape ke barabar stretch karke math kiya ja sakta hai.',
    analogyTitle: 'Applying One Coupon Code to Every Item in a Cart',
    analogyEn:
      'If a store gives ₹50 off per item, they do not print 100 identical coupons for your 100 items. One single ₹50 discount rule is broadcast across every row of your bill.',
    analogyHi:
      'Agar har item par ₹50 off hai, toh dukandar 100 alag coupons print nahi karta. Wahi ek ₹50 ka rule poore bill ki har row par automatically apply (broadcast) ho jaata hai.',
    steps: [
      {
        title: 'Compare Shapes Right-to-Left',
        en: 'Line up the two array shapes starting from their trailing (rightmost) dimensions.',
        hi: 'Dono arrays ke shapes ko right side (aakhiri dimension) se line up karke compare karein.',
      },
      {
        title: 'Check Compatibility Rule',
        en: 'Two dimensions match if they are equal OR if one of them is `1` (or missing).',
        hi: 'Do dimensions tabhi compatible hain jab woh barabar hon YA unmein se koi ek `1` (ya missing) ho.',
      },
      {
        title: 'Virtually Stretch Size-1 Axes',
        en: 'NumPy stretches any dimension of size `1` to match the other array without allocating extra memory.',
        hi: 'NumPy size `1` wali axis ko bina extra memory kharch kiye doosre array ke barabar stretch kar deta hai.',
      },
      {
        title: 'Catch Incompatible Shapes',
        en: 'If trailing dimensions differ and neither is `1` (like `(3, 2)` and `(3,)`), NumPy raises a `ValueError`.',
        hi: 'Agar dimensions alag hain aur koi bhi `1` nahi hai (jaise `(3, 2)` aur `(3,)`), toh NumPy `ValueError` deta hai.',
      },
    ],
    codeLabel: 'PYTHON • ADDING COLUMN BONUSES VIA BROADCASTING',
    code: `import numpy as np

scores = np.array([
    [70, 80, 90],
    [60, 75, 85]
])
bonus = np.array([5, 0, 10])  # shape (3,) broadcasts across 2 rows

updated = scores + bonus
print(updated)`,
    codeOutput: `[[ 75  80 100]
 [ 65  75  95]]`,
    codeCaptionEn: 'Shape `(2, 3)` + shape `(3,)` works because the rightmost dimension `3` matches.',
    codeCaptionHi: 'Shape `(2, 3)` + `(3,)` aaram se kaam karta hai kyunki rightmost dimension `3` match karti hai.',
    tableTitle: 'Broadcasting Compatibility Cheat Sheet',
    tableHeaders: ['Array A Shape', 'Array B Shape', 'Compatible?', 'Result Shape'],
    tableRows: [
      ['(3, 4)', '()', 'Yes (scalar)', '(3, 4)'],
      ['(3, 4)', '(4,)', 'Yes (row broadcast)', '(3, 4)'],
      ['(3, 4)', '(3, 1)', 'Yes (col broadcast)', '(3, 4)'],
      ['(3, 4)', '(3,)', 'No (4 != 3)', 'ValueError'],
    ],
    tableNoteEn: 'To add a 1D array of length 3 to each row of a `(3, 4)` matrix, reshape it to `(3, 1)` first.',
    tableNoteHi: '`(3, 4)` matrix ki har row mein 3-length ka array add karne ke liye pehle use `(3, 1)` reshape karein.',
    mistakeEn: 'Trying to add a `(3,)` array to a `(3, 4)` matrix expecting row-wise addition — NumPy compares `3` vs `4` on the right and crashes.',
    mistakeHi: '`(3, 4)` matrix mein seedha `(3,)` array add karna — NumPy right se `4` aur `3` compare karta hai aur error de deta hai.',
    proHabitEn: 'Always write shapes side by side from right to left (e.g., `(3, 4)` vs `(3, 1)`) before relying on broadcasting.',
    proHabitHi: 'Broadcasting use karne se pehle dono shapes ko right-to-left likh kar check karein (jaise `(3, 4)` vs `(3, 1)`).',
    jobUseEn: 'Used everywhere in feature scaling (`(X - col_means) / col_stds`), subtracting image channel means, and adding bias vectors in neural networks.',
    jobUseHi: 'Feature scaling (`(X - col_means) / col_stds`), image normalization aur neural network mein bias add karne ke liye roz use hota hai.',
    mcq1Question: 'Which pair of NumPy shapes is compatible for broadcasting?',
    mcq1Correct: '(4, 3) and (3,)',
    mcq1Wrongs: ['(4, 3) and (4,)', '(2, 3) and (3, 2)', '(5, 2) and (5, 3)'],
    mcq1Explain: 'Aligning from the right: `3` matches `3`, and the missing leading dimension is treated as `1`, yielding `(4, 3)`.',
    mcq2Question: 'How do you fix a broadcasting error when adding a `(4,)` array column-wise to a `(4, 3)` matrix?',
    mcq2Correct: 'Reshape the `(4,)` array to `(4, 1)` so trailing `1` stretches across `3`.',
    mcq2Wrongs: [
      'Reshape it to `(1, 4)`.',
      'Convert both arrays to Python strings.',
      'Delete one column from the matrix.',
    ],
    mcq2Explain: 'With shape `(4, 1)`, the `4` matches `4` and the `1` broadcasts across the `3` columns.',
    realWorldScenario:
      'You have a `(1000, 5)` table of 5 sensor features and a `(5,)` array of column averages. Subtracting `data - col_means` centers all 5 columns in one line via broadcasting.',
    interviewQ1: 'Explain NumPy’s two rules of broadcasting.',
    interviewA1:
      'NumPy compares shapes from right to left. Two dimensions are compatible if they are equal, or if one of them is 1 (missing leading dimensions are padded with 1). Otherwise, it raises a ValueError.',
    interviewQ2: 'Does broadcasting copy the smaller array in memory?',
    interviewA2:
      'No. NumPy uses stride tricks to virtually repeat the smaller array without allocating extra memory, making it both fast and memory-efficient.',
  },
  {
    id: 163,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 7,
    title: 'Mathematical Operations on Arrays',
    subtitle: 'UNIVERSAL FUNCTIONS (UFUNCS), POWERS, LOGS, AND MATRIX DOT PRODUCTS',
    coreEn:
      'NumPy provides fast element-wise universal functions (`np.sqrt`, `np.log`, `np.exp`, `np.round`, `np.abs`) as well as linear algebra operations like `@` (dot product / matrix multiplication).',
    coreHi:
      'NumPy aapko fast element-wise functions (`np.sqrt`, `np.log`, `np.exp`, `np.round`, `np.abs`) aur linear algebra ke liye `@` (matrix multiplication / dot product) deta hai.',
    analogyTitle: 'Scientific Calculator That Solves a Whole Spreadsheet at Once',
    analogyEn:
      'Pressing `√` on a pocket calculator only computes one square root. Calling `np.sqrt(arr)` is like pressing `√` once and watching every single number in a 10,000-cell sheet transform instantly.',
    analogyHi:
      'Normal calculator mein `√` dabane par ek hi number ka square root milta hai. `np.sqrt(arr)` aisa calculator hai jo ek click mein 10,000 numbers ka square root nikal de.',
    steps: [
      {
        title: 'Choose Element-Wise Ufuncs',
        en: 'Use `np.sqrt()`, `np.log()`, `np.exp()`, or `np.abs()` to transform each value individually.',
        hi: 'Har value ko transform karne ke liye `np.sqrt()`, `np.log()`, `np.exp()`, ya `np.abs()` use karein.',
      },
      {
        title: 'Handle Edge Values Safely',
        en: 'Watch out for division by zero or `log(0)` which produce `inf` or `nan`; use `np.log1p(x)` for zeros.',
        hi: 'Zero se divide ya `log(0)` par `inf`/`nan` aa sakta hai; zeros ke liye `np.log1p(x)` use karein.',
      },
      {
        title: 'Distinguish `*` vs `@`',
        en: 'Remember `A * B` multiplies matching positions, while `A @ B` performs true matrix multiplication.',
        hi: 'Yaad rakhein `A * B` position-by-position multiply karta hai, jabki `A @ B` asli matrix multiplication karta hai.',
      },
      {
        title: 'Round for Clean Reporting',
        en: 'Use `np.round(result, 2)` when displaying metrics to business stakeholders.',
        hi: 'Reports mein saaf numbers dikhane ke liye `np.round(result, 2)` use karein.',
      },
    ],
    codeLabel: 'PYTHON • ELEMENT-WISE MATH VS DOT PRODUCT',
    code: `import numpy as np

errors = np.array([-4, 9, -16])
weights = np.array([0.5, 0.3, 0.2])
scores = np.array([80, 90, 70])

print("Abs:", np.abs(errors))
print("Sqrt of abs:", np.sqrt(np.abs(errors)))
print("Weighted score (dot):", weights @ scores)`,
    codeOutput: `Abs: [ 4  9 16]
Sqrt of abs: [2. 3. 4.]
Weighted score (dot): 81.0`,
    codeCaptionEn: '`weights @ scores` computes `0.5*80 + 0.3*90 + 0.2*70 = 81.0` in one step.',
    codeCaptionHi: '`weights @ scores` ne `0.5*80 + 0.3*90 + 0.2*70 = 81.0` ek hi line mein nikal diya.',
    tableTitle: 'Must-Know NumPy Math Functions',
    tableHeaders: ['Function / Operator', 'What It Does', 'Common DS Use Case'],
    tableRows: [
      ['np.sqrt(x)', 'Square root of every element', 'Computing RMSE error metric'],
      ['np.log1p(x)', 'Computes ln(1 + x) safely', 'Reducing skewed price/income features'],
      ['np.abs(x)', 'Removes minus signs', 'Computing Mean Absolute Error (MAE)'],
      ['A @ B', 'Dot product / matrix multiply', 'Linear regression & neural network layers'],
    ],
    tableNoteEn: 'Avoid Python’s built-in `math.sqrt()` on NumPy arrays — it only works on one scalar number at a time.',
    tableNoteHi: 'NumPy array par Python ka `math.sqrt()` mat chalayein — woh sirf ek single number par kaam karta hai.',
    mistakeEn: 'Using `A * B` when you actually wanted matrix multiplication `A @ B`, or calling `np.log(0)` and getting `-inf` values that break ML models.',
    mistakeHi: 'Matrix multiply ke liye `A @ B` ki jagah `A * B` likhna, ya `np.log(0)` se `-inf` bana dena jo ML model tod de.',
    proHabitEn: 'Use `np.log1p()` for non-negative skewed data (like sales with zeros) and `@` for dot products.',
    proHabitHi: 'Zero wale skewed data (jaise sales) par `np.log1p()` aur dot product ke liye `@` operator use karein.',
    jobUseEn: 'Every regression prediction (`X @ weights + bias`), loss function (MSE, MAE, log-loss), and feature transformation uses these exact NumPy math ufuncs.',
    jobUseHi: 'Har regression prediction (`X @ weights + bias`), loss calculation (MSE, MAE) aur feature scaling inhi NumPy math functions se hoti hai.',
    mcq1Question: 'What is the difference between `A * B` and `A @ B` for two 2D NumPy arrays?',
    mcq1Correct: '`A * B` performs element-wise multiplication; `A @ B` performs matrix multiplication.',
    mcq1Wrongs: [
      'They produce the exact same result.',
      '`A @ B` adds the arrays together.',
      '`A * B` only works on 1D arrays.',
    ],
    mcq1Explain: 'In NumPy, `*` multiplies corresponding cells, whereas `@` (or `np.matmul`) computes dot/matrix products.',
    mcq2Question: 'Why is `np.log1p(sales)` often safer than `np.log(sales)` on business datasets?',
    mcq2Correct: 'Because `log1p(0)` returns `0.0` instead of `-inf` when a day has zero sales.',
    mcq2Wrongs: [
      'Because `log1p` rounds every number to an integer.',
      'Because `np.log` does not exist in NumPy.',
      'Because `log1p` converts negative numbers to positive.',
    ],
    mcq2Explain: '`np.log1p(x)` computes `ln(1 + x)`, smoothly handling zero values without creating `-inf`.',
    realWorldScenario:
      'You are calculating Root Mean Squared Error (RMSE) between actual house prices and predicted prices using `np.sqrt(np.mean((actual - pred) ** 2))`.',
    interviewQ1: 'Why should you use `np.sqrt(arr)` instead of Python’s `math.sqrt(arr)`?',
    interviewA1:
      '`math.sqrt` only accepts a single scalar number and fails on arrays, whereas `np.sqrt` is a vectorized ufunc that processes entire arrays at C speed.',
    interviewQ2: 'What does a dot product (`weights @ features`) represent in Machine Learning?',
    interviewA2:
      'It computes the weighted sum of input features — the core mathematical building block of linear regression, logistic regression, and every neuron in a neural network.',
  },
  {
    id: 164,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 8,
    title: 'Aggregation and Summary Statistics',
    subtitle: 'SUM, MEAN, MEDIAN, STD, MIN, MAX, AND AXIS-WISE ROLLUPS',
    coreEn:
      'Aggregation collapses many numbers into summary insights like `.sum()`, `.mean()`, `np.median()`, `.std()`, `.min()`, `.max()`, and `.argmax()` — globally or along `axis=0` / `axis=1`.',
    coreHi:
      'Aggregation bahut saare numbers ko ek summary insight mein badalta hai jaise `.sum()`, `.mean()`, `np.median()`, `.std()`, `.min()`, `.max()`, aur `.argmax()` — poore array par ya `axis=0` / `axis=1` ke hisaab se.',
    analogyTitle: 'School Report Card: Subject Average vs Student Average',
    analogyEn:
      'In a marks table where rows are students and columns are subjects, `axis=0` goes down each column to find the class average per subject, while `axis=1` goes across each row to find each student’s total.',
    analogyHi:
      'Marks table mein jahan rows students aur columns subjects hain, `axis=0` neeche chal kar har subject ka class average nikalta hai, aur `axis=1` aar-paar chal kar har student ka total nikalta hai.',
    steps: [
      {
        title: 'Compute Whole-Array Summaries',
        en: 'Call `arr.mean()`, `arr.sum()`, or `arr.std()` with no axis to summarize every value together.',
        hi: 'Poore array ka summary nikalne ke liye bina axis ke `arr.mean()`, `arr.sum()`, ya `arr.std()` call karein.',
      },
      {
        title: 'Aggregate Down Columns (`axis=0`)',
        en: 'Collapse rows downward to get one metric per column (e.g., average score per subject).',
        hi: 'Rows ko neeche collapse karein taaki har column ka ek metric mile (jaise har subject ka average).',
      },
      {
        title: 'Aggregate Across Rows (`axis=1`)',
        en: 'Collapse columns sideways to get one metric per row (e.g., total marks per student).',
        hi: 'Columns ko sideways collapse karein taaki har row ka ek metric mile (jaise har student ka total).',
      },
      {
        title: 'Locate Winners with `argmin` / `argmax`',
        en: 'Use `np.argmax()` to get the index position of the highest value, not just the value itself.',
        hi: 'Sabse badi value ki exact position (index) paane ke liye `np.argmax()` use karein.',
      },
    ],
    codeLabel: 'PYTHON • AXIS-WISE SUMMARY STATISTICS',
    code: `import numpy as np

# Rows = 2 students, Cols = [Math, Science, English]
marks = np.array([
    [80, 90, 70],
    [60, 85, 95]
])
print("Overall mean:", marks.mean())
print("Subject averages (axis=0):", marks.mean(axis=0))
print("Student totals (axis=1):", marks.sum(axis=1))
print("Best subject index for Student 1:", np.argmax(marks[0]))`,
    codeOutput: `Overall mean: 80.0
Subject averages (axis=0): [70.  87.5 82.5]
Student totals (axis=1): [240 240]
Best subject index for Student 1: 1`,
    codeCaptionEn: '`axis=0` gives 3 numbers (one per subject), while `axis=1` gives 2 numbers (one per student).',
    codeCaptionHi: '`axis=0` se 3 numbers (har subject ka) aur `axis=1` se 2 numbers (har student ka) milte hain.',
    tableTitle: 'Key NumPy Aggregation Functions',
    tableHeaders: ['Function', 'What It Returns', 'NaN-Safe Version'],
    tableRows: [
      ['np.sum(a)', 'Total of elements', 'np.nansum(a)'],
      ['np.mean(a)', 'Arithmetic average', 'np.nanmean(a)'],
      ['np.median(a)', 'Middle value (outlier-resistant)', 'np.nanmedian(a)'],
      ['np.std(a)', 'Spread / standard deviation', 'np.nanstd(a)'],
    ],
    tableNoteEn: 'If even one `np.nan` exists in an array, `np.mean()` returns `nan` unless you use `np.nanmean()`.',
    tableNoteHi: 'Agar array mein ek bhi `np.nan` hai toh `np.mean()` ka result `nan` aayega; aise mein `np.nanmean()` use karein.',
    mistakeEn: 'Mixing up `axis=0` and `axis=1`, or forgetting that a single `NaN` value poisons `np.sum()` and `np.mean()`.',
    mistakeHi: '`axis=0` aur `axis=1` mein confuse hona, ya yeh bhool jana ki ek single `NaN` poore `np.mean()` ko `nan` bana deta hai.',
    proHabitEn: 'Remember: the `axis` you specify is the axis that gets collapsed (disappears). Always verify output `.shape` and use `nanmean` when missing values may exist.',
    proHabitHi: 'Yaad rakhein: jo `axis` aap likhte hain wahi collapse (gayab) hoti hai. Output `.shape` check karein aur missing data mein `nanmean` use karein.',
    jobUseEn: 'Used to compute daily KPIs, feature means/standard deviations for normalization, and `np.argmax()` to pick the predicted class from neural network probabilities.',
    jobUseHi: 'Daily KPIs nikalne, feature normalization ke liye mean/std compute karne aur neural network probabilities se predicted class (`argmax`) chunne mein use hota hai.',
    mcq1Question: 'For a 2D array of shape `(5, 3)`, what is the shape of `arr.mean(axis=0)`?',
    mcq1Correct: '(3,)',
    mcq1Wrongs: ['(5,)', '(5, 3)', '()'],
    mcq1Explain: 'Aggregating along `axis=0` collapses the 5 rows down into 1 summary value per column, leaving shape `(3,)`.',
    mcq2Question: 'What does `np.argmax(np.array([12, 45, 30]))` return?',
    mcq2Correct: '1',
    mcq2Wrongs: ['45', '2', '0'],
    mcq2Explain: '`np.argmax` returns the index position (`1`) of the largest value (`45`), not the value itself.',
    realWorldScenario:
      'Your classifier outputs class probabilities `[0.12, 0.78, 0.10]` for `[Cat, Dog, Bird]`. You use `np.argmax()` to pick index `1` (`Dog`).',
    interviewQ1: 'How do you remember the difference between `axis=0` and `axis=1` in NumPy?',
    interviewA1:
      'The axis number indicates the dimension being collapsed: `axis=0` collapses rows (giving one result per column), and `axis=1` collapses columns (giving one result per row).',
    interviewQ2: 'What happens if you call `np.mean()` on an array containing `np.nan`, and how do you handle it?',
    interviewA2:
      '`np.mean()` propagates `nan` and returns `nan`. To ignore missing values safely, use `np.nanmean()`.',
  },
  {
    id: 165,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 9,
    title: 'Boolean Indexing and Filtering',
    subtitle: 'SELECTING AND UPDATING DATA WITH TRUE/FALSE MASKS',
    coreEn:
      'Boolean indexing creates a `True`/`False` mask from a condition (like `scores >= 80`) and uses that mask to filter or update only the matching elements.',
    coreHi:
      'Boolean indexing kisi condition (jaise `scores >= 80`) se ek `True`/`False` mask banata hai aur us mask se sirf matching elements ko filter ya update karta hai.',
    analogyTitle: 'Stencil Card Over a Sheet of Numbers',
    analogyEn:
      'Place a cardboard stencil with cutouts (`True`) and solid spots (`False`) over a page of numbers. Only the numbers visible through the cutouts come through or get highlighted.',
    analogyHi:
      'Numbers ke page par ek stencil sheet rakh dijiye jisme kuch jagah holes (`True`) hain aur baaki band (`False`). Sirf holes wale numbers hi bahar nikalte ya highlight hote hain.',
    steps: [
      {
        title: 'Write a Condition',
        en: 'Compare an array against a threshold (e.g., `mask = temps > 35`) to get a boolean array.',
        hi: 'Array ko threshold se compare karein (jaise `mask = temps > 35`) taaki `True/False` mask ban jaye.',
      },
      {
        title: 'Combine Conditions with `&` and `|`',
        en: 'Wrap each condition in parentheses and use `&` (AND), `|` (OR), or `~` (NOT).',
        hi: 'Har condition ko parentheses `(...)` mein band karein aur `&` (AND), `|` (OR), `~` (NOT) lagayein.',
      },
      {
        title: 'Filter Matching Values',
        en: 'Pass the mask inside brackets `temps[mask]` to extract only the `True` entries.',
        hi: 'Bracket ke andar mask pass karein `temps[mask]` taaki sirf `True` values bahar aayein.',
      },
      {
        title: 'Use `np.where()` for If-Else Labels',
        en: 'Use `np.where(cond, "High", "Normal")` to assign conditional values across the whole array.',
        hi: 'Poore array par if-else label lagane ke liye `np.where(cond, "High", "Normal")` use karein.',
      },
    ],
    codeLabel: 'PYTHON • MASK FILTERING & NP.WHERE',
    code: `import numpy as np

sales = np.array([120, 450, 80, 600, 310])
high_mask = (sales >= 300) & (sales <= 500)

print("Mask:", high_mask)
print("Mid-high sales:", sales[high_mask])
print("Status:", np.where(sales >= 300, "Target Met", "Below"))`,
    codeOutput: `Mask: [False  True False False  True]
Mid-high sales: [450 310]
Status: ['Below' 'Target Met' 'Below' 'Target Met' 'Target Met']`,
    codeCaptionEn: 'Parentheses around `(sales >= 300)` and `(sales <= 500)` are mandatory when using `&`.',
    codeCaptionHi: '`&` use karte waqt `(sales >= 300)` aur `(sales <= 500)` ke chaaron taraf parentheses zaroori hain.',
    tableTitle: 'Boolean Mask Operators in NumPy',
    tableHeaders: ['Operator', 'Meaning', 'Correct Example'],
    tableRows: [
      ['&', 'Element-wise AND', '(x > 10) & (x < 50)'],
      ['|', 'Element-wise OR', '(x < 0) | (x > 100)'],
      ['~', 'Element-wise NOT', '~(x == 0)'],
      ['np.where()', 'Vectorized if-else', 'np.where(x > 0, x, 0)'],
    ],
    tableNoteEn: 'Boolean indexing returns a **copy**, unlike basic slicing which returns a view.',
    tableNoteHi: 'Basic slicing ke opposite, boolean indexing hamesha ek naya **copy** return karta hai.',
    mistakeEn: 'Writing `sales >= 300 and sales <= 500` using Python’s `and`/`or` keywords, which crashes with `ValueError: The truth value of an array is ambiguous`.',
    mistakeHi: 'NumPy mask mein `&` ki jagah Python ka `and` keyword likhna, jisse `truth value of an array is ambiguous` error aata hai.',
    proHabitEn: 'Always use `&`, `|`, `~` with parentheses around every condition, and use `np.where()` for clean conditional replacement.',
    proHabitHi: 'Hamesha har condition ko brackets mein rakhkar `&`, `|`, `~` use karein aur conditional replacement ke liye `np.where()` lagayein.',
    jobUseEn: 'Used to filter outliers (`x[x < upper_limit]`), clip negative sensor errors to zero (`np.where(x < 0, 0, x)`), and segment high-value customers.',
    jobUseHi: 'Outliers hatane, negative sensor errors ko zero karne (`np.where(x < 0, 0, x)`), aur high-value customers filter karne mein use hota hai.',
    mcq1Question: 'Why does `(arr > 10) and (arr < 50)` raise a ValueError in NumPy?',
    mcq1Correct: 'Python’s `and` expects a single True/False value; NumPy arrays require the element-wise `&` operator.',
    mcq1Wrongs: [
      'NumPy does not support `<` comparisons.',
      'You cannot compare numbers greater than 10.',
      'Parentheses are not allowed in NumPy.',
    ],
    mcq1Explain: 'Element-wise logical combination in NumPy uses `&` (AND), `|` (OR), and `~` (NOT) with parentheses.',
    mcq2Question: 'What does `np.where(np.array([-5, 10, -2]) < 0, 0, np.array([-5, 10, -2]))` output?',
    mcq2Correct: 'array([0, 10, 0])',
    mcq2Wrongs: ['array([-5, 0, -2])', 'array([True, False, True])', 'array([0, 0, 0])'],
    mcq2Explain: 'Wherever the condition `< 0` is True, `np.where` puts `0`; otherwise it keeps the original value (`10`).',
    realWorldScenario:
      'An IoT temperature sensor occasionally glitches and logs `-999`. You use a boolean mask `readings[readings > -50]` to filter valid measurements before computing the daily average.',
    interviewQ1: 'Does boolean indexing return a view or a copy in NumPy?',
    interviewA1:
      'Boolean indexing always returns a copy of the selected elements because the matching items may not sit in a regular strided memory pattern.',
    interviewQ2: 'How can you replace all negative values in a NumPy array with `0` in one line?',
    interviewA2:
      'Either in-place with `arr[arr < 0] = 0` or creating a new array with `np.where(arr < 0, 0, arr)` (or `np.clip(arr, 0, None)`).',
  },
  {
    id: 166,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 10,
    title: 'Reshaping and Combining Arrays',
    subtitle: 'RESHAPE, FLATTEN, VSTACK, HSTACK, AND CONCATENATE',
    coreEn:
      'Reshaping rearranges an array’s dimensions without changing its data (`arr.reshape(r, c)`), while combining joins multiple arrays vertically (`np.vstack`) or horizontally (`np.hstack`).',
    coreHi:
      'Reshaping data badle bina array ka shape badalta hai (`arr.reshape(r, c)`), aur combining multiple arrays ko upar-neeche (`np.vstack`) ya bagal-bagal (`np.hstack`) jodta hai.',
    analogyTitle: 'Repacking 12 Cans from 1 Long Row into a 3×4 Box',
    analogyEn:
      'You still have the exact same 12 soda cans — you just rearrange them from a 1×12 line into a 3×4 crate (`reshape(3, 4)`). Stacking two crates on top of each other is `vstack`; placing them side by side is `hstack`.',
    analogyHi:
      'Aapke paas wahi 12 cans hain — bas unhe 1×12 ki lambi line se 3×4 ke box mein jama diya (`reshape(3, 4)`). Do boxes ko upar-neeche rakhna `vstack` aur bagal-bagal rakhna `hstack` hai.',
    steps: [
      {
        title: 'Keep Total Size Identical',
        en: 'Ensure `new_rows * new_cols` equals `arr.size` (e.g., 12 elements can become `(3, 4)` or `(2, 6)`).',
        hi: 'Check karein ki `new_rows * new_cols` hamesha `arr.size` ke barabar ho (jaise 12 se `(3, 4)` ya `(2, 6)`).',
      },
      {
        title: 'Use `-1` for Auto-Calculation',
        en: 'Write `arr.reshape(-1, 1)` to let NumPy automatically compute the exact row count.',
        hi: '`arr.reshape(-1, 1)` likhein taaki NumPy khud exact rows ki ginti nikal le.',
      },
      {
        title: 'Stack Vertically or Horizontally',
        en: 'Use `np.vstack([a, b])` to add more rows and `np.hstack([a, b])` to add more columns.',
        hi: 'Zyada rows jodne ke liye `np.vstack([a, b])` aur zyada columns jodne ke liye `np.hstack([a, b])` use karein.',
      },
      {
        title: 'Flatten Back to 1D When Needed',
        en: 'Use `.ravel()` (view) or `.flatten()` (copy) to turn a 2D grid back into a 1D vector.',
        hi: '2D grid ko wapas 1D vector banane ke liye `.ravel()` (view) ya `.flatten()` (copy) use karein.',
      },
    ],
    codeLabel: 'PYTHON • RESHAPE, VSTACK & HSTACK',
    code: `import numpy as np

a = np.arange(1, 7).reshape(2, 3)
b = np.array([[7, 8, 9]])

stacked_rows = np.vstack([a, b])
col_vec = np.array([10, 20, 30]).reshape(-1, 1)
print("Reshaped a:\\n", a)
print("Vertical stack shape:", stacked_rows.shape)
print("Column vector shape:", col_vec.shape)`,
    codeOutput: `Reshaped a:
 [[1 2 3]
 [4 5 6]]
Vertical stack shape: (3, 3)
Column vector shape: (3, 1)`,
    codeCaptionEn: '`.reshape(-1, 1)` is the go-to trick for turning a 1D feature array into a 2D column for Scikit-Learn.',
    codeCaptionHi: '`.reshape(-1, 1)` Scikit-Learn ke liye 1D feature array ko 2D column banane ka sabse popular trick hai.',
    tableTitle: 'Reshaping & Combining Toolkit',
    tableHeaders: ['Function', 'Purpose', 'Shape Rule'],
    tableRows: [
      ['arr.reshape(r, c)', 'Change dimensions', 'r * c must equal arr.size'],
      ['arr.reshape(-1, 1)', 'Convert 1D to 2D column', '-1 infers row count'],
      ['np.vstack([a, b])', 'Stack rows (axis=0)', 'Same number of columns'],
      ['np.hstack([a, b])', 'Stack columns (axis=1)', 'Same number of rows'],
    ],
    tableNoteEn: 'Pass arrays inside a list or tuple to `vstack`, `hstack`, and `concatenate`: `np.vstack([a, b])`.',
    tableNoteHi: '`vstack`, `hstack`, aur `concatenate` mein arrays ko hamesha list ya tuple `[a, b]` mein band karke pass karein.',
    mistakeEn: 'Trying to `reshape` 10 elements into `(3, 4)` (needs 12) or forgetting brackets in `np.vstack(a, b)` instead of `np.vstack([a, b])`.',
    mistakeHi: '10 elements ko `(3, 4)` mein reshape karne ki koshish karna ya `np.vstack([a, b])` mein square brackets bhool jana.',
    proHabitEn: 'Use `-1` in `.reshape(-1, cols)` so your code adapts automatically even when dataset row counts change.',
    proHabitHi: '`.reshape(-1, cols)` mein `-1` use karein taaki data ki rows badalne par bhi code bina error chale.',
    jobUseEn: 'Used to flatten 28×28 grayscale images into 784-feature vectors, combine train batches with `vstack`, and attach new engineered feature columns with `hstack`.',
    jobUseHi: '28×28 image ko 784 features mein flatten karne, training batches ko `vstack` karne aur naye feature columns ko `hstack` karne mein use hota hai.',
    mcq1Question: 'What does `-1` mean inside `arr.reshape(-1, 2)`?',
    mcq1Correct: 'Automatically calculate the number of rows so total elements stay the same.',
    mcq1Wrongs: [
      'Reverse the order of elements in the array.',
      'Delete the last row of the array.',
      'Fill empty slots with `-1`.',
    ],
    mcq1Explain: 'Passing `-1` tells NumPy to infer that single unknown dimension from `arr.size` and the other dimensions.',
    mcq2Question: 'Which function adds new rows from array `b` below array `a` (both having 4 columns)?',
    mcq2Correct: 'np.vstack([a, b])',
    mcq2Wrongs: ['np.hstack([a, b])', 'np.split(a, b)', 'np.dot(a, b)'],
    mcq2Explain: '`np.vstack` (vertical stack) stacks arrays row-wise along `axis=0`.',
    realWorldScenario:
      'You received January sales `(31, 5)` and February sales `(28, 5)` as two separate arrays. Use `np.vstack([jan, feb])` to combine them into one `(59, 5)` dataset.',
    interviewQ1: 'What is the difference between `.ravel()` and `.flatten()` in NumPy?',
    interviewA1:
      'Both convert a multi-dimensional array into 1D, but `.ravel()` returns a memory-efficient view whenever possible, whereas `.flatten()` always returns an independent copy.',
    interviewQ2: 'Why is `X.reshape(-1, 1)` so common before calling `model.fit(X, y)` in Scikit-Learn?',
    interviewA2:
      'Scikit-Learn expects `X` to be a 2D array of shape `(n_samples, n_features)`. When you have a single feature in a 1D array `(n_samples,)`, `.reshape(-1, 1)` adds the required second axis.',
  },
  {
    id: 167,
    modNum: 16,
    modTitle: 'NumPy for Numerical Computing',
    topicNumInMod: 11,
    title: 'NumPy Practical Exercises',
    subtitle: 'COMBINING CLEANING, NORMALIZATION, AND METRICS IN ONE MINI-PIPELINE',
    coreEn:
      'Real NumPy workflows chain array creation, boolean cleaning, broadcasting normalization (z-score or min-max), and axis-wise aggregation into a clean, loop-free numerical pipeline.',
    coreHi:
      'Real NumPy projects mein hum array creation, boolean cleaning, broadcasting se normalization (z-score / min-max) aur axis-wise aggregation ko jodkar ek clean, loop-free pipeline banate hain.',
    analogyTitle: 'Car Wash Assembly Line',
    analogyEn:
      'A dirty car enters step 1 (remove mud = filter invalid values), step 2 (soap & rinse = normalize scale), and step 3 (final inspection = compute summary KPIs). Every stage hands clean output to the next.',
    analogyHi:
      'Car wash line mein pehle kachra hataya jaata hai (invalid values filter), phir soap-rinse hota hai (normalization), aur aakhir mein inspection (KPI summary). Har step agle ko clean output deta hai.',
    steps: [
      {
        title: 'Inspect Raw Array',
        en: 'Verify `.shape`, `.dtype`, and check for invalid negative or `NaN` entries.',
        hi: 'Raw array ka `.shape`, `.dtype`, aur invalid ya `NaN` values check karein.',
      },
      {
        title: 'Clean with Boolean Mask / `np.where`',
        en: 'Replace faulty values (e.g., negative prices or sensor spikes) cleanly without loops.',
        hi: 'Bina loop ke `np.where` ya boolean mask se galat values ko saaf karein.',
      },
      {
        title: 'Standardize via Broadcasting',
        en: 'Scale every column using `(X - X.mean(axis=0)) / X.std(axis=0)`.',
        hi: 'Broadcasting se har column ko `(X - X.mean(axis=0)) / X.std(axis=0)` karke standardize karein.',
      },
      {
        title: 'Report Final Metrics',
        en: 'Summarize store totals, top performers (`argmax`), and verify zero `NaN`s remain.',
        hi: 'Store totals, top performers (`argmax`) nikalein aur verify karein ki koi `NaN` nahi bacha.',
      },
    ],
    codeLabel: 'PYTHON • END-TO-END NUMPY MINI-PROJECT',
    code: `import numpy as np

# Rows = 3 stores, Cols = [Mon, Tue, Wed] sales (with one -50 glitch)
raw = np.array([
    [200, -50, 260],
    [300, 320, 310],
    [150, 180, 170]
], dtype=float)

clean = np.where(raw < 0, np.nan, raw)
col_means = np.nanmean(clean, axis=0)
filled = np.where(np.isnan(clean), col_means, clean)

store_totals = filled.sum(axis=1)
best_store = np.argmax(store_totals)
print("Filled:\\n", filled)
print("Store totals:", store_totals)
print("Top store index:", best_store)`,
    codeOutput: `Filled:
 [[200. 250. 260.]
 [300. 320. 310.]
 [150. 180. 170.]]
Store totals: [710. 930. 500.]
Top store index: 1`,
    codeCaptionEn: 'The `-50` glitch was replaced by Tuesday’s valid mean `250.0` via broadcasting, then totals were ranked.',
    codeCaptionHi: '`-50` glitch ko Tuesday ke valid average `250.0` se broadcasting ke zariye replace kiya gaya, phir totals rank kiye gaye.',
    tableTitle: 'NumPy Mini-Pipeline Stages',
    tableHeaders: ['Stage', 'NumPy Technique Used', 'Result'],
    tableRows: [
      ['1. Glitch Detection', 'np.where(raw < 0, np.nan, raw)', 'Flags -50 as NaN'],
      ['2. Imputation', 'np.nanmean(clean, axis=0)', 'Tuesday mean = 250.0'],
      ['3. Broadcasting Fill', 'np.where(np.isnan(clean), col_means, clean)', 'Clean 3×3 matrix'],
      ['4. Ranking', 'filled.sum(axis=1) & np.argmax()', 'Store 1 wins (930.0)'],
    ],
    tableNoteEn: 'Notice how broadcasting, `nanmean`, `np.where`, and `argmax` work together with zero `for` loops.',
    tableNoteHi: 'Dekhiye kaise broadcasting, `nanmean`, `np.where`, aur `argmax` milkar bina ek bhi `for` loop ke poora kaam kar dete hain.',
    mistakeEn: 'Computing column means *before* replacing `-50` glitches, which drags the Tuesday average down and corrupts the imputed value.',
    mistakeHi: '`-50` glitch ko `NaN` banane se pehle hi average nikal lena, jisse Tuesday ka mean galat ho jaata hai.',
    proHabitEn: 'Always convert invalid sentinels (`-50`, `-999`) to `np.nan` first, then compute `nanmean`/`nanmedian`, then verify `np.isnan(filled).sum() == 0`.',
    proHabitHi: 'Pehle invalid numbers (`-50`, `-999`) ko `np.nan` banayein, phir `nanmean` nikalein, aur end mein `np.isnan(filled).sum() == 0` check karein.',
    jobUseEn: 'This exact pattern is how data scientists preprocess numerical sensor matrices and feature tables before feeding them into machine learning models.',
    jobUseHi: 'Bilkul yahi pattern data scientists ML model mein data bhejne se pehle sensor matrices aur numerical tables ko clean karne ke liye use karte hain.',
    mcq1Question: 'In the mini-pipeline above, why did we convert `-50` to `np.nan` before calling `np.nanmean()`?',
    mcq1Correct: 'So the invalid `-50` glitch does not distort the column average.',
    mcq1Wrongs: [
      'Because NumPy cannot store negative numbers.',
      'To delete the entire row permanently.',
      'Because `np.nanmean` only works on strings.',
    ],
    mcq1Explain: 'Marking invalid values as `np.nan` lets `np.nanmean()` compute the true average of valid readings only.',
    mcq2Question: 'Which expression checks that zero `NaN` values remain in an array named `filled`?',
    mcq2Correct: 'np.isnan(filled).sum() == 0',
    mcq2Wrongs: ['filled == np.nan', 'filled.size == 0', 'np.zeros(filled)'],
    mcq2Explain: 'Because `NaN != NaN` in floating-point math, `np.isnan(filled).sum()` is the reliable way to count remaining missing values.',
    realWorldScenario:
      'You receive a 500×10 raw numerical matrix from factory sensors containing occasional `-999` error codes. You must clean them with column medians and standardize every column.',
    interviewQ1: 'How do you standardize (z-score normalize) every column of a 2D NumPy array `X` in one line?',
    interviewA1:
      'Use `X_scaled = (X - X.mean(axis=0)) / X.std(axis=0)`. Broadcasting subtracts each column’s mean and divides by each column’s standard deviation.',
    interviewQ2: 'Why should you never check for missing values with `arr == np.nan` in Python/NumPy?',
    interviewA2:
      'By IEEE floating-point rules, `np.nan == np.nan` always evaluates to `False`. Always use `np.isnan(arr)` instead.',
  },
  // =========================================================================
  // MODULE 17: Pandas for Data Science (IDs 168–182)
  // =========================================================================
  {
    id: 168,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 1,
    title: 'What Is Pandas?',
    subtitle: 'PROGRAMMABLE SUPER-SPREADSHEETS IN PYTHON FOR REAL-WORLD TABLES',
    coreEn:
      'Pandas is Python’s go-to library for tabular data (rows and columns with names, mixed types like text, dates, and numbers) — think of Excel with Python automation and million-row speed.',
    coreHi:
      'Pandas Python ki sabse popular library hai tabular data (naam wale rows aur columns, jisme text, dates aur numbers saath hon) ke liye — ise Python-powered super-Excel samajhiye jo lakho rows par tez chalta hai.',
    analogyTitle: 'Manual Register vs Automated Super-Spreadsheet',
    analogyEn:
      'In Excel, cleaning a 500,000-row monthly sales sheet takes dozens of manual clicks and freezes your laptop. With Pandas, you write 10 lines of Python once and re-run them on every new month’s file in 1 second.',
    analogyHi:
      'Excel mein 5 lakh rows ki monthly sheet clean karne mein baar-baar clicks aur hang hone ka dar rehta hai. Pandas mein aap ek baar 10 line Python likhte hain aur har mahine ki nayi file 1 second mein clean ho jaati hai.',
    steps: [
      {
        title: 'Import Pandas',
        en: 'Start every notebook with the standard alias `import pandas as pd`.',
        hi: 'Har notebook ya script ki shuruat standard shortcut `import pandas as pd` se karein.',
      },
      {
        title: 'Load Tabular Data',
        en: 'Bring CSV, Excel, JSON, or SQL tables straight into a Pandas `DataFrame`.',
        hi: 'CSV, Excel, JSON ya SQL tables ko seedha Pandas `DataFrame` mein load karein.',
      },
      {
        title: 'Clean & Transform Repeatably',
        en: 'Filter rows, fix missing values, and group metrics with reproducible code instead of manual clicks.',
        hi: 'Manual clicks ke bajaye reproducible code se rows filter karein, missing values theek karein aur summaries banayein.',
      },
      {
        title: 'Export or Feed ML Models',
        en: 'Save the clean table back to CSV/Excel or pass it directly to charts and machine learning.',
        hi: 'Saaf table ko CSV/Excel mein save karein ya seedha charts aur ML models mein bhejein.',
      },
    ],
    codeLabel: 'PYTHON • FIRST PANDAS DATAFRAME',
    code: `import pandas as pd

df = pd.DataFrame({
    "City": ["Delhi", "Mumbai", "Pune"],
    "Orders": [120, 185, 95]
})
print(df)
print("Total orders:", df["Orders"].sum())`,
    codeOutput: `     City  Orders
0   Delhi     120
1  Mumbai     185
2    Pune      95
Total orders: 400`,
    codeCaptionEn: 'Unlike NumPy arrays, a Pandas DataFrame neatly mixes text (`City`) and integers (`Orders`) with named columns.',
    codeCaptionHi: 'NumPy array se alag, Pandas DataFrame mein text (`City`) aur numbers (`Orders`) column names ke saath aaram se rehte hain.',
    tableTitle: 'Excel vs NumPy vs Pandas',
    tableHeaders: ['Tool', 'Best For', 'Mixed Column Types?'],
    tableRows: [
      ['Excel', 'Small manual sheets & quick visual checks', 'Yes (manual UI)'],
      ['NumPy', 'Pure numerical math, matrices, tensors', 'No (single dtype)'],
      ['Pandas', 'Cleaning, joining & analyzing labeled tables', 'Yes (per-column dtype)'],
    ],
    tableNoteEn: 'Pandas is built right on top of NumPy, giving you named labels plus fast vectorized column math.',
    tableNoteHi: 'Pandas andar se NumPy ke upar bana hai, isliye ismein column labels aur fast vectorized math dono milte hain.',
    mistakeEn: 'Trying to use Pandas for everything including heavy 3D image math, or manually editing CSV files in Excel before loading them into Python.',
    mistakeHi: 'Python mein load karne se pehle raw CSV file ko Excel mein manually edit kar dena — isse workflow reproducible nahi rehta.',
    proHabitEn: 'Keep raw files untouched and put every cleaning step in Pandas code so anyone on your team can re-run it identically.',
    proHabitHi: 'Raw data file ko kabhi haath se na badlein; har cleaning step Pandas code mein likhein taaki pura process repeatable rahe.',
    jobUseEn: 'Data analysts and data scientists spend 60–70% of their day in Pandas cleaning business datasets, joining tables, and preparing ML features.',
    jobUseHi: 'Data analysts aur data scientists apna 60–70% samay Pandas mein business data clean karne, tables jodne aur ML features banane mein bitate hain.',
    mcq1Question: 'What makes Pandas better suited than pure NumPy for a customer orders table with names, dates, and prices?',
    mcq1Correct: 'Pandas supports labeled columns with different data types (text, dates, numbers) in one table.',
    mcq1Wrongs: [
      'Pandas does not use Python at all.',
      'NumPy cannot store integers.',
      'Pandas only works with single-column lists.',
    ],
    mcq1Explain: 'Each column in a Pandas DataFrame can have its own dtype while sharing a clean row index.',
    mcq2Question: 'What is the universal community convention for importing Pandas in Python?',
    mcq2Correct: 'import pandas as pd',
    mcq2Wrongs: ['import pandas as np', 'import pd as pandas', 'from excel import pandas'],
    mcq2Explain: 'Nearly all documentation, tutorials, and production codebases alias Pandas as `pd`.',
    realWorldScenario:
      'Every Monday morning your manager sends a 200,000-row raw sales CSV. You replace 45 minutes of manual Excel cleanup with a 15-line Pandas script that runs in 2 seconds.',
    interviewQ1: 'How does Pandas relate to NumPy under the hood?',
    interviewA1:
      'Pandas is built on top of NumPy arrays (and increasingly Apache Arrow), adding labeled row/column indices, heterogeneous column types, missing-data handling, and SQL-like group/join operations.',
    interviewQ2: 'When would you choose Pandas over Excel?',
    interviewA2:
      'Whenever datasets grow large (hundreds of thousands of rows), require repeatable automated cleaning pipelines, need version control, or feed directly into Python ML/visualization libraries.',
  },
  {
    id: 169,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 2,
    title: 'Series and DataFrames',
    subtitle: 'THE TWO CORE BUILDING BLOCKS OF EVERY PANDAS WORKFLOW',
    coreEn:
      'A `Series` is a single labeled 1D column (values + index), while a `DataFrame` is a full 2D table made by combining multiple Series side by side sharing the same row index.',
    coreHi:
      '`Series` ek single labeled 1D column hai (values + index), jabki `DataFrame` ek poori 2D table hai jo ek hi row index share karne wali kai Series ko milakar banti hai.',
    analogyTitle: 'Single Menu Column vs Full Restaurant Menu Card',
    analogyEn:
      'A list of dish prices alone (`[120, 250, 90]`) with dish names as labels is a `Series`. The full menu table showing Dish, Category, Price, and Rating side by side is a `DataFrame`.',
    analogyHi:
      'Sirf dishes ke prices ki ek labeled list (`Series`) hai, jabki poora menu table jisme Dish, Category, Price aur Rating saath-saath hon woh ek `DataFrame` hai.',
    steps: [
      {
        title: 'Create a 1D Series',
        en: 'Pass a list (and optional custom `index`) to `pd.Series()` for one labeled column.',
        hi: 'Ek labeled column banane ke liye `pd.Series()` mein list aur optional custom `index` pass karein.',
      },
      {
        title: 'Build a 2D DataFrame',
        en: 'Pass a Python dictionary of `{col_name: list_of_values}` into `pd.DataFrame()`.',
        hi: '`pd.DataFrame()` mein `{column_name: values_list}` dictionary pass karke 2D table banayein.',
      },
      {
        title: 'Notice Single vs Double Brackets',
        en: '`df["Price"]` returns a 1D `Series`, while `df[["Price"]]` returns a 2D `DataFrame`.',
        hi: '`df["Price"]` 1D `Series` deta hai, jabki double bracket `df[["Price"]]` 2D `DataFrame` deta hai.',
      },
      {
        title: 'Inspect `.index`, `.columns`, and `.dtypes`',
        en: 'Check row labels, column names, and each column’s data type before analyzing.',
        hi: 'Analysis se pehle `.index`, `.columns`, aur `.dtypes` check karke table ka structure samjhein.',
      },
    ],
    codeLabel: 'PYTHON • SERIES VS DATAFRAME',
    code: `import pandas as pd

prices = pd.Series([120, 250, 90], index=["Tea", "Burger", "Fries"], name="Price")
menu = pd.DataFrame({
    "Item": ["Tea", "Burger", "Fries"],
    "Price": [120, 250, 90]
})
print(type(menu["Price"]).__name__, "->", menu["Price"].tolist())
print(type(menu[["Price"]]).__name__, "shape ->", menu[["Price"]].shape)`,
    codeOutput: `Series -> [120, 250, 90]
DataFrame shape -> (3, 1)`,
    codeCaptionEn: 'Single brackets return a 1D Series; double brackets return a 2D DataFrame.',
    codeCaptionHi: 'Single brackets se 1D Series aur double brackets se 2D DataFrame milta hai.',
    tableTitle: 'Series vs DataFrame at a Glance',
    tableHeaders: ['Property', 'pd.Series', 'pd.DataFrame'],
    tableRows: [
      ['Dimensions', '1D (single column)', '2D (rows × columns)'],
      ['Structure', 'Index + 1 value array', 'Index + multiple named Series'],
      ['Data Types', 'One dtype for the Series', 'Each column can have its own dtype'],
      ['How Extracted', 'df["col"]', 'df[["col1", "col2"]]'],
    ],
    tableNoteEn: 'Every column of a DataFrame is literally a Pandas Series under the hood.',
    tableNoteHi: 'DataFrame ka har ek column andar se ek Pandas Series hi hota hai.',
    mistakeEn: 'Passing a 1D Series `df["Age"]` to a Scikit-Learn model or scaler that expects a 2D DataFrame `df[["Age"]]`.',
    mistakeHi: 'Scikit-Learn model ko 2D DataFrame `df[["Age"]]` ke bajaye 1D Series `df["Age"]` de dena.',
    proHabitEn: 'Check `type(obj)` and `.shape` when chaining operations so you always know whether you hold a Series or a DataFrame.',
    proHabitHi: 'Operations chain karte waqt `type(obj)` aur `.shape` check karein taaki hamesha pata rahe Series hai ya DataFrame.',
    jobUseEn: 'In ML pipelines, input features `X` are always a 2D `DataFrame` while the target variable `y` is usually a 1D `Series`.',
    jobUseHi: 'ML projects mein input features `X` hamesha 2D `DataFrame` hota hai aur target `y` aam taur par 1D `Series` hota hai.',
    mcq1Question: 'What does `df["Salary"]` return compared to `df[["Salary"]]`?',
    mcq1Correct: '`df["Salary"]` returns a 1D Series; `df[["Salary"]]` returns a 2D DataFrame.',
    mcq1Wrongs: [
      'Both return a Python dictionary.',
      '`df["Salary"]` returns a 2D DataFrame; `df[["Salary"]]` raises an error.',
      'Both return a raw NumPy scalar.',
    ],
    mcq1Explain: 'Passing a single column name extracts a Series; passing a list of column names always returns a DataFrame.',
    mcq2Question: 'What is a Pandas DataFrame conceptually made of?',
    mcq2Correct: 'Multiple Pandas Series aligned along a shared row index.',
    mcq2Wrongs: [
      'A single unindexed text string.',
      'Only integer columns with no column names.',
      'An image pixel array without labels.',
    ],
    mcq2Explain: 'Each named column in a DataFrame is a Series sharing the same row index.',
    realWorldScenario:
      'You are splitting a housing table into `X = df[["Area", "Rooms"]]` (DataFrame) and `y = df["Price"]` (Series) for linear regression.',
    interviewQ1: 'Explain the difference between a Pandas `Series` and a `DataFrame`.',
    interviewA1:
      'A `Series` is a 1D labeled array holding a single column of homogeneous type, whereas a `DataFrame` is a 2D labeled table of columns (each a Series) that can hold different data types.',
    interviewQ2: 'Why is the Pandas `index` useful beyond just row numbers `0, 1, 2`?',
    interviewA2:
      'An index enables fast label-based lookups (like dates or customer IDs) and automatically aligns data when adding or combining two Series or DataFrames.',
  },
  {
    id: 170,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 3,
    title: 'Reading CSV and Excel Files',
    subtitle: 'INGESTING REAL BUSINESS FILES CLEANLY WITH READ_CSV AND READ_EXCEL',
    coreEn:
      'Pandas loads real-world files in one line using `pd.read_csv()` and `pd.read_excel()`, with handy options for separators, sheet names, missing-value markers, and date parsing.',
    coreHi:
      'Pandas `pd.read_csv()` aur `pd.read_excel()` se ek hi line mein real files load karta hai — aur separator, sheet name, encoding aur dates parse karne ke ready options deta hai.',
    analogyTitle: 'Opening a Parcel with the Right Box Cutter Settings',
    analogyEn:
      'Not every delivery box opens the same way. Some CSVs use semicolons `;` instead of commas, some Excel workbooks have 4 tabs (`sheet_name="Q4"`), and some files have 2 title rows at the top (`skiprows=2`).',
    analogyHi:
      'Har file ek jaisi nahi hoti. Kuch CSVs mein comma ki jagah semicolon `;` hota hai, Excel mein alag tabs (`sheet_name="Q4"`) hote hain, aur kuch files mein upar 2 title rows (`skiprows=2`) hoti hain.',
    steps: [
      {
        title: 'Check File Path & Type',
        en: 'Use `pd.read_csv()` for `.csv`/`.tsv` files and `pd.read_excel()` (with `openpyxl`) for `.xlsx` files.',
        hi: '`.csv`/`.tsv` ke liye `pd.read_csv()` aur `.xlsx` ke liye `pd.read_excel()` use karein.',
      },
      {
        title: 'Specify Key Parsing Options',
        en: 'Pass `sep`, `sheet_name`, `skiprows`, `usecols`, or `parse_dates` so messy headers do not break columns.',
        hi: 'Zaroorat ke hisaab se `sep`, `sheet_name`, `skiprows`, `usecols`, ya `parse_dates` pass karein.',
      },
      {
        title: 'Standardize Missing Markers',
        en: 'Pass `na_values=["NA", "-", "N/A"]` so text placeholders become true `NaN` on load.',
        hi: '`na_values=["NA", "-", "N/A"]` dein taaki load hote hi fake placeholders asli `NaN` ban jayein.',
      },
      {
        title: 'Verify Loaded Shape Immediately',
        en: 'Print `df.shape` and `df.head(3)` right after loading to confirm headers and rows parsed properly.',
        hi: 'Load hote hi `df.shape` aur `df.head(3)` check karein ki headers aur rows sahi aaye hain.',
      },
    ],
    codeLabel: 'PYTHON • READING CSV WITH CLEAN OPTIONS',
    code: `import io
import pandas as pd

csv_text = """order_id;city;amount
101;Delhi;450
102;Mumbai;NA
103;Pune;320"""

df = pd.read_csv(io.StringIO(csv_text), sep=";", na_values=["NA"])
print(df)
print("Dtypes:\\n", df.dtypes)`,
    codeOutput: `   order_id    city  amount
0       101   Delhi   450.0
1       102  Mumbai     NaN
2       103    Pune   320.0
Dtypes:
 order_id      int64
city         object
amount      float64
dtype: object`,
    codeCaptionEn: 'Passing `sep=";"` and `na_values=["NA"]` turned a messy semicolon CSV into a clean numeric table.',
    codeCaptionHi: '`sep=";"` aur `na_values=["NA"]` dene se semicolon wali messy file ekdam clean numeric table ban gayi.',
    tableTitle: 'Essential `read_csv` & `read_excel` Parameters',
    tableHeaders: ['Parameter', 'What It Solves', 'Example'],
    tableRows: [
      ['sep', 'Non-comma delimiters', 'sep=";" or sep="\\t"'],
      ['sheet_name', 'Picking a specific Excel tab', 'sheet_name="Sales_2025"'],
      ['parse_dates', 'Auto-converting date strings', 'parse_dates=["order_date"]'],
      ['usecols', 'Loading only needed columns (saves RAM)', 'usecols=["id", "price"]'],
    ],
    tableNoteEn: 'For huge multi-GB CSV files, pass `chunksize=100_000` to read and process in memory-safe batches.',
    tableNoteHi: 'Bahut badi multi-GB CSV files ke liye `chunksize=100_000` use karein taaki RAM full na ho.',
    mistakeEn: 'Ignoring `dtype` when loading zip codes or phone numbers — Pandas strips leading zeros (`00712` becomes `712`) unless you pass `dtype={"zip": str}`.',
    mistakeHi: 'Pin code ya phone number load karte waqt `dtype=str` na dena — jisse leading zeros (`00712` -> `712`) gayab ho jaate hain.',
    proHabitEn: 'Always pass `dtype` for ID/zip columns, `parse_dates` for date columns, and `na_values` for custom blanks right inside `read_csv()`.',
    proHabitHi: 'ID/zip columns ke liye `dtype=str`, dates ke liye `parse_dates`, aur custom blanks ke liye `na_values` load karte waqt hi set karein.',
    jobUseEn: 'Every analytics report starts by ingesting vendor CSV dumps, finance Excel workbooks, or exported CRM sheets reliably.',
    jobUseHi: 'Har analytics project ki shuruat vendor CSV files, finance Excel sheets ya CRM exports ko bina error load karne se hi hoti hai.',
    mcq1Question: 'Which `pd.read_csv()` parameter prevents a 6-digit postal code like `"012345"` from losing its leading zero?',
    mcq1Correct: 'dtype={"postal_code": str}',
    mcq1Wrongs: ['skiprows=1', 'sep="0"', 'index_col=0'],
    mcq1Explain: 'Forcing the column to string (`str`) preserves exact characters including leading zeros.',
    mcq2Question: 'How do you load a specific tab named `"Q3_Revenue"` from an Excel workbook?',
    mcq2Correct: 'pd.read_excel("report.xlsx", sheet_name="Q3_Revenue")',
    mcq2Wrongs: [
      'pd.read_csv("report.xlsx", tab="Q3_Revenue")',
      'pd.read_excel("report.xlsx", sep="Q3_Revenue")',
      'pd.open_sheet("Q3_Revenue")',
    ],
    mcq2Explain: '`pd.read_excel()` accepts `sheet_name` as either a tab name string or 0-based tab index.',
    realWorldScenario:
      'A European supplier sends a 50 MB CSV separated by semicolons `;` with `"N/A"` for missing prices. You load only 4 required columns cleanly with `sep=";"`, `usecols`, and `na_values`.',
    interviewQ1: 'How would you read a 10 GB CSV file in Pandas on a laptop with 8 GB RAM?',
    interviewA1:
      'Use `chunksize` to iterate in batches, select only required columns with `usecols`, downcast numeric dtypes, or switch to Parquet / Polars / DuckDB for out-of-core processing.',
    interviewQ2: 'What happens if an Excel file has 3 sheets and you call `pd.read_excel("file.xlsx")` with no `sheet_name`?',
    interviewA2:
      'By default `sheet_name=0`, so Pandas loads only the very first sheet. Passing `sheet_name=None` loads all sheets into a dictionary of DataFrames.',
  },
  {
    id: 171,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 4,
    title: 'Inspecting Data with head(), info() and describe()',
    subtitle: 'YOUR 60-SECOND HEALTH CHECKUP FOR ANY NEW DATASET',
    coreEn:
      'Before writing any analysis, `head()` shows sample rows, `info()` reveals column types and missing counts, and `describe()` summarizes min, max, mean, and quartiles.',
    coreHi:
      'Koi bhi analysis shuru karne se pehle `head()` sample rows dikhata hai, `info()` column types aur missing counts batata hai, aur `describe()` min, max, mean aur quartiles ka summary deta hai.',
    analogyTitle: 'Doctor’s 3-Step Vitals Check Before Prescribing Medicine',
    analogyEn:
      'A doctor never prescribes medicine without checking your appearance (`head()`), blood report (`info()`), and vitals like BP/temperature (`describe()`). Never model a dataset before running these 3 checks!',
    analogyHi:
      'Doctor dawai dene se pehle patient ko dekhta hai (`head()`), blood report check karta hai (`info()`), aur BP/temp napta hai (`describe()`). Data Science mein bhi in 3 checks ke bina aage nahi badhte!',
    steps: [
      {
        title: 'Preview Rows with `head()` / `tail()`',
        en: 'Inspect the first 5 and last 5 rows (or `df.sample(5)`) to spot weird headers or footer totals.',
        hi: 'Pehli 5 (`head()`), aakhiri 5 (`tail()`) ya random 5 (`sample(5)`) rows dekhein taaki footer totals ya gande headers pakde jayein.',
      },
      {
        title: 'Audit Schema with `info()`',
        en: 'Check total row count, non-null counts per column, and whether numbers accidentally loaded as `object` (text).',
        hi: '`info()` se total rows, non-null count aur check karein ki koi number galti se `object` (text) toh nahi ban gaya.',
      },
      {
        title: 'Check Distributions with `describe()`',
        en: 'Look for impossible minimums (e.g., `Age = -5`), extreme maximums, or suspicious averages.',
        hi: '`describe()` mein impossible min (`Age = -5`), extreme max ya ajeeb average pakdein.',
      },
      {
        title: 'Inspect Categorical Summaries',
        en: 'Run `df.describe(include="object")` or `.value_counts()` to check unique text categories and typos.',
        hi: 'Text columns ke liye `df.describe(include="object")` ya `.value_counts()` se unique categories aur typos check karein.',
      },
    ],
    codeLabel: 'PYTHON • 3-COMMAND DATASET HEALTH CHECK',
    code: `import pandas as pd

df = pd.DataFrame({
    "name": ["Asha", "Ravi", "Neha", "Kabir"],
    "age": [25, 32, None, 29],
    "salary": [50000, 75000, 62000, 58000]
})
print(df.head(2))
print("\\nSummary:")
print(df.describe().round(1))`,
    codeOutput: `   name   age  salary
0  Asha  25.0   50000
1  Ravi  32.0   75000

Summary:
        age   salary
count   3.0      4.0
mean   28.7  61250.0
std     3.5   10436.3
min    25.0  50000.0
25%    27.0  56000.0
50%    29.0  60000.0
75%    30.5  65250.0
max    32.0  75000.0`,
    codeCaptionEn: 'Notice `age` has `count = 3.0` while `salary` has `4.0` — immediately alerting you to 1 missing age!',
    codeCaptionHi: 'Dekhiye `age` ka `count = 3.0` aur `salary` ka `4.0` hai — turant pata chal gaya ki 1 age missing hai!',
    tableTitle: 'What Each Inspection Method Catches',
    tableHeaders: ['Method', 'What It Shows', 'Hidden Bug It Catches'],
    tableRows: [
      ['df.head() / df.tail()', 'First/last 5 rows', 'Summary "Total" row stuck at bottom of CSV'],
      ['df.info()', 'Columns, dtypes, non-null counts', 'Price loaded as text (`"$500"`) or nulls'],
      ['df.describe()', 'Count, mean, std, min, 25/50/75%, max', 'Negative ages, 99999 outliers, skewed data'],
      ['df.shape', '(rows, columns) tuple', 'Unexpectedly empty or truncated file'],
    ],
    tableNoteEn: '`df.describe()` only shows numeric columns by default; add `include="all"` to include text columns too.',
    tableNoteHi: '`df.describe()` default mein sirf numeric columns dikhata hai; text columns ke liye `include="all"` pass karein.',
    mistakeEn: 'Jumping straight to plotting or training a model without running `df.info()`, then wondering why `df["price"].mean()` crashes on string values like `"$1,200"`.',
    mistakeHi: '`df.info()` chalaye bina seedha chart ya model banana, aur phir error aana kyunki `"$1,200"` string format mein tha.',
    proHabitEn: 'Make `df.shape`, `df.head()`, `df.info()`, and `df.describe()` your automatic first cell in every new notebook.',
    proHabitHi: 'Har naye notebook ke pehle cell mein `df.shape`, `df.head()`, `df.info()`, aur `df.describe()` chalane ki aadat daalein.',
    jobUseEn: 'Used in the first 2 minutes of every client engagement, Kaggle competition, and production data-quality audit.',
    jobUseHi: 'Har client project, Kaggle competition aur production data audit ke pehle 2 minute mein yahi checks chalaye jaate hain.',
    mcq1Question: 'Which Pandas method tells you both each column’s data type and how many non-null values it has?',
    mcq1Correct: 'df.info()',
    mcq1Wrongs: ['df.head()', 'df.tail()', 'df.columns'],
    mcq1Explain: '`df.info()` displays column names, non-null counts, dtypes, and memory usage in one compact report.',
    mcq2Question: 'In `df.describe()`, what does the `50%` row represent?',
    mcq2Correct: 'The median (middle value) of that column.',
    mcq2Wrongs: [
      'Half of the column’s maximum value.',
      'The percentage of missing rows.',
      'The first 50 rows of the DataFrame.',
    ],
    mcq2Explain: 'The 50th percentile is the median, sitting halfway between the 25th and 75th percentiles.',
    realWorldScenario:
      'You load a customer table and `df.info()` shows `salary` is `object` instead of `float64` because a few rows contain `"₹50,000"`. Catching it early saves hours of debugging.',
    interviewQ1: 'What are the first 4 commands you run when handed an unfamiliar dataset in Pandas?',
    interviewA1:
      '`df.shape` (size), `df.head()`/`df.sample(5)` (visual sanity), `df.info()` (dtypes and nulls), and `df.describe(include="all")` (ranges, outliers, and cardinality).',
    interviewQ2: 'Why is `df.tail()` just as important as `df.head()`?',
    interviewA2:
      'Many business exports from Excel or ERP systems include blank rows, footnotes, or a "Grand Total" row at the very bottom that silently corrupts aggregations if unnoticed.',
  },
  {
    id: 172,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 5,
    title: 'Selecting Rows and Columns',
    subtitle: 'MASTERING .LOC[] (LABELS) AND .ILOC[] (INTEGER POSITIONS)',
    coreEn:
      'Pandas gives you `.loc[row_label, col_name]` for selecting by names/labels and `.iloc[row_pos, col_pos]` for selecting by 0-based integer positions.',
    coreHi:
      'Pandas mein naam/label se data nikalne ke liye `.loc[row_label, col_name]` aur 0-based number position se nikalne ke liye `.iloc[row_pos, col_pos]` use hota hai.',
    analogyTitle: 'Finding a Book by Title vs by Shelf Number',
    analogyEn:
      '`.loc` is asking the librarian for `"Row labeled \'Ravi\', Column \'Salary\'"` (by name). `.iloc` is saying `"Give me the 2nd row, 3rd column"` (by position number).',
    analogyHi:
      '`.loc` ka matlab naam se maangna (`"Ravi wali row, Salary wala column"`). `.iloc` ka matlab position number se maangna (`"2nd row, 3rd column"`).',
    steps: [
      {
        title: 'Pick Columns by Name',
        en: 'Use `df["col"]` for one Series or `df[["col1", "col2"]]` for a subset DataFrame.',
        hi: 'Ek column ke liye `df["col"]` aur kai columns ke liye `df[["col1", "col2"]]` likhein.',
      },
      {
        title: 'Use `.loc[]` for Labels',
        en: 'Select rows and columns by exact label names; note `.loc[0:2]` INCLUDES stop label `2`!',
        hi: 'Exact label naam se select karne ke liye `.loc[]` use karein; dhyan dein `.loc[0:2]` mein `2` INCLUDE hota hai!',
      },
      {
        title: 'Use `.iloc[]` for Integer Positions',
        en: 'Select by 0-based position; like Python slicing, `.iloc[0:2]` EXCLUDES position `2`.',
        hi: '0-based position ke liye `.iloc[]` use karein; Python slicing ki tarah `.iloc[0:2]` mein `2` EXCLUDE hota hai.',
      },
      {
        title: 'Update Safely Without Chained Indexing',
        en: 'Write `df.loc[row, col] = val` in one step instead of `df[col][row] = val`.',
        hi: '`df[col][row] = val` ki jagah hamesha single step `df.loc[row, col] = val` se update karein.',
      },
    ],
    codeLabel: 'PYTHON • .LOC VS .ILOC SIDE BY SIDE',
    code: `import pandas as pd

df = pd.DataFrame(
    {"dept": ["IT", "HR", "Sales"], "pay": [80, 60, 70]},
    index=["E1", "E2", "E3"]
)
print("loc label:", df.loc["E2", "pay"])
print("iloc pos:", df.iloc[0:2, 0].tolist())`,
    codeOutput: `loc label: 60
iloc pos: ['IT', 'HR']`,
    codeCaptionEn: '`.loc["E2", "pay"]` uses exact labels; `.iloc[0:2, 0]` grabs positions 0 and 1 from column 0.',
    codeCaptionHi: '`.loc["E2", "pay"]` exact label use karta hai; `.iloc[0:2, 0]` position 0 aur 1 ko column 0 se nikalta hai.',
    tableTitle: '.loc vs .iloc Key Differences',
    tableHeaders: ['Feature', '.loc[rows, cols]', '.iloc[rows, cols]'],
    tableRows: [
      ['Lookup Type', 'Labels / names / boolean masks', '0-based integer positions only'],
      ['Slice End Behavior', 'Inclusive (`0:2` gives 0, 1, 2)', 'Exclusive (`0:2` gives 0, 1)'],
      ['Column Reference', 'Column names (`"pay"`)', 'Column index (`1`)'],
      ['Best Used For', 'Readable business logic & conditions', 'Positional splits (first 10 rows)'],
    ],
    tableNoteEn: 'Think of the `i` in `.iloc` as standing for **Integer** position.',
    tableNoteHi: 'Yaad rakhne ka aasan trick: `.iloc` mein `i` ka matlab **Integer** position hai.',
    mistakeEn: 'Using chained assignment like `df[df["dept"] == "IT"]["pay"] = 90`, which triggers `SettingWithCopyWarning` and may silently fail to update `df`.',
    mistakeHi: '`df[df["dept"] == "IT"]["pay"] = 90` jaisa chained assignment likhna, jisse `SettingWithCopyWarning` aati hai aur data update nahi hota.',
    proHabitEn: 'Always write updates with a single `.loc[row_condition, "col"] = new_value` call.',
    proHabitHi: 'Data update karte waqt hamesha ek single `.loc[row_condition, "col"] = new_value` use karein.',
    jobUseEn: 'Used constantly to extract specific cohorts, slice train/test splits by position, and update flagged anomalies cleanly.',
    jobUseHi: 'Specific customer groups nikalne, position se train/test split karne aur flagged values ko cleanly update karne mein roz use hota hai.',
    mcq1Question: 'What is the key difference between `df.loc[0:2]` and `df.iloc[0:2]` on a default-indexed DataFrame?',
    mcq1Correct: '`df.loc[0:2]` returns 3 rows (labels 0, 1, 2); `df.iloc[0:2]` returns 2 rows (positions 0, 1).',
    mcq1Wrongs: [
      'Both return the exact same 2 rows.',
      '`df.iloc[0:2]` selects columns instead of rows.',
      '`df.loc[0:2]` only works on string indices.',
    ],
    mcq1Explain: '`.loc` slicing is inclusive of both endpoints, whereas `.iloc` follows standard Python exclusive-stop slicing.',
    mcq2Question: 'Which syntax safely updates the `"pay"` column to `90` for rows where `"dept" == "IT"`?',
    mcq2Correct: 'df.loc[df["dept"] == "IT", "pay"] = 90',
    mcq2Wrongs: [
      'df[df["dept"] == "IT"]["pay"] = 90',
      'df.iloc["IT", "pay"] = 90',
      'df.update("IT", 90)',
    ],
    mcq2Explain: 'Single-step `.loc[condition, column] = value` modifies the DataFrame directly without chained-indexing issues.',
    realWorldScenario:
      'You need to extract rows 100 to 199 (by position) for a quick audit, and separately update the `"status"` column to `"VIP"` for all customers with `spend > 10000`.',
    interviewQ1: 'What causes Pandas’ `SettingWithCopyWarning` and how do you avoid it?',
    interviewA1:
      'It occurs when you chain two indexing operations (`df[cond]["col"] = val`), because Pandas cannot guarantee whether the first slice returned a view or a copy. Fix it by using single-step `df.loc[cond, "col"] = val` or explicit `.copy()`.',
    interviewQ2: 'When would you choose `.iloc` over `.loc`?',
    interviewA2:
      'Use `.iloc` when you want fixed positional slices regardless of index labels (e.g., first 80% of rows for a time-ordered train split), and `.loc` when selecting by meaningful labels or boolean masks.',
  },
  {
    id: 173,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 6,
    title: 'Filtering and Sorting Data',
    subtitle: 'FINDING EXACT SUBSETS WITH CONDITIONS, ISIN(), QUERY(), AND SORT_VALUES()',
    coreEn:
      'Filtering keeps only rows matching your rules (using boolean masks, `.isin()`, `.between()`, or `.query()`), while `.sort_values()` orders rows ascending or descending by one or more columns.',
    coreHi:
      'Filtering sirf unhi rows ko rakhta hai jo aapke rules match karti hain (boolean masks, `.isin()`, `.between()`, ya `.query()`), aur `.sort_values()` rows ko chhote se bade ya bade se chhote order mein jamata hai.',
    analogyTitle: 'Online Shopping Filters + "Sort by Price: Low to High"',
    analogyEn:
      'When shopping for shoes, ticking "Brand: Nike or Adidas" (`.isin()`) and "Price: ₹2000–₹5000" (`.between()`) is filtering; clicking "Sort by Rating: High to Low" is `.sort_values(ascending=False)`.',
    analogyHi:
      'Online shopping mein "Brand: Nike ya Adidas" (`.isin()`) aur "Price: 2000–5000" (`.between()`) tick karna filtering hai, aur "Rating: High to Low" choose karna `.sort_values(ascending=False)` hai.',
    steps: [
      {
        title: 'Filter Single or Multiple Rules',
        en: 'Combine conditions with `&` (AND) and `|` (OR), wrapping each condition in parentheses.',
        hi: 'Har condition ko brackets mein rakhkar `&` (AND) aur `|` (OR) se combine karein.',
      },
      {
        title: 'Simplify Lists with `.isin()`',
        en: 'Replace long OR chains with `df["city"].isin(["Delhi", "Pune"])`.',
        hi: 'Lambe OR chains ki jagah clean `df["city"].isin(["Delhi", "Pune"])` likhein.',
      },
      {
        title: 'Sort by One or More Columns',
        en: 'Call `df.sort_values(by=["city", "sales"], ascending=[True, False])`.',
        hi: '`df.sort_values(by=["city", "sales"], ascending=[True, False])` se multi-column sorting karein.',
      },
      {
        title: 'Grab Top-N with `.nlargest()`',
        en: 'Use `df.nlargest(5, "sales")` for a fast, readable Top-5 leaderboard.',
        hi: 'Top-5 leaderboard nikalne ke liye fast aur readable `df.nlargest(5, "sales")` use karein.',
      },
    ],
    codeLabel: 'PYTHON • FILTERING & SORTING SALES',
    code: `import pandas as pd

df = pd.DataFrame({
    "city": ["Delhi", "Pune", "Delhi", "Goa"],
    "sales": [400, 650, 900, 250]
})
top_metros = (
    df[df["city"].isin(["Delhi", "Pune"]) & (df["sales"] >= 500)]
    .sort_values("sales", ascending=False)
)
print(top_metros)`,
    codeOutput: `    city  sales
2  Delhi    900
1   Pune    650`,
    codeCaptionEn: 'Filtering kept Delhi/Pune orders ≥ 500, and `sort_values` ranked the highest sale first.',
    codeCaptionHi: 'Filter ne Delhi/Pune ke 500+ orders rakhe aur `sort_values` ne sabse bada sale upar rakha.',
    tableTitle: 'Clean Pandas Filtering & Sorting Helpers',
    tableHeaders: ['Method', 'Purpose', 'Example'],
    tableRows: [
      ['df[cond1 & cond2]', 'Multi-condition filter', 'df[(df.age > 20) & (df.city == "Pune")]'],
      ['.isin([...])', 'Match any value in a list', 'df[df["status"].isin(["Paid", "Shipped"])]'],
      ['.between(low, high)', 'Inclusive range filter', 'df[df["price"].between(100, 500)]'],
      ['.sort_values()', 'Order rows by column(s)', 'df.sort_values("sales", ascending=False)'],
    ],
    tableNoteEn: 'Remember `.sort_values()` returns a new sorted DataFrame by default — assign it back (`df = df.sort_values(...)`) to keep the order.',
    tableNoteHi: '`.sort_values()` default mein naya sorted DataFrame return karta hai — original ko update karne ke liye `df = df.sort_values(...)` likhein.',
    mistakeEn: 'Forgetting to assign the result of `df.sort_values("sales")` to a variable, or forgetting parentheses around `(df["a"] > 5) & (df["b"] < 10)`.',
    mistakeHi: '`df.sort_values("sales")` ko variable mein save na karna, ya `&` ke saath brackets bhool jana.',
    proHabitEn: 'Use `.isin()`, `.between()`, and `.query("city == \'Delhi\' and sales >= 500")` to keep complex filters crystal clear.',
    proHabitHi: 'Complex filters ko readable rakhne ke liye `.isin()`, `.between()`, aur `.query()` use karein.',
    jobUseEn: 'Used daily to build Top-10 customer leaderboards, filter active subscribers, and isolate fraud alerts above risk thresholds.',
    jobUseHi: 'Top-10 customers nikalne, active users filter karne aur high-risk fraud transactions chhantne mein roz use hota hai.',
    mcq1Question: 'Which expression cleanly filters rows where `status` is either `"Open"` or `"Pending"`?',
    mcq1Correct: 'df[df["status"].isin(["Open", "Pending"])]',
    mcq1Wrongs: [
      'df[df["status"] == ["Open", "Pending"]]',
      'df.sort_values(["Open", "Pending"])',
      'df["status"].between("Open", "Pending")',
    ],
    mcq1Explain: '`.isin(list)` checks membership cleanly against any number of allowed values.',
    mcq2Question: 'How do you get the top 3 rows with the highest `revenue` without sorting the entire DataFrame manually?',
    mcq2Correct: 'df.nlargest(3, "revenue")',
    mcq2Wrongs: ['df.head(3, "revenue")', 'df.max(3, "revenue")', 'df.top(3, "revenue")'],
    mcq2Explain: '`df.nlargest(n, col)` is both faster and more expressive for Top-N queries.',
    realWorldScenario:
      'Your marketing lead asks for the Top 10 highest-spending customers from Mumbai or Bengaluru who placed orders between ₹1,000 and ₹10,000.',
    interviewQ1: 'How do you sort a DataFrame by `department` ascending and `salary` descending at the same time?',
    interviewA1:
      'Pass lists to both arguments: `df.sort_values(by=["department", "salary"], ascending=[True, False])`.',
    interviewQ2: 'When is `df.query()` preferable to bracket boolean indexing?',
    interviewA2:
      'When filtering on 3+ conditions or inside method chains, `df.query("age > 25 and city in @target_cities")` is much more readable and avoids repeating `df[...]` everywhere.',
  },
  {
    id: 174,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 7,
    title: 'Creating and Renaming Columns',
    subtitle: 'ENGINEERING NEW FEATURES AND CLEANING MESSY COLUMN HEADERS',
    coreEn:
      'You can create new calculated columns with direct assignment (`df["total"] = df["qty"] * df["price"]`) or `.assign()`, and standardize messy headers with `.rename()` or string methods.',
    coreHi:
      'Aap `df["total"] = df["qty"] * df["price"]` ya `.assign()` se naye calculated columns bana sakte hain, aur `.rename()` se gande column names ko clean aur consistent kar sakte hain.',
    analogyTitle: 'Adding a "Total Price" Column to an Invoice Sheet',
    analogyEn:
      'Your raw bill has `"Qty"` and `"Unit Price"`, plus messy headers like `" Cust Name "`. You rename the headers neatly to `cust_name` and add a brand-new `line_total` column computed automatically for every row.',
    analogyHi:
      'Raw bill mein `"Qty"`, `"Unit Price"` aur ganda header `" Cust Name "` hota hai. Aap headers ko clean `cust_name` banate hain aur har row ke liye naya `line_total` column jod dete hain.',
    steps: [
      {
        title: 'Clean Messy Column Names',
        en: 'Strip spaces and convert headers to lowercase snake_case (`df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_")`).',
        hi: 'Spaces hatakar saare column names ko clean lowercase `snake_case` mein badlein.',
      },
      {
        title: 'Rename Specific Columns',
        en: 'Use `df = df.rename(columns={"old_name": "new_name"})` for targeted renames.',
        hi: 'Specific columns ka naam badalne ke liye `df.rename(columns={"old": "new"})` use karein.',
      },
      {
        title: 'Create Vectorized Columns',
        en: 'Compute ratios, margins, or flags directly: `df["profit"] = df["rev"] - df["cost"]`.',
        hi: 'Seedha vectorized formula likhkar naya column banayein: `df["profit"] = df["rev"] - df["cost"]`.',
      },
      {
        title: 'Drop Unneeded Columns Cleanly',
        en: 'Remove temporary or junk columns with `df = df.drop(columns=["temp_col"])`.',
        hi: 'Faltu ya temporary columns ko `df.drop(columns=["temp_col"])` se hata dein.',
      },
    ],
    codeLabel: 'PYTHON • RENAME & ENGINEER NEW COLUMNS',
    code: `import pandas as pd

df = pd.DataFrame({" Item ": ["Pen", "Book"], "Qty": [10, 3], "Price": [20, 150]})
df.columns = df.columns.str.strip().str.lower()
df = df.rename(columns={"qty": "quantity"})
df["revenue"] = df["quantity"] * df["price"]
print(df)`,
    codeOutput: `   item  quantity  price  revenue
0   Pen        10     20      200
1  Book         3    150      450`,
    codeCaptionEn: 'Stripping spaces, lowercasing headers, renaming `qty`, and computing `revenue` took just 3 clean lines.',
    codeCaptionHi: 'Spaces hatana, lowercase karna, `qty` rename karna aur `revenue` banana sirf 3 clean lines mein ho gaya.',
    tableTitle: 'Column Creation & Renaming Toolkit',
    tableHeaders: ['Operation', 'Clean Pandas Syntax'],
    tableRows: [
      ['New calculated column', 'df["margin"] = df["profit"] / df["revenue"]'],
      ['Conditional column', 'df["tier"] = np.where(df["spend"] > 500, "Gold", "Basic")'],
      ['Rename specific columns', 'df = df.rename(columns={"Amt": "amount"})'],
      ['Drop unwanted columns', 'df = df.drop(columns=["notes", "temp_id"])'],
    ],
    tableNoteEn: 'Using `df.assign(revenue=lambda d: d["quantity"] * d["price"])` lets you create columns smoothly inside method chains.',
    tableNoteHi: 'Method chaining ke andar naya column banane ke liye `df.assign(...)` bahut clean tarika hai.',
    mistakeEn: 'Trying to create a new column using dot notation (`df.revenue = ...`) — Python adds a broken attribute instead of a real DataFrame column!',
    mistakeHi: 'Dot notation (`df.revenue = ...`) se naya column banane ki koshish karna — isse asli column nahi banta, balki ek bug attribute ban jaata hai!',
    proHabitEn: 'Always use bracket notation `df["new_col"] = ...` when creating columns, and normalize all column names to `snake_case` right after loading.',
    proHabitHi: 'Naya column banate waqt hamesha `df["new_col"] = ...` use karein aur load karte hi saare headers `snake_case` mein kar lein.',
    jobUseEn: 'Feature engineering in ML — creating `price_per_sqft`, `days_since_last_order`, and `debt_to_income_ratio` — is built on this exact skill.',
    jobUseHi: 'ML feature engineering — jaise `price_per_sqft`, `days_since_last_order` aur `profit_margin` — bilkul isi skill se hoti hai.',
    mcq1Question: 'Why should you use `df["total"] = ...` instead of `df.total = ...` to create a new column?',
    mcq1Correct: '`df.total = ...` creates a Python object attribute instead of adding a new column to the DataFrame.',
    mcq1Wrongs: [
      'Dot notation only works for integer columns.',
      'Bracket notation is slower than dot notation.',
      'Pandas deletes the DataFrame if you use dot notation.',
    ],
    mcq1Explain: 'Dot notation can access existing columns without spaces, but cannot create new columns in Pandas.',
    mcq2Question: 'Which method removes the `"temp_id"` column from `df`?',
    mcq2Correct: 'df = df.drop(columns=["temp_id"])',
    mcq2Wrongs: [
      'df = df.remove("temp_id")',
      'df = df.rename(columns={"temp_id": None})',
      'df = df.delete("temp_id")',
    ],
    mcq2Explain: '`df.drop(columns=[...])` cleanly drops specified columns without needing to remember `axis=1`.',
    realWorldScenario:
      'An imported Excel sheet has headers `" Order ID "`, `"Unit Cost ($)"`, and `"Sale Price ($)"`. You normalize them to `snake_case` and add a `profit_pct` column.',
    interviewQ1: 'What is the advantage of `df.drop(columns=["col"])` over `df.drop("col", axis=1)`?',
    interviewA1:
      'Using `columns=[...]` is self-documenting and eliminates the risk of accidentally dropping a row when forgetting `axis=1`.',
    interviewQ2: 'When is `df.assign()` preferred over `df["new_col"] = ...`?',
    interviewA2:
      '`df.assign()` returns a new DataFrame without mutating the original in place, making it ideal for clean functional method chaining.',
  },
  {
    id: 175,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 8,
    title: 'Handling Missing Values',
    subtitle: 'DETECTING, DROPPING, OR IMPUTING NAN VALUES WITHOUT BIAS',
    coreEn:
      'Real data always has blanks (`NaN` / `None`). Pandas lets you measure them (`isna().sum()`), remove incomplete rows (`dropna()`), or fill them thoughtfully (`fillna()` with median, mode, or forward-fill).',
    coreHi:
      'Real data mein blank values (`NaN` / `None`) hamesha aati hain. Pandas mein hum unhe `isna().sum()` se ginte hain, `dropna()` se hatate hain, ya `fillna()` se median/mode/forward-fill karke bharte hain.',
    analogyTitle: 'Missing Attendance Marks in a Class Register',
    analogyEn:
      'If a student’s height is missing on a form, writing `0 cm` ruins the class average! Instead, you either exclude that blank (`dropna`), fill the typical median height (`fillna`), or mark `"Unknown"` for text fields.',
    analogyHi:
      'Agar kisi student ki height blank hai aur aap `0 cm` bhar dein, toh poori class ka average kharab ho jayega! Sahi tarika hai median se bharna (`fillna`), ya text mein `"Unknown"` likhna.',
    steps: [
      {
        title: 'Quantify Missingness First',
        en: 'Run `df.isna().sum()` and `(df.isna().mean() * 100).round(1)` to see the % missing per column.',
        hi: '`df.isna().sum()` aur missing percentage check karein taaki pata chale kis column mein kitna data gayab hai.',
      },
      {
        title: 'Ask *Why* It Is Missing',
        en: 'Is a blank `discount` actually `0`, or is a blank `age` truly unknown? Business meaning decides the fix.',
        hi: 'Pehle samjhein blank kyun hai — kya missing `discount` ka matlab `0` hai, ya `age` sach mein unknown hai?',
      },
      {
        title: 'Drop or Impute Strategically',
        en: 'Use `dropna(subset=["id"])` for critical keys, `fillna(median)` for skewed numbers, and `fillna("Unknown")` for categories.',
        hi: 'Zaroori IDs par `dropna(subset=["id"])`, skewed numbers par median, aur categories par `"Unknown"` ya mode use karein.',
      },
      {
        title: 'Verify Zero Unexpected Nulls',
        en: 'Re-run `df.isna().sum()` after cleaning to confirm your dataset is ready for analysis or ML.',
        hi: 'Cleaning ke baad dobara `df.isna().sum()` chalakar confirm karein ki koi unexpected null nahi bacha.',
      },
    ],
    codeLabel: 'PYTHON • AUDIT & IMPUTE MISSING VALUES',
    code: `import pandas as pd

df = pd.DataFrame({
    "city": ["Delhi", None, "Pune", "Delhi"],
    "age": [24, 30, None, 28]
})
print("Missing before:\\n", df.isna().sum().to_dict())

df["city"] = df["city"].fillna("Unknown")
df["age"] = df["age"].fillna(df["age"].median())
print("\\nCleaned:\\n", df)`,
    codeOutput: `Missing before:
 {'city': 1, 'age': 1}

Cleaned:
       city   age
0    Delhi  24.0
1  Unknown  30.0
2     Pune  28.0
3    Delhi  28.0`,
    codeCaptionEn: 'Missing `age` was imputed with the median (`28.0`), and missing `city` became `"Unknown"`.',
    codeCaptionHi: 'Missing `age` ko median (`28.0`) aur missing `city` ko `"Unknown"` se cleanly fill kar diya gaya.',
    tableTitle: 'Choosing the Right Missing-Value Strategy',
    tableHeaders: ['Data Situation', 'Recommended Strategy', 'Pandas Code'],
    tableRows: [
      ['Critical key / target missing', 'Drop those specific rows', 'df.dropna(subset=["order_id"])'],
      ['Skewed numeric (income, price)', 'Fill with median', 'df["price"].fillna(df["price"].median())'],
      ['Categorical text (city, plan)', 'Fill with "Unknown" or mode', 'df["city"].fillna("Unknown")'],
      ['Time-series sensor reading', 'Forward-fill previous value', 'df["temp"].ffill()'],
    ],
    tableNoteEn: 'In Machine Learning, always compute the fill median on the **training set only** to avoid data leakage.',
    tableNoteHi: 'Machine Learning mein fill karne wala median hamesha **sirf training set** par calculate karein taaki data leakage na ho.',
    mistakeEn: 'Blindly running `df.dropna()` across the whole table and accidentally deleting 60% of your valuable rows because one optional column had blanks.',
    mistakeHi: 'Bina soche poore table par `df.dropna()` chala dena aur ek optional column ki wajah se 60% kaam ka data delete kar dena.',
    proHabitEn: 'Always check missing percentages per column first, and pass `subset=[...]` when dropping rows.',
    proHabitHi: 'Pehle har column ka missing percentage dekhein, aur rows drop karte waqt hamesha `subset=[...]` specify karein.',
    jobUseEn: 'Almost all Scikit-Learn models crash on `NaN` values, making clean imputation a mandatory step in every real-world ML pipeline.',
    jobUseHi: 'Lagbhag saare Scikit-Learn models `NaN` par crash ho jaate hain, isliye sahi imputation har ML pipeline ka zaroori hissa hai.',
    mcq1Question: 'Why is filling missing house prices with the **median** usually safer than filling with `0`?',
    mcq1Correct: 'Filling with `0` creates fake zero-price houses that severely distort averages and ML models.',
    mcq1Wrongs: [
      'Pandas does not allow filling with `0`.',
      'The median always equals `0`.',
      'Filling with `0` converts numbers into text.',
    ],
    mcq1Explain: 'Median preserves the central tendency without introducing impossible zero values or getting pulled by extreme outliers.',
    mcq2Question: 'Which command counts how many missing values exist in each column of `df`?',
    mcq2Correct: 'df.isna().sum()',
    mcq2Wrongs: ['df.dropna().count()', 'df.nulls()', 'df.fillna().sum()'],
    mcq2Explain: '`df.isna()` produces a True/False grid, and `.sum()` counts `True` (1) per column.',
    realWorldScenario:
      'A telecom churn dataset has 2% missing `monthly_bill` values and 40% missing `referral_code` values. You fill `monthly_bill` with its median and `referral_code` with `"None"`.',
    interviewQ1: 'When should you use median vs mean vs mode for imputing missing values?',
    interviewA1:
      'Use **mean** for symmetric numerical data without outliers, **median** for skewed numerical data (like income or prices), and **mode** (or `"Unknown"`) for categorical text columns.',
    interviewQ2: 'Why is `ffill()` (forward-fill) commonly used for stock prices or IoT sensor logs?',
    interviewA2:
      'In time-series data, the most recent known reading is usually the best estimate until the next measurement arrives, and forward-fill avoids peeking into future data.',
  },
  {
    id: 176,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 9,
    title: 'Removing Duplicate Records',
    subtitle: 'CATCHING DOUBLE-COUNTED ROWS WITH DUPLICATED() AND DROP_DUPLICATES()',
    coreEn:
      'Duplicate rows inflate sales totals and bias ML models. Pandas finds exact or key-based repeats with `.duplicated()` and removes them cleanly with `.drop_duplicates(subset=..., keep=...)`.',
    coreHi:
      'Duplicate rows aapke sales total ko nakli tarike se badha deti hain aur ML model ko bias karti hain. Pandas `.duplicated()` se unhe pakadta hai aur `.drop_duplicates()` se cleanly hata deta hai.',
    analogyTitle: 'Scanning the Same Grocery Item Twice at Checkout',
    analogyEn:
      'If a cashier accidentally scans the same milk carton twice, your bill is artificially inflated. Deduplicating checks the receipt for repeated item IDs and keeps only the valid scan.',
    analogyHi:
      'Agar cashier galti se ek hi milk packet do baar scan kar de, toh bill galat badh jaata hai. Deduplication receipt check karke extra duplicate entry ko hata deta hai.',
    steps: [
      {
        title: 'Count Exact Duplicates',
        en: 'Run `df.duplicated().sum()` to see how many rows are 100% identical.',
        hi: '`df.duplicated().sum()` chalakar dekhein ki kitni rows 100% identical hain.',
      },
      {
        title: 'Check Business-Key Duplicates',
        en: 'Check repeats on a key like `order_id` or `email` using `df.duplicated(subset=["order_id"]).sum()`.',
        hi: 'Sirf full row hi nahi, `order_id` ya `email` par `subset=["order_id"]` lagakar key-duplicates bhi check karein.',
      },
      {
        title: 'Inspect Before Deleting',
        en: 'View `df[df.duplicated(subset=["order_id"], keep=False)]` to understand *why* duplicates occurred.',
        hi: 'Delete karne se pehle `keep=False` lagakar duplicate rows ko dekhein ki woh kyun aayin.',
      },
      {
        title: 'Deduplicate with Clear `keep` Rule',
        en: 'Sort by timestamp first if keeping the latest record: `df.sort_values("updated_at").drop_duplicates(subset=["user_id"], keep="last")`.',
        hi: 'Latest record rakhne ke liye pehle timestamp se sort karein, phir `drop_duplicates(subset=["user_id"], keep="last")` chalayein.',
      },
    ],
    codeLabel: 'PYTHON • KEEPING THE LATEST RECORD PER USER',
    code: `import pandas as pd

df = pd.DataFrame({
    "user_id": [1, 2, 1],
    "plan": ["Free", "Pro", "Pro"],
    "day": [1, 2, 5]
})
print("Key duplicates:", df.duplicated(subset=["user_id"]).sum())
clean = df.sort_values("day").drop_duplicates(subset=["user_id"], keep="last")
print(clean)`,
    codeOutput: `Key duplicates: 1
   user_id plan  day
1        2  Pro    2
2        1  Pro    5`,
    codeCaptionEn: 'Sorting by `day` before `keep="last"` ensured User 1 kept their upgraded `"Pro"` plan on day 5.',
    codeCaptionHi: '`day` se sort karke `keep="last"` lagane se User 1 ka latest upgraded `"Pro"` plan safe raha.',
    tableTitle: 'Deduplication Options in Pandas',
    tableHeaders: ['Option', 'Behavior', 'When to Use'],
    tableRows: [
      ['keep="first"', 'Keeps first occurrence, drops later ones', 'Keeping earliest signup or first touch'],
      ['keep="last"', 'Keeps final occurrence, drops earlier ones', 'Keeping latest profile update after sorting'],
      ['keep=False', 'Flags/drops ALL copies of duplicated keys', 'Inspecting or quarantining conflicting IDs'],
      ['subset=["id"]', 'Checks uniqueness on specific columns only', 'Preventing duplicate orders or users'],
    ],
    tableNoteEn: 'Remember to call `.reset_index(drop=True)` after dropping rows if you need clean sequential 0..N indices.',
    tableNoteHi: 'Rows hatane ke baad agar clean `0..N` index chahiye toh `.reset_index(drop=True)` laga dein.',
    mistakeEn: 'Running `df.drop_duplicates()` with no `subset` when two rows share the same `order_id` but have slightly different timestamps — exact matching misses it completely!',
    mistakeHi: 'Bina `subset` ke `df.drop_duplicates()` chalana jab `order_id` same ho par timestamp alag ho — aise mein duplicate pakda hi nahi jaata!',
    proHabitEn: 'Always check both full-row duplicates and primary-key duplicates (`subset=["id"]`), and sort by timestamp before using `keep="last"`.',
    proHabitHi: 'Hamesha full-row aur primary-key (`subset=["id"]`) dono check karein, aur `keep="last"` se pehle timestamp par sort karein.',
    jobUseEn: 'Prevents double-counting revenue in BI dashboards and stops data leakage where identical rows appear in both ML train and test splits.',
    jobUseHi: 'BI dashboards mein double revenue count hone se bachata hai aur ML mein train/test data leakage rokta hai.',
    mcq1Question: 'You have multiple status updates per `user_id` sorted oldest-to-newest. Which option keeps only each user’s most recent row?',
    mcq1Correct: 'df.drop_duplicates(subset=["user_id"], keep="last")',
    mcq1Wrongs: [
      'df.drop_duplicates(keep="first")',
      'df.drop_duplicates(keep=False)',
      'df.dropna(subset=["user_id"])',
    ],
    mcq1Explain: 'After sorting chronologically, `keep="last"` retains the newest row for each `user_id`.',
    mcq2Question: 'What does `df[df.duplicated(subset=["email"], keep=False)]` display?',
    mcq2Correct: 'Every row involved in a duplicate `email` (both the first and repeated copies).',
    mcq2Wrongs: [
      'Only the unique emails with no repeats.',
      'Deletes all duplicate emails permanently.',
      'Returns only the count of columns.',
    ],
    mcq2Explain: '`keep=False` marks every copy of a duplicated key as `True`, making it ideal for auditing conflicts.',
    realWorldScenario:
      'A webhook retry bug logged 300 orders twice in your daily export. You verify with `df.duplicated(subset=["order_id"]).sum()` and deduplicate before computing revenue.',
    interviewQ1: 'Why can duplicate rows hurt a Machine Learning model’s evaluation score?',
    interviewA1:
      'If duplicate records land in both the training and test sets, the model memorizes them during training and scores artificially high on the test set (data leakage).',
    interviewQ2: 'What is the difference between `df.duplicated()` and `df.duplicated(subset=["id"])`?',
    interviewA2:
      '`df.duplicated()` only flags rows where *every* column matches identically, while `subset=["id"]` flags rows that repeat the same business key even if other columns differ.',
  },
  {
    id: 177,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 10,
    title: 'Applying Functions to DataFrames',
    subtitle: 'USING .MAP(), .APPLY(), AND VECTORIZED NP.SELECT() SMARTLY',
    coreEn:
      'When built-in math isn’t enough, `.map()` replaces values in a Series via a dictionary or function, while `.apply()` runs custom Python logic across a column or rows (`axis=1`).',
    coreHi:
      'Jab simple math kaafi na ho, `.map()` ek Series ki values ko dictionary ya function se badalta hai, aur `.apply()` kisi column ya row (`axis=1`) par custom Python function chalata hai.',
    analogyTitle: 'Custom Rubber Stamp for Special Cases',
    analogyEn:
      'Standard machines handle simple price multiplication. When you need a custom rule like "If VIP and Order > ₹5,000, stamp Express; else Standard", `.apply()` or `np.select()` stamps each row with your custom logic.',
    analogyHi:
      'Simple calculation ke liye direct math kaafi hai. Jab custom rule chahiye jaise "VIP aur Order > ₹5,000 toh Express, warna Standard", tab `.apply()` ya `np.select()` har row par sahi stamp lagata hai.',
    steps: [
      {
        title: 'Prefer Vectorized Ops First',
        en: 'Use direct arithmetic, `np.where()`, or `np.select()` before reaching for `.apply()` — they are 10–100x faster.',
        hi: '`.apply()` se pehle hamesha direct math, `np.where()`, ya `np.select()` try karein — yeh 10–100x tez hote hain.',
      },
      {
        title: 'Use `.map()` for Lookup Dictionaries',
        en: 'Map codes to labels cleanly: `df["region"] = df["code"].map({"DL": "North", "MH": "West"})`.',
        hi: 'Codes ko labels mein badalne ke liye `.map({"DL": "North", "MH": "West"})` use karein.',
      },
      {
        title: 'Use `Series.apply()` for Custom 1-Column Logic',
        en: 'Pass a small named function `df["score"].apply(grade_band)` when logic is complex.',
        hi: 'Complex 1-column rule ke liye chhota named function `df["score"].apply(grade_band)` pass karein.',
      },
      {
        title: 'Use `df.apply(fn, axis=1)` Sparingly',
        en: 'Pass `axis=1` only when custom logic truly needs multiple columns per row on small/medium tables.',
        hi: '`df.apply(fn, axis=1)` tabhi use karein jab multiple columns par custom logic chahiye aur table chhoti/medium ho.',
      },
    ],
    codeLabel: 'PYTHON • .MAP() AND .APPLY() IN ACTION',
    code: `import pandas as pd

df = pd.DataFrame({"code": ["DL", "MH", "KA"], "score": [92, 74, 58]})
state_map = {"DL": "Delhi", "MH": "Maharashtra", "KA": "Karnataka"}

def to_grade(s):
    return "A" if s >= 85 else ("B" if s >= 70 else "C")

df["state"] = df["code"].map(state_map)
df["grade"] = df["score"].apply(to_grade)
print(df)`,
    codeOutput: `  code  score        state grade
0   DL     92        Delhi     A
1   MH     74  Maharashtra     B
2   KA     58    Karnataka     C`,
    codeCaptionEn: '`.map()` translated state codes via a dictionary, and `.apply()` assigned letter grades.',
    codeCaptionHi: '`.map()` ne dictionary se state codes badle aur `.apply()` ne scores ko letter grades diye.',
    tableTitle: 'Choosing Between Vectorized, `.map()`, and `.apply()`',
    tableHeaders: ['Approach', 'Speed', 'Best Use Case'],
    tableRows: [
      ['Vectorized / np.where / np.select', 'Fastest (C speed)', 'Numeric formulas & multi-branch conditions'],
      ['Series.map(dict)', 'Very Fast', 'Replacing codes/labels with a lookup dict'],
      ['Series.apply(func)', 'Medium (Python loop)', 'Custom text parsing or complex single-column logic'],
      ['df.apply(func, axis=1)', 'Slowest', 'Multi-column custom logic on small tables only'],
    ],
    tableNoteEn: 'Warning: `Series.map(dict)` turns any unmapped value into `NaN`; use `.replace(dict)` if you want unmapped values kept as-is.',
    tableNoteHi: 'Dhyan dein: `Series.map(dict)` mein jo value dict mein nahi hai woh `NaN` ban jaati hai; original rakhne ke liye `.replace(dict)` use karein.',
    mistakeEn: 'Using `df.apply(lambda r: r["a"] + r["b"], axis=1)` on 1 million rows instead of simply writing `df["a"] + df["b"]`.',
    mistakeHi: '10 lakh rows par `df["a"] + df["b"]` likhne ke bajaye slow `df.apply(lambda r: r["a"] + r["b"], axis=1)` chalana.',
    proHabitEn: 'Follow the speed ladder: built-in vectorized op -> `np.where`/`np.select` -> `.map()` -> `.apply()`.',
    proHabitHi: 'Speed ladder follow karein: pehle vectorized op -> `np.where`/`np.select` -> `.map()` -> aakhir mein `.apply()`.',
    jobUseEn: 'Used to bucket ages into marketing segments, map ISO country codes to regions, and apply custom business risk scoring rules.',
    jobUseHi: 'Age buckets banane, country codes ko region naam dene aur custom business risk rules lagane mein roz use hota hai.',
    mcq1Question: 'What happens to a value in `df["code"].map({"DL": "Delhi"})` if a row contains `"UP"` (not in the dictionary)?',
    mcq1Correct: 'It becomes `NaN`.',
    mcq1Wrongs: ['It stays `"UP"`.', 'Pandas raises a KeyError.', 'It becomes `"Delhi"`.'],
    mcq1Explain: '`.map(dict)` replaces unmatched keys with `NaN`; use `.replace(dict)` if you want unmatched values preserved.',
    mcq2Question: 'Which option is fastest for computing `df["total"]` from `df["qty"]` and `df["price"]` on 500,000 rows?',
    mcq2Correct: 'df["qty"] * df["price"]',
    mcq2Wrongs: [
      'df.apply(lambda r: r["qty"] * r["price"], axis=1)',
      'A Python `for i in range(len(df)):` loop',
      'df.iterrows() with a list append',
    ],
    mcq2Explain: 'Direct column arithmetic is vectorized in C and runs orders of magnitude faster than row-by-row `.apply(axis=1)`.',
    realWorldScenario:
      'You need to assign shipping tiers ("Free", "Standard", "Express") based on order value and membership status across 300,000 orders using `np.select()` instead of slow row-wise `.apply()`.',
    interviewQ1: 'What is the difference between `.map()` and `.replace()` on a Pandas Series?',
    interviewA1:
      'Both accept a dictionary, but `.map()` turns any value not found in the dictionary into `NaN`, whereas `.replace()` leaves unmatched values unchanged.',
    interviewQ2: 'Why is `df.apply(..., axis=1)` slow on large DataFrames?',
    interviewA2:
      'Under the hood it iterates row by row in Python, constructing a Pandas Series for every single row — losing NumPy’s vectorized C-level speed.',
  },
  {
    id: 178,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 11,
    title: 'GroupBy and Aggregation',
    subtitle: 'SPLIT-APPLY-COMBINE FOR DEPARTMENT, CITY, AND CATEGORY SUMMARIES',
    coreEn:
      '`groupby()` follows the Split-Apply-Combine pattern: it splits a table into groups (like per city), applies summary metrics (`sum`, `mean`, `count`, `nunique`), and combines the results into a clean summary table.',
    coreHi:
      '`groupby()` Split-Apply-Combine rule par chalta hai: pehle table ko groups mein baantta hai (jaise har city ke liye), phir har group par `sum`/`mean`/`count` lagata hai, aur aakhir mein ek clean summary table bana deta hai.',
    analogyTitle: 'Sorting Coins by Denomination and Counting Each Pile',
    analogyEn:
      'Dump a jar of coins onto a table, sort them into ₹1, ₹2, ₹5, and ₹10 piles (Split), count the total value of each pile (Apply), and write all 4 totals on one slip of paper (Combine).',
    analogyHi:
      'Sikkon ke jar ko table par rakhiye, ₹1, ₹2, ₹5, ₹10 ke alag dher banaiye (Split), har dher ka total giniye (Apply), aur ek parchi par sabke totals likh lijiye (Combine).',
    steps: [
      {
        title: 'Choose Grouping Key(s)',
        en: 'Group by one or more categorical columns: `df.groupby("city")` or `df.groupby(["city", "category"])`.',
        hi: 'Ek ya zyada categorical columns chunein: `df.groupby("city")` ya `df.groupby(["city", "category"])`.',
      },
      {
        title: 'Apply Named Aggregations with `.agg()`',
        en: 'Compute multiple metrics at once with clear output names using `.agg(total_sales=("sales", "sum"), avg_sales=("sales", "mean"))`.',
        hi: '`.agg()` se ek saath kai metrics clean column names ke saath nikalein.',
      },
      {
        title: 'Flatten Back to Columns with `.reset_index()`',
        en: 'Call `.reset_index()` so the grouped keys become normal columns again instead of a nested index.',
        hi: '`.reset_index()` lagayein taaki grouped keys wapas normal columns ban jayein.',
      },
      {
        title: 'Use `.transform()` to Keep Original Row Count',
        en: 'When adding a group average back to every individual row, use `df.groupby("city")["sales"].transform("mean")`.',
        hi: 'Agar group ka average har original row ke bagal mein jodna ho, toh `.transform("mean")` use karein.',
      },
    ],
    codeLabel: 'PYTHON • NAMED AGGREGATION WITH GROUPBY',
    code: `import pandas as pd

df = pd.DataFrame({
    "city": ["Delhi", "Pune", "Delhi", "Pune"],
    "sales": [500, 300, 700, 450]
})
summary = (
    df.groupby("city", as_index=False)
      .agg(orders=("sales", "count"), total_sales=("sales", "sum"), avg_sale=("sales", "mean"))
)
print(summary)`,
    codeOutput: `    city  orders  total_sales  avg_sale
0  Delhi       2         1200     600.0
1   Pune       2          750     375.0`,
    codeCaptionEn: '`as_index=False` keeps `city` as a clean column, and named `.agg()` gives business-ready headers.',
    codeCaptionHi: '`as_index=False` se `city` normal column rehta hai aur named `.agg()` se clean headers milte hain.',
    tableTitle: 'Essential GroupBy Patterns',
    tableHeaders: ['Pattern', 'What It Returns', 'Example'],
    tableRows: [
      ['Single metric', 'Series per group', 'df.groupby("dept")["salary"].mean()'],
      ['Named `.agg()`', 'Multi-metric summary table', 'df.groupby("dept").agg(avg=("salary","mean"))'],
      ['`.transform()`', 'Same length as original df', 'df.groupby("dept")["salary"].transform("mean")'],
      ['`nunique`', 'Count of unique items per group', 'df.groupby("city")["user_id"].nunique()'],
    ],
    tableNoteEn: 'By default `groupby()` drops `NaN` group keys! Pass `dropna=False` if you want missing categories included in your summary.',
    tableNoteHi: 'Default mein `groupby()` `NaN` group keys ko chhod deta hai; unhe bhi dekhne ke liye `dropna=False` pass karein.',
    mistakeEn: 'Forgetting `dropna=False` during a data audit and accidentally hiding thousands of rows whose `region` was blank.',
    mistakeHi: 'Audit ke waqt `dropna=False` bhool jana, jisse blank `region` wali hazaaro rows summary se gayab ho jaati hain.',
    proHabitEn: 'Use `as_index=False` (or `.reset_index()`) and named `.agg()` so your grouped output is immediately ready for charts or CSV export.',
    proHabitHi: 'Hamesha `as_index=False` aur named `.agg()` use karein taaki output seedha charts ya report ke liye ready ho.',
    jobUseEn: 'Powers every executive KPI table: revenue by region, churn rate by subscription tier, and average delivery time by courier.',
    jobUseHi: 'Har executive KPI report — region-wise revenue, plan-wise churn rate aur courier-wise delivery time — `groupby()` se hi banti hai.',
    mcq1Question: 'What are the three stages of Pandas `groupby()`?',
    mcq1Correct: 'Split, Apply, Combine.',
    mcq1Wrongs: ['Sort, Delete, Export.', 'Read, Plot, Save.', 'Filter, Loop, Append.'],
    mcq1Explain: 'GroupBy splits rows by key, applies an aggregation function to each group, and combines the results.',
    mcq2Question: 'Which GroupBy method returns a Series with the *same number of rows* as the original DataFrame (e.g., to compare each employee’s salary against their department average)?',
    mcq2Correct: 'df.groupby("dept")["salary"].transform("mean")',
    mcq2Wrongs: [
      'df.groupby("dept")["salary"].agg("mean")',
      'df.groupby("dept")["salary"].sum()',
      'df.groupby("dept")["salary"].first()',
    ],
    mcq2Explain: '`.transform()` broadcasts each group’s summary value back to every row belonging to that group.',
    realWorldScenario:
      'Your VP of Sales wants a single summary table showing total revenue, order count, and unique customers per region — including orders with missing region labels (`dropna=False`).',
    interviewQ1: 'What is the difference between `.agg()` and `.transform()` after `groupby()`?',
    interviewA1:
      '`.agg()` collapses each group into one summary row (reducing table size), whereas `.transform()` returns a result aligned to the original DataFrame’s exact row count.',
    interviewQ2: 'Why might the total sum of a `groupby("city")["sales"].sum()` be lower than `df["sales"].sum()`?',
    interviewA2:
      'Because `groupby()` excludes rows where the grouping key (`city`) is `NaN` by default. Passing `dropna=False` includes those rows.',
  },
  {
    id: 179,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 12,
    title: 'Merge, Join and Concatenate',
    subtitle: 'COMBINING MULTIPLE TABLES LIKE SQL JOINS AND STACKED SHEETS',
    coreEn:
      '`pd.merge()` joins two DataFrames on matching key columns (like SQL `INNER`/`LEFT` joins), while `pd.concat()` stacks DataFrames vertically (more rows) or horizontally (more columns).',
    coreHi:
      '`pd.merge()` do tables ko matching key column par jodta hai (SQL `INNER`/`LEFT` join ki tarah), jabki `pd.concat()` tables ko upar-neeche (rows) ya bagal-bagal (columns) chipkata hai.',
    analogyTitle: 'VLOOKUP Matching vs Stapling Monthly Reports Together',
    analogyEn:
      'Matching an Orders sheet with a Customers sheet using `customer_id` is `pd.merge()` (like Excel VLOOKUP on steroids). Stapling January’s and February’s identical sales sheets together is `pd.concat()`.',
    analogyHi:
      'Orders table ko `customer_id` ke zariye Customers table se jodna `pd.merge()` hai. January aur February ki same-format sheets ko ek ke neeche ek staple karna `pd.concat()` hai.',
    steps: [
      {
        title: 'Choose `concat` vs `merge`',
        en: 'Use `pd.concat([df1, df2], ignore_index=True)` to stack identical schemas; use `pd.merge()` to join on keys.',
        hi: 'Same columns wali tables upar-neeche jodne ke liye `pd.concat`, aur key column par match karne ke liye `pd.merge` use karein.',
      },
      {
        title: 'Pick the Right Join Type (`how=`)',
        en: 'Use `how="left"` to keep all primary rows (e.g., all orders) even if a lookup match is missing; `how="inner"` keeps only matches.',
        hi: 'Saari primary rows bachane ke liye `how="left"`, aur sirf common matches ke liye `how="inner"` chunein.',
      },
      {
        title: 'Guard Against Row Explosion with `validate=`',
        en: 'Pass `validate="many_to_one"` when merging orders onto a unique customer table to catch accidental duplicate keys.',
        hi: 'Accidental duplicate keys se row-explosion rokne ke liye `validate="many_to_one"` pass karein.',
      },
      {
        title: 'Verify Row Counts Before & After',
        en: 'Always compare `len(left)` vs `len(merged)` right after merging.',
        hi: 'Merge ke turant baad `len(left)` aur `len(merged)` compare karke confirm karein ki rows badhi ya ghatin toh nahi.',
      },
    ],
    codeLabel: 'PYTHON • LEFT MERGE WITH VALIDATION',
    code: `import pandas as pd

orders = pd.DataFrame({"order_id": [1, 2, 3], "cust_id": [10, 20, 99], "amt": [500, 300, 200]})
customers = pd.DataFrame({"cust_id": [10, 20], "name": ["Asha", "Ravi"]})

merged = pd.merge(orders, customers, on="cust_id", how="left", validate="many_to_one")
print(merged)`,
    codeOutput: `   order_id  cust_id  amt  name
0         1       10  500  Asha
1         2       20  300  Ravi
2         3       99  200   NaN`,
    codeCaptionEn: '`how="left"` preserved Order 3 (`cust_id=99`) with `name=NaN` instead of silently dropping ₹200 of revenue!',
    codeCaptionHi: '`how="left"` ne Order 3 (`cust_id=99`) ko `name=NaN` ke saath safe rakha — ₹200 ka revenue gayab nahi hua!',
    tableTitle: 'Merge vs Concat Quick Reference',
    tableHeaders: ['Function', 'Key Parameter', 'What It Does'],
    tableRows: [
      ['pd.merge(a, b, how="inner")', 'on="id"', 'Keeps only IDs present in BOTH tables'],
      ['pd.merge(a, b, how="left")', 'on="id"', 'Keeps ALL rows from left table + matches from right'],
      ['pd.merge(a, b, how="outer")', 'indicator=True', 'Keeps all rows from both + shows match source'],
      ['pd.concat([a, b])', 'ignore_index=True', 'Stacks tables vertically with fresh 0..N index'],
    ],
    tableNoteEn: 'If the key column has different names in each table, use `left_on="cust_id", right_on="id"`.',
    tableNoteHi: 'Agar dono tables mein key column ka naam alag hai, toh `left_on="cust_id", right_on="id"` use karein.',
    mistakeEn: 'Merging without checking for duplicate keys in the lookup table, causing a 10,000-row table to silently explode into 25,000 duplicated rows.',
    mistakeHi: 'Lookup table mein duplicate keys check kiye bina merge karna, jisse 10,000 rows achanak 25,000 duplicate rows ban jaati hain.',
    proHabitEn: 'Always check `len(df)` before and after `pd.merge()`, and pass `validate="many_to_one"` or `"one_to_one"` as a built-in safety net.',
    proHabitHi: 'Merge se pehle aur baad mein `len(df)` zaroor check karein aur safety ke liye `validate="many_to_one"` lagayein.',
    jobUseEn: 'Every enterprise analysis combines Orders + Customers + Products + Returns tables using `pd.merge()` and stacks monthly dumps with `pd.concat()`.',
    jobUseHi: 'Har company analysis mein Orders + Customers + Products tables `pd.merge()` se judte hain aur monthly files `pd.concat()` se stack hoti hain.',
    mcq1Question: 'You want to keep ALL rows from `orders` and attach customer names where available. Which `how=` parameter should you use?',
    mcq1Correct: 'how="left"',
    mcq1Wrongs: ['how="inner"', 'how="right"', 'how="cross"'],
    mcq1Explain: 'A left join retains every row from the left DataFrame (`orders`) and fills unmatched right columns with `NaN`.',
    mcq2Question: 'Which function stacks `jan_df` and `feb_df` (with identical columns) on top of each other?',
    mcq2Correct: 'pd.concat([jan_df, feb_df], ignore_index=True)',
    mcq2Wrongs: [
      'pd.merge(jan_df, feb_df, how="inner")',
      'jan_df.join(feb_df)',
      'pd.stack(jan_df, feb_df)',
    ],
    mcq2Explain: '`pd.concat` stacks DataFrames along `axis=0` (rows) by default, and `ignore_index=True` resets row numbering cleanly.',
    realWorldScenario:
      'You merge 50,000 orders with a customer lookup table and notice the merged table suddenly has 52,400 rows. Passing `validate="many_to_one"` immediately reveals duplicate `cust_id` entries in the customer table.',
    interviewQ1: 'What is the difference between `pd.merge()`, `df.join()`, and `pd.concat()`?',
    interviewA1:
      '`pd.merge()` performs SQL-style joins on columns (or indices), `df.join()` is a shorthand that defaults to joining on the index, and `pd.concat()` simply stacks DataFrames along rows or columns.',
    interviewQ2: 'Why is the `indicator=True` parameter useful in `pd.merge()`?',
    interviewA2:
      'It adds a `_merge` column showing `"left_only"`, `"right_only"`, or `"both"` for each row, making it easy to audit unmatched keys.',
  },
  {
    id: 180,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 13,
    title: 'Working with Dates and Times',
    subtitle: 'PARSING TIMESTAMPS, .DT ACCESSOR, AND TIME-SERIES RESAMPLING',
    coreEn:
      'Dates loaded from CSVs start as plain text. Converting them with `pd.to_datetime()` unlocks the `.dt` accessor (`.dt.year`, `.dt.month`, `.dt.day_name()`) and time math like delivery duration.',
    coreHi:
      'CSV se aane wali dates shuru mein plain text hoti hain. `pd.to_datetime()` se unhe convert karte hi `.dt` features (`.dt.year`, `.dt.month`, `.dt.day_name()`) aur delivery duration jaisi time math unlock ho jaati hai.',
    analogyTitle: 'Text Written on Paper vs a Smart Digital Calendar',
    analogyEn:
      'To Python, `"2026-03-15"` as text is just letters — it cannot tell you it was a Sunday or subtract 3 days. `pd.to_datetime()` turns that text into a smart digital calendar that knows weekdays, leap years, and durations.',
    analogyHi:
      'Python ke liye text `"2026-03-15"` sirf akshar hain — woh nahi bata sakta ki us din Sunday tha ya 3 din pehle kya date thi. `pd.to_datetime()` use smart digital calendar mein badal deta hai.',
    steps: [
      {
        title: 'Convert Text to Datetime',
        en: 'Run `df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")` to parse safely.',
        hi: '`pd.to_datetime(df["order_date"], errors="coerce")` se text ko safe datetime column mein badlein.',
      },
      {
        title: 'Extract Calendar Features via `.dt`',
        en: 'Pull `.dt.year`, `.dt.month`, `.dt.day_name()`, or `.dt.dayofweek` for seasonality analysis.',
        hi: 'Seasonality aur weekend trends ke liye `.dt.year`, `.dt.month`, `.dt.day_name()` nikalein.',
      },
      {
        title: 'Compute Time Differences',
        en: 'Subtract two datetime columns `(delivered - ordered).dt.days` to measure turnaround time.',
        hi: 'Do date columns ghata kar `(delivered - ordered).dt.days` se delivery time nikalein.',
      },
      {
        title: 'Roll Up by Period (`resample`)',
        en: 'Set a datetime index and use `.resample("ME").sum()` to aggregate daily sales into monthly totals.',
        hi: 'Datetime index par `.resample("ME").sum()` lagakar daily sales ko monthly totals mein badlein.',
      },
    ],
    codeLabel: 'PYTHON • DATETIME PARSING & DELIVERY DAYS',
    code: `import pandas as pd

df = pd.DataFrame({
    "ordered": ["2026-01-02", "2026-01-05"],
    "delivered": ["2026-01-05", "2026-01-07"]
})
df["ordered"] = pd.to_datetime(df["ordered"])
df["delivered"] = pd.to_datetime(df["delivered"])
df["weekday"] = df["ordered"].dt.day_name()
df["days_taken"] = (df["delivered"] - df["ordered"]).dt.days
print(df[["ordered", "weekday", "days_taken"]])`,
    codeOutput: `     ordered weekday  days_taken
0 2026-01-02  Friday           3
1 2026-01-05  Monday           2`,
    codeCaptionEn: 'Once parsed as `datetime64`, subtracting dates gives a Timedelta whose `.dt.days` gives clean integers.',
    codeCaptionHi: '`datetime64` banne ke baad dates ghatane par Timedelta milta hai aur `.dt.days` clean number of days deta hai.',
    tableTitle: 'Essential Pandas `.dt` Operations',
    tableHeaders: ['Expression', 'Output Example', 'Business Use'],
    tableRows: [
      ['s.dt.year / s.dt.month', '2026 / 1', 'Year-over-Year & monthly trends'],
      ['s.dt.day_name()', '"Friday"', 'Weekend vs weekday sales comparison'],
      ['(d2 - d1).dt.days', '3', 'Shipping SLA & customer tenure'],
      ['df.resample("W").sum()', 'Weekly totals', 'Smoothing noisy daily data'],
    ],
    tableNoteEn: 'Pass `dayfirst=True` or explicit `format="%d/%m/%Y"` for Indian/European DD/MM/YYYY dates so `05/04/2026` isn’t misread as May 4th!',
    tableNoteHi: 'Indian `DD/MM/YYYY` dates ke liye hamesha `dayfirst=True` ya `format="%d/%m/%Y"` dein taaki 5 April galti se 4 May na ban jaye!',
    mistakeEn: 'Leaving dates as strings and sorting `"10/01/2026"` before `"2/01/2026"` alphabetically, or forgetting `dayfirst=True` on DD/MM/YYYY formats.',
    mistakeHi: 'Dates ko string chhodkar alphabetically sort karna ya `DD/MM/YYYY` data mein `dayfirst=True` bhool jana.',
    proHabitEn: 'Always specify `format=` when parsing dates and use `errors="coerce"` so one bad string like `"TBD"` turns into `NaT` instead of crashing the script.',
    proHabitHi: 'Dates parse karte waqt explicit `format=` aur `errors="coerce"` use karein taaki ek `"TBD"` string poore script ko crash na kare.',
    jobUseEn: 'Used in demand forecasting, cohort retention analysis, SLA delivery tracking, and extracting holiday/weekend features for ML models.',
    jobUseHi: 'Sales forecasting, customer retention cohorts, delivery SLA tracking aur ML ke liye weekend/month features banane mein use hota hai.',
    mcq1Question: 'What does `pd.to_datetime(col, errors="coerce")` do when it encounters an invalid date string like `"unknown"`?',
    mcq1Correct: 'Converts `"unknown"` into `NaT` (Not a Time) instead of raising an error.',
    mcq1Wrongs: [
      'Replaces `"unknown"` with today’s date.',
      'Deletes the entire DataFrame.',
      'Leaves the whole column as plain strings.',
    ],
    mcq1Explain: '`errors="coerce"` safely converts unparseable entries to `NaT` (datetime’s equivalent of `NaN`).',
    mcq2Question: 'Which accessor extracts the day of the week name (e.g., `"Monday"`) from a Pandas datetime Series `s`?',
    mcq2Correct: 's.dt.day_name()',
    mcq2Wrongs: ['s.str.day()', 's.date.name()', 's.weekday_str()'],
    mcq2Explain: 'All datetime properties and methods on a Series live under the `.dt` accessor.',
    realWorldScenario:
      'You are analyzing food delivery orders in India formatted as `"14/02/2026"`. You parse with `format="%d/%m/%Y"`, extract `.dt.day_name()`, and discover Friday-Sunday orders are 2.3× higher.',
    interviewQ1: 'What is `NaT` in Pandas?',
    interviewA1:
      '`NaT` stands for "Not a Time" — it is the datetime equivalent of `NaN` used to represent missing or invalid timestamps.',
    interviewQ2: 'How do you aggregate daily sales data into monthly totals in Pandas?',
    interviewA2:
      'Convert the date column with `pd.to_datetime()`, set it as the index (or use `pd.Grouper(key="date", freq="ME")`), and call `.resample("ME")["sales"].sum()`.',
  },
  {
    id: 181,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 14,
    title: 'Text Processing with Pandas',
    subtitle: 'CLEANING, SPLITTING, AND SEARCHING STRING COLUMNS VIA .STR',
    coreEn:
      'Pandas’ `.str` accessor lets you apply vectorized text operations — `.str.strip()`, `.str.lower()`, `.str.replace()`, `.str.contains()`, and `.str.split()` — across entire columns while safely ignoring `NaN`.',
    coreHi:
      'Pandas ka `.str` accessor poore text column par ek saath `.str.strip()`, `.str.lower()`, `.str.replace()`, `.str.contains()`, aur `.str.split()` chalata hai aur `NaN` values par crash bhi nahi hota.',
    analogyTitle: 'Find-and-Replace Across an Entire Book in One Click',
    analogyEn:
      'Real user input is messy: `" delhi"`, `"DELHI"`, `"Delhi "`. Using `.str.strip().str.title()` is like a magic broom that sweeps extra spaces and fixes capitalization across 100,000 rows in one go.',
    analogyHi:
      'Users form mein `" delhi"`, `"DELHI"`, `"Delhi "` alag-alag likhte hain. `.str.strip().str.title()` ek magic broom ki tarah 1 lakh rows ke spaces aur capitalization ek saath theek kar deta hai.',
    steps: [
      {
        title: 'Trim & Normalize Case',
        en: 'Chain `.str.strip().str.lower()` (or `.str.title()`) so `"Delhi"` and `" delhi "` merge into one clean category.',
        hi: '`.str.strip().str.lower()` chain karein taaki `"Delhi"` aur `" delhi "` ek hi category ban jayein.',
      },
      {
        title: 'Remove Junk Characters',
        en: 'Strip currency symbols or commas (`df["price"].str.replace("[₹,]", "", regex=True).astype(float)`).',
        hi: 'Currency symbols aur commas hatakar `.astype(float)` se text ko asli number banayein.',
      },
      {
        title: 'Search Patterns with `.str.contains()`',
        en: 'Filter text with `df["item"].str.contains("pro", case=False, na=False)`.',
        hi: 'Keywords dhoondhne ke liye `str.contains("pro", case=False, na=False)` use karein.',
      },
      {
        title: 'Split Into New Columns',
        en: 'Extract email domains or first/last names with `.str.split("@", expand=True)`.',
        hi: 'Email domain ya first/last name alag karne ke liye `.str.split("@", expand=True)` use karein.',
      },
    ],
    codeLabel: 'PYTHON • CLEANING MESSY TEXT & PRICES',
    code: `import pandas as pd

df = pd.DataFrame({
    "city": [" delhi ", "DELHI", "Mumbai "],
    "price": ["₹1,200", "₹850", "₹2,500"]
})
df["city"] = df["city"].str.strip().str.title()
df["price_num"] = df["price"].str.replace("[₹,]", "", regex=True).astype(int)
print(df)`,
    codeOutput: `     city   price  price_num
0   Delhi  ₹1,200       1200
1   Delhi    ₹850        850
2  Mumbai  ₹2,500       2500`,
    codeCaptionEn: 'Both `" delhi "` and `"DELHI"` unified into `"Delhi"`, and `"₹1,200"` became numeric `1200`.',
    codeCaptionHi: '`" delhi "` aur `"DELHI"` dono `"Delhi"` ban gaye aur `"₹1,200"` clean integer `1200` mein badal gaya.',
    tableTitle: 'Most-Used `.str` Methods in Data Cleaning',
    tableHeaders: ['Method', 'Purpose', 'Example'],
    tableRows: [
      ['.str.strip()', 'Remove leading/trailing spaces', 'df["city"].str.strip()'],
      ['.str.lower() / .str.title()', 'Standardize capitalization', 'df["email"].str.lower()'],
      ['.str.contains()', 'Keyword/regex search', 'df["note"].str.contains("refund", case=False, na=False)'],
      ['.str.split(..., expand=True)', 'Split 1 text col into multiple cols', 'df["email"].str.split("@", expand=True)'],
    ],
    tableNoteEn: 'Always pass `na=False` inside `.str.contains()` when filtering a DataFrame, otherwise `NaN` rows cause a `ValueError` in boolean indexing.',
    tableNoteHi: 'DataFrame filter karte waqt `.str.contains()` mein `na=False` zaroor pass karein, warna `NaN` par error aata hai.',
    mistakeEn: 'Running `df["city"].value_counts()` without `.str.strip().str.title()` first — resulting in `"Delhi"`, `"delhi"`, and `"Delhi "` being counted as 3 different cities!',
    mistakeHi: '`.str.strip()` aur `.str.title()` ke bina `value_counts()` chalana, jisse `"Delhi"`, `"delhi"`, aur `"Delhi "` 3 alag cities dikhne lagti hain!',
    proHabitEn: 'Standardize all categorical string columns with `.str.strip()` and consistent casing before running any `groupby()` or `merge()`.',
    proHabitHi: 'Koi bhi `groupby()` ya `merge()` karne se pehle saare text columns par `.str.strip()` aur consistent casing lagayein.',
    jobUseEn: 'Essential for cleaning CRM customer names, parsing product SKUs, extracting email domains, and converting scraped currency strings to numbers.',
    jobUseHi: 'CRM names clean karne, product SKUs todne, email domains nikalne aur scraped price text ko number banane mein roz use hota hai.',
    mcq1Question: 'Why should you pass `na=False` in `df[df["review"].str.contains("great", case=False, na=False)]`?',
    mcq1Correct: 'So missing (`NaN`) reviews evaluate to `False` instead of breaking boolean indexing.',
    mcq1Wrongs: [
      'To delete all rows containing `"great"`.',
      'To convert `"great"` into uppercase.',
      'Because `contains()` does not accept `case=False` without it.',
    ],
    mcq1Explain: 'Without `na=False`, missing values stay `NaN` in the boolean mask, which raises `ValueError: Cannot mask with non-boolean array`.',
    mcq2Question: 'What does `df["full_name"].str.split(" ", expand=True)` return?',
    mcq2Correct: 'A DataFrame with separate columns for each split part (e.g., first name and last name).',
    mcq2Wrongs: [
      'A single concatenated string.',
      'The total word count as an integer.',
      'A boolean mask of spaces.',
    ],
    mcq2Explain: '`expand=True` expands the split lists directly into separate DataFrame columns.',
    realWorldScenario:
      'Your customer feedback table has inconsistent city spellings (`"pune"`, `"Pune "`, `"PUNE"`) and prices stored as `"₹1,499"`. You clean both using `.str` methods before grouping sales by city.',
    interviewQ1: 'How do you convert a string column like `"$1,250.50"` into a numeric float column in Pandas?',
    interviewA1:
      'Use `df["amount"] = df["amount"].str.replace("[$,]", "", regex=True).astype(float)` (or `pd.to_numeric(..., errors="coerce")` for extra safety).',
    interviewQ2: 'Why is cleaning whitespace and casing critical before a `pd.merge()` on text keys?',
    interviewA2:
      'String joins are exact and case-sensitive: `"Delhi "` will fail to match `"Delhi"`, silently producing `NaN`s or lost records.',
  },
  {
    id: 182,
    modNum: 17,
    modTitle: 'Pandas for Data Science',
    topicNumInMod: 15,
    title: 'Exporting Processed Data',
    subtitle: 'SAVING CLEAN TABLES TO CSV, EXCEL, AND PARQUET THE PRO WAY',
    coreEn:
      'After cleaning and feature engineering, Pandas saves your results with `.to_csv()`, `.to_excel()`, or `.to_parquet()` — choosing the right format preserves data types, saves disk space, and avoids junk index columns.',
    coreHi:
      'Cleaning aur feature engineering ke baad Pandas `.to_csv()`, `.to_excel()`, ya `.to_parquet()` se data save karta hai — sahi format chunne se data types safe rehte hain, storage bachta hai aur faltu index column nahi aata.',
    analogyTitle: 'Packaging Food: Paper Bag vs Vacuum-Sealed Container',
    analogyEn:
      'CSV is a simple paper bag — anyone can open it, even Excel or Notepad, but it forgets column data types. Parquet is a vacuum-sealed container — 5× smaller, 10× faster to re-open, and remembers every exact data type.',
    analogyHi:
      'CSV ek simple paper bag hai — koi bhi (Excel/Notepad) khol sakta hai par data types bhool jaata hai. Parquet ek vacuum-sealed box hai — 5× chhota, 10× tez aur har column ka exact data type yaad rakhta hai.',
    steps: [
      {
        title: 'Run Final Quality Checks',
        en: 'Verify `df.shape`, `df.isna().sum()`, and `df.dtypes` before writing to disk.',
        hi: 'File save karne se pehle final `df.shape`, `df.isna().sum()`, aur `df.dtypes` check karein.',
      },
      {
        title: 'Export CSV Without Junk Index',
        en: 'Always pass `index=False` in `df.to_csv("clean_sales.csv", index=False)` to avoid `"Unnamed: 0"`.',
        hi: 'CSV save karte waqt hamesha `index=False` lagayein taaki `"Unnamed: 0"` wala junk column na bane.',
      },
      {
        title: 'Choose Format for Your Audience',
        en: 'Share `.xlsx` with business teams, `.csv` for universal sharing, and `.parquet` for ML/data-engineering pipelines.',
        hi: 'Business teams ko `.xlsx`, universal sharing ke liye `.csv`, aur ML/pipelines ke liye `.parquet` dein.',
      },
      {
        title: 'Never Overwrite Raw Data',
        en: 'Save outputs into a separate `data/processed/` folder with clear versioned or dated filenames.',
        hi: 'Raw data file ko kabhi overwrite na karein; hamesha alag `data/processed/` folder mein save karein.',
      },
    ],
    codeLabel: 'PYTHON • CLEAN EXPORT TO CSV & PARQUET',
    code: `import pandas as pd

clean_df = pd.DataFrame({"city": ["Delhi", "Pune"], "total_sales": [1200, 750]})

csv_preview = clean_df.to_csv(index=False)
print("CSV output (index=False):")
print(csv_preview.strip())`,
    codeOutput: `CSV output (index=False):
city,total_sales
Delhi,1200
Pune,750`,
    codeCaptionEn: 'With `index=False`, the exported CSV has only the clean business columns — no extra `0, 1` column.',
    codeCaptionHi: '`index=False` lagane se exported CSV mein sirf clean columns aate hain — extra `0, 1` index column nahi.',
    tableTitle: 'Choosing the Best Export Format',
    tableHeaders: ['Format', 'Pandas Method', 'Pros & Best Audience'],
    tableRows: [
      ['CSV', 'df.to_csv("out.csv", index=False)', 'Universal, human-readable; loses dtypes'],
      ['Excel', 'df.to_excel("out.xlsx", index=False)', 'Best for managers & multi-tab business reports'],
      ['Parquet', 'df.to_parquet("out.parquet", index=False)', 'Compressed, super-fast, preserves dtypes (ML/DE)'],
      ['JSON', 'df.to_json("out.json", orient="records")', 'Best for web APIs and nested records'],
    ],
    tableNoteEn: 'Use `with pd.ExcelWriter("report.xlsx") as writer:` to export multiple DataFrames into different tabs of one Excel file.',
    tableNoteHi: 'Ek hi Excel file mein alag-alag tabs banane ke liye `pd.ExcelWriter("report.xlsx")` context manager use karein.',
    mistakeEn: 'Forgetting `index=False` in `df.to_csv()`, which writes an unwanted extra column that re-imports later as `"Unnamed: 0"`.',
    mistakeHi: '`df.to_csv()` mein `index=False` bhool jana, jisse agli baar load karne par `"Unnamed: 0"` naam ka faltu column aa jaata hai.',
    proHabitEn: 'Always pass `index=False`, keep `data/raw/` read-only, and use Parquet for intermediate datasets in Python pipelines.',
    proHabitHi: 'Hamesha `index=False` lagayein, `data/raw/` ko untouched rakhein, aur Python pipelines ke beech `.parquet` use karein.',
    jobUseEn: 'Used at the end of every ETL notebook to hand off clean reporting tables to Power BI/Tableau or feature tables to ML training jobs.',
    jobUseHi: 'Har ETL notebook ke end mein Power BI/Tableau ko clean reporting tables ya ML team ko feature tables dene ke liye use hota hai.',
    mcq1Question: 'Why should you almost always include `index=False` when calling `df.to_csv("clean.csv", index=False)`?',
    mcq1Correct: 'To prevent Pandas from writing the 0..N row numbers as an unwanted extra column (`Unnamed: 0`).',
    mcq1Wrongs: [
      'Because `to_csv()` crashes without `index=False`.',
      'To delete the column headers from the file.',
      'To compress the file into a ZIP archive.',
    ],
    mcq1Explain: 'Unless your index holds meaningful IDs or dates, writing default 0..N row numbers creates clutter when re-imported.',
    mcq2Question: 'Which file format is smallest, fastest to read back in Pandas, and preserves exact column data types (like datetime and int64)?',
    mcq2Correct: 'Parquet (.parquet)',
    mcq2Wrongs: ['Plain CSV (.csv)', 'Plain Text (.txt)', 'Word Document (.docx)'],
    mcq2Explain: 'Apache Parquet is a columnar binary format built for analytics — it compresses tightly and stores exact schema metadata.',
    realWorldScenario:
      'You finished cleaning a 2-million-row transaction table. Exporting to Parquet instead of CSV shrinks the file from 450 MB to 65 MB and cuts reload time from 12 seconds to 0.8 seconds.',
    interviewQ1: 'Why do data engineers and data scientists prefer Parquet over CSV for large datasets?',
    interviewA1:
      'Parquet is columnar, compressed, preserves exact data types/schemas, and allows reading only selected columns from disk without scanning the whole file.',
    interviewQ2: 'How can you export two DataFrames (`summary_df` and `details_df`) into two sheets of a single Excel workbook?',
    interviewA2:
      'Use `with pd.ExcelWriter("report.xlsx") as writer: summary_df.to_excel(writer, sheet_name="Summary", index=False); details_df.to_excel(writer, sheet_name="Details", index=False)`.',
  },
  // =========================================================================
  // MODULE 18: SQL for Data Science (IDs 183–197)
  // =========================================================================
  {
    id: 183,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 1,
    title: 'What Is a Relational Database?',
    subtitle: 'STORING MILLIONS OF CONNECTED RECORDS SAFELY WITHOUT DUPLICATION',
    coreEn:
      'A relational database (RDBMS like PostgreSQL, MySQL, or SQL Server) stores structured data in linked tables so thousands of users can read and update records reliably at the same time.',
    coreHi:
      'Relational database (jaise PostgreSQL, MySQL, SQL Server) structured data ko aapas mein jude hue tables mein store karta hai taaki hazaaro users ek saath safely data read aur update kar sakein.',
    analogyTitle: 'School Filing Cabinet with Linked Registers',
    analogyEn:
      'Instead of repeating a student’s home address and parent phone number on every single exam sheet, a school keeps one Student Register and links Exam Sheets to it using Roll Number. Updating an address in one place fixes it everywhere.',
    analogyHi:
      'Har exam sheet par student ka ghar ka pata baar-baar likhne ke bajaye school ek Student Register rakhta hai aur Exam Sheet ko Roll Number se link karta hai. Ek jagah address badalne par har jagah sahi dikhta hai.',
    steps: [
      {
        title: 'Separate Entities into Tables',
        en: 'Store Customers, Products, and Orders in their own focused tables instead of one giant repeating sheet.',
        hi: 'Ek badi repeating sheet ke bajaye Customers, Products aur Orders ko alag-alag clean tables mein rakhein.',
      },
      {
        title: 'Link Tables with IDs',
        en: 'Connect `orders.customer_id` to `customers.customer_id` so relationships stay accurate.',
        hi: '`orders.customer_id` ko `customers.customer_id` se link karein taaki rishta hamesha accurate rahe.',
      },
      {
        title: 'Enforce Rules & ACID Safety',
        en: 'RDBMS enforces data types, uniqueness, and ACID transactions (no half-completed bank transfers).',
        hi: 'RDBMS strict data types, uniqueness aur ACID safety guarantee karta hai (jaise bank transfer kabhi aadha nahi atakta).',
      },
      {
        title: 'Query On Demand with SQL',
        en: 'Pull exact filtered slices of data using SQL without downloading the entire database.',
        hi: 'Poora database download kiye bina SQL se sirf zaroori data seconds mein nikal lein.',
      },
    ],
    codeLabel: 'POSTGRESQL • CHECKING TABLES IN A DATABASE',
    code: `SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;`,
    codeOutput: `table_name
----------
customers
orders
products`,
    codeCaptionEn: 'A real e-commerce relational database separates `customers`, `orders`, and `products` cleanly.',
    codeCaptionHi: 'Ek asli e-commerce relational database `customers`, `orders`, aur `products` ko alag clean tables mein rakhta hai.',
    tableTitle: 'Flat Spreadsheet vs Relational Database',
    tableHeaders: ['Feature', 'Flat Spreadsheet (CSV/Excel)', 'Relational Database (PostgreSQL)'],
    tableRows: [
      ['Data Duplication', 'High (customer info repeated per order)', 'Minimal (normalized linked tables)'],
      ['Scale', 'Struggles past ~500k rows', 'Handles tens of millions of rows'],
      ['Multi-User Edits', 'File locking & overwrite risks', 'Safe concurrent ACID transactions'],
      ['Data Integrity', 'Anyone can type text in a price cell', 'Strict schema types & constraints'],
    ],
    tableNoteEn: 'ACID stands for Atomicity, Consistency, Isolation, Durability — the foundation of trustworthy enterprise databases.',
    tableNoteHi: 'ACID (Atomicity, Consistency, Isolation, Durability) har reliable bank aur enterprise database ki neev hai.',
    mistakeEn: 'Treating a relational database like a single giant Excel sheet by copying customer names and addresses into every single order row.',
    mistakeHi: 'Relational database ko giant Excel sheet samajhkar har order row mein customer ka poora naam aur address dobara copy karna.',
    proHabitEn: 'Understand the database ER diagram (how tables connect) before writing your first `SELECT` query.',
    proHabitHi: 'Pehli `SELECT` query likhne se pehle hamesha tables ke beech ka connection (ER diagram) samajh lein.',
    jobUseEn: 'Almost every company stores its live app data (users, payments, subscriptions) in PostgreSQL/MySQL; data scientists pull training datasets directly from these databases.',
    jobUseHi: 'Lagbhag har company ka live app data (users, payments, orders) PostgreSQL/MySQL mein rehta hai; data scientists wahin se data pull karte hain.',
    mcq1Question: 'Why do relational databases split data into separate linked tables (like `customers` and `orders`)?',
    mcq1Correct: 'To avoid repeating data, save storage, and prevent update inconsistencies.',
    mcq1Wrongs: [
      'Because a table can only hold 10 rows.',
      'To make queries harder for beginners.',
      'Because SQL cannot read more than 2 columns.',
    ],
    mcq1Explain: 'Splitting entities (normalization) means updating a customer’s email in one row automatically reflects across all their orders.',
    mcq2Question: 'What does the "A" in ACID database transactions guarantee?',
    mcq2Correct: 'Atomicity — a transaction succeeds completely or rolls back completely (never half-done).',
    mcq2Wrongs: [
      'Alphabetical sorting of all columns.',
      'Automatic deletion of old backups.',
      'Access without passwords.',
    ],
    mcq2Explain: 'Atomicity ensures multi-step operations (like debiting account A and crediting account B) either both succeed or both undo.',
    realWorldScenario:
      'A fintech startup moves from shared Google Sheets to PostgreSQL so 50 support agents and the payment app can update customer balances concurrently without data corruption.',
    interviewQ1: 'What is a Relational Database Management System (RDBMS)? Give 3 examples.',
    interviewA1:
      'An RDBMS is software that stores structured data in related tables with enforced schemas and ACID transactions. Popular examples include PostgreSQL, MySQL, and Microsoft SQL Server.',
    interviewQ2: 'What problem does database normalization solve?',
    interviewA2:
      'Normalization eliminates redundant data storage and prevents update, insert, and delete anomalies by giving each entity its own table linked by keys.',
  },
  {
    id: 184,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 2,
    title: 'Tables, Rows, Columns and Keys',
    subtitle: 'PRIMARY KEYS, FOREIGN KEYS, AND SCHEMAS EXPLAINED FROM ZERO',
    coreEn:
      'A table has **columns** (attributes with strict data types) and **rows** (individual records). A **Primary Key (PK)** uniquely identifies each row, while a **Foreign Key (FK)** links one table to another table’s PK.',
    coreHi:
      'Ek table mein **columns** (strict data type wale attributes) aur **rows** (individual records) hote hain. **Primary Key (PK)** har row ki unique ID hoti hai, aur **Foreign Key (FK)** ek table ko doosre table ke PK se jodti hai.',
    analogyTitle: 'Aadhaar Number (Primary Key) on a Bank Form (Foreign Key)',
    analogyEn:
      'Your Aadhaar/Passport number uniquely identifies YOU in the national registry (Primary Key — never duplicated, never blank). When you write that same number on a bank loan form, it acts as a Foreign Key pointing straight back to your profile.',
    analogyHi:
      'Aapka Aadhaar/Roll Number national register mein aapko uniquely pehchanta hai (Primary Key — kabhi repeat ya blank nahi). Jab wahi number bank form mein likha jaata hai, toh woh Foreign Key ban kar aapki profile se link hota hai.',
    steps: [
      {
        title: 'Define Columns & Data Types',
        en: 'Give every column a strict type (`INT`, `VARCHAR`, `NUMERIC(10,2)`, `DATE`, `BOOLEAN`).',
        hi: 'Har column ko exact data type dein (`INT`, `VARCHAR`, `NUMERIC(10,2)`, `DATE`, `BOOLEAN`).',
      },
      {
        title: 'Assign a Primary Key (`PRIMARY KEY`)',
        en: 'Pick a unique, non-null column (like `customer_id`) so every row has one unmistakable ID.',
        hi: 'Ek unique, non-null column (jaise `customer_id`) ko `PRIMARY KEY` banayein.',
      },
      {
        title: 'Connect via Foreign Key (`REFERENCES`)',
        en: 'Add `customer_id INT REFERENCES customers(customer_id)` in `orders` so orphan orders cannot exist.',
        hi: '`orders` table mein `customer_id REFERENCES customers(customer_id)` lagayein taaki galat/orphan IDs na aayein.',
      },
      {
        title: 'Add Constraints (`NOT NULL`, `UNIQUE`, `CHECK`)',
        en: 'Prevent bad data at the gate (e.g., `CHECK (amount >= 0)` stops negative prices).',
        hi: '`NOT NULL`, `UNIQUE`, aur `CHECK (amount >= 0)` lagakar galat data ko entry par hi rok dein.',
      },
    ],
    codeLabel: 'POSTGRESQL • PRIMARY KEY & FOREIGN KEY SCHEMA',
    code: `CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    full_name   VARCHAR(100) NOT NULL,
    email       VARCHAR(120) UNIQUE
);

CREATE TABLE orders (
    order_id    INT PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    amount      NUMERIC(10, 2) CHECK (amount >= 0)
);`,
    codeOutput: `CREATE TABLE
CREATE TABLE`,
    codeCaptionEn: 'PostgreSQL now guarantees every `order` points to a real `customer_id` and has a non-negative `amount`.',
    codeCaptionHi: 'PostgreSQL ab guarantee karta hai ki har `order` ek asli `customer_id` se juda ho aur `amount` negative na ho.',
    tableTitle: 'Primary Key vs Foreign Key Comparison',
    tableHeaders: ['Rule', 'Primary Key (PK)', 'Foreign Key (FK)'],
    tableRows: [
      ['Purpose', 'Uniquely identifies each row in its own table', 'Links a row to a PK in another table'],
      ['Duplicates Allowed?', 'Never (strictly unique)', 'Yes (one customer can have many orders)'],
      ['NULL Allowed?', 'Never (`NOT NULL`)', 'Sometimes (if relationship is optional)'],
      ['Example', 'customers.customer_id', 'orders.customer_id'],
    ],
    tableNoteEn: 'A **Composite Primary Key** combines two columns (like `(order_id, product_id)`) when one column alone isn’t unique.',
    tableNoteHi: 'Jab ek column unique na ho, toh do columns milakar `(order_id, product_id)` **Composite Primary Key** banayi jaati hai.',
    mistakeEn: 'Using a person’s `full_name` as a Primary Key — two different customers can both be named `"Rahul Sharma"`, breaking uniqueness!',
    mistakeHi: 'Kisi insaan ke `full_name` ko Primary Key banana — do alag customers ka naam `"Rahul Sharma"` ho sakta hai!',
    proHabitEn: 'Always check which column is the PK and which columns are FKs before writing any `JOIN` — it tells you whether the join is 1-to-1 or 1-to-many.',
    proHabitHi: 'Koi bhi `JOIN` likhne se pehle PK aur FK zaroor dekhein — isse 1-to-1 ya 1-to-many relationship turant clear ho jaati hai.',
    jobUseEn: 'Understanding keys is the #1 skill needed to join 5+ warehouse tables cleanly without accidentally duplicating revenue.',
    jobUseHi: 'Keys ki sahi samajh ke bina 5+ warehouse tables ko join karne par revenue double-count hone ka sabse bada khatra rehta hai.',
    mcq1Question: 'Which statement is ALWAYS true about a Primary Key column?',
    mcq1Correct: 'Every value must be unique and cannot be NULL.',
    mcq1Wrongs: [
      'It can contain duplicate values for repeat customers.',
      'It must always be a text name.',
      'A table can have 5 separate Primary Keys.',
    ],
    mcq1Explain: 'By definition, a Primary Key uniquely identifies every row, so duplicates and NULLs are forbidden.',
    mcq2Question: 'In an e-commerce database, can `orders.customer_id` (a Foreign Key) contain the same `customer_id` multiple times?',
    mcq2Correct: 'Yes — one customer can place many orders (1-to-many relationship).',
    mcq2Wrongs: [
      'No — Foreign Keys can never repeat.',
      'Only if the customer’s name is NULL.',
      'Only when `order_id` is also duplicated.',
    ],
    mcq2Explain: 'Foreign Keys frequently repeat on the "many" side of a one-to-many relationship.',
    realWorldScenario:
      'Before joining `orders` with `order_items`, you inspect their keys and discover `orders` has 1 row per `order_id` (PK) while `order_items` has multiple rows per `order_id` (FK).',
    interviewQ1: 'What is the difference between a Primary Key and a UNIQUE constraint?',
    interviewA1:
      'A table can have only one Primary Key and it never allows NULLs. A table can have multiple UNIQUE constraints (e.g., `email` and `phone`), and SQL typically permits NULLs in UNIQUE columns.',
    interviewQ2: 'What is referential integrity?',
    interviewA2:
      'Referential integrity is enforced by Foreign Keys to ensure that a child table cannot reference a parent record that does not exist (preventing orphan rows).',
  },
  {
    id: 185,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 3,
    title: 'Introduction to SQL and PostgreSQL',
    subtitle: 'DECLARATIVE QUERYING, SQL CLAUSE ORDER, AND POSTGRESQL BASICS',
    coreEn:
      'SQL (Structured Query Language) is a declarative language where you describe *what* data you want, and PostgreSQL’s query planner figures out the fastest way to fetch it.',
    coreHi:
      'SQL (Structured Query Language) ek declarative language hai jahan aap sirf yeh batate hain ki *kya* data chahiye, aur PostgreSQL ka query engine khud sabse tez tarika dhoondh kar data laata hai.',
    analogyTitle: 'Ordering at a Restaurant vs Cooking in the Kitchen',
    analogyEn:
      'In Python loops, you tell the chef every single step ("chop onion, heat pan..."). In SQL, you simply tell the waiter *what* you want ("Top 5 vegetarian dishes under ₹300"), and the PostgreSQL kitchen optimizes how to make it fast.',
    analogyHi:
      'Python loops mein aap chef ko har step batate hain. SQL mein aap waiter ko sirf *kya* chahiye batate hain ("₹300 ke andar top 5 veg dishes"), aur PostgreSQL kitchen khud fast execution karta hai.',
    steps: [
      {
        title: 'Write in Standard Clause Order',
        en: 'Always write queries in SQL’s syntax order: `SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT`.',
        hi: 'SQL query hamesha fixed syntax order mein likhein: `SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT`.',
      },
      {
        title: 'Know SQL’s Execution Order',
        en: 'PostgreSQL actually executes `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT`!',
        hi: 'Yaad rakhein PostgreSQL andar se `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT` order mein run karta hai!',
      },
      {
        title: 'Use Clean Formatting & Comments',
        en: 'Uppercase SQL keywords (`SELECT`, `FROM`), put each clause on a new line, and end statements with `;`.',
        hi: 'SQL keywords (`SELECT`, `FROM`) uppercase mein likhein, har clause nayi line par aur end mein `;` lagayein.',
      },
      {
        title: 'Connect PostgreSQL to Python',
        en: 'Use `psycopg2` or `SQLAlchemy` + `pd.read_sql()` when pulling SQL query outputs into Pandas.',
        hi: 'SQL results ko Pandas mein laane ke liye `SQLAlchemy` aur `pd.read_sql()` use karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • COMPLETE CLAUSE ORDER EXAMPLE',
    code: `-- Top 2 cities by total revenue for paid orders
SELECT city, SUM(amount) AS total_revenue
FROM orders
WHERE status = 'paid'
GROUP BY city
HAVING SUM(amount) >= 1000
ORDER BY total_revenue DESC
LIMIT 2;`,
    codeOutput: `city   | total_revenue
-------+--------------
Mumbai |       4500.00
Delhi  |       3200.00`,
    codeCaptionEn: 'Notice why `WHERE` filters raw rows (`status = \'paid\'`) before `GROUP BY`, while `ORDER BY` can use the `SELECT` alias `total_revenue`.',
    codeCaptionHi: 'Dekhiye `WHERE` pehle raw rows filter karta hai, aur `ORDER BY` baad mein `SELECT` ka alias `total_revenue` use kar sakta hai.',
    tableTitle: 'SQL Writing Order vs Logical Execution Order',
    tableHeaders: ['Writing Order', 'Execution Step', 'Why It Matters'],
    tableRows: [
      ['1. SELECT', '5th (after HAVING)', 'Aliases created in SELECT cannot be used in WHERE'],
      ['2. FROM', '1st', 'Database locates and joins source tables first'],
      ['3. WHERE', '2nd', 'Filters individual rows early for speed'],
      ['4. ORDER BY / LIMIT', '6th & 7th', 'Sorts final output and trims to top N rows'],
    ],
    tableNoteEn: 'In PostgreSQL, single quotes `\'Delhi\'` are for string values, while double quotes `"Order Date"` are for identifiers/column names.',
    tableNoteHi: 'PostgreSQL mein string values ke liye single quotes `\'Delhi\'` aur column names ke liye double quotes `"Order Date"` use hote hain.',
    mistakeEn: 'Trying to filter by a `SELECT` alias inside `WHERE` (e.g., `SELECT price * 1.18 AS total FROM items WHERE total > 500`), which fails because `WHERE` runs before `SELECT`.',
    mistakeHi: '`SELECT` mein banaye gaye alias ko `WHERE` mein use karna — yeh fail hota hai kyunki `WHERE` `SELECT` se pehle chalta hai.',
    proHabitEn: 'Memorize SQL’s logical execution order (`FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT`); it solves 90% of beginner SQL errors.',
    proHabitHi: 'SQL ka logical execution order (`FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT`) yaad kar lein — 90% errors wahi solve ho jaate hain.',
    jobUseEn: 'PostgreSQL is the world’s most loved open-source SQL database, powering startups, fintechs, and analytics pipelines everywhere.',
    jobUseHi: 'PostgreSQL duniya ka sabse popular open-source database hai jo startups, fintechs aur data science pipelines mein sabse zyada use hota hai.',
    mcq1Question: 'In PostgreSQL’s logical execution order, which clause runs FIRST?',
    mcq1Correct: 'FROM',
    mcq1Wrongs: ['SELECT', 'ORDER BY', 'LIMIT'],
    mcq1Explain: 'The database must first identify the source table(s) in `FROM` before filtering (`WHERE`) or projecting columns (`SELECT`).',
    mcq2Question: 'Why does `SELECT amount * 2 AS doubled FROM orders WHERE doubled > 100;` fail in PostgreSQL?',
    mcq2Correct: 'Because `WHERE` executes before `SELECT`, so the alias `doubled` does not exist yet.',
    mcq2Wrongs: [
      'Because PostgreSQL cannot multiply by 2.',
      'Because `AS` is not valid SQL syntax.',
      'Because `WHERE` only works on text columns.',
    ],
    mcq2Explain: 'Write `WHERE amount * 2 > 100` (or wrap in a CTE/subquery) because `SELECT` aliases are evaluated after `WHERE`.',
    realWorldScenario:
      'You join a new analytics team using PostgreSQL. Knowing execution order lets you debug a colleague’s broken query in 10 seconds.',
    interviewQ1: 'What is the logical execution order of a SQL query?',
    interviewA1:
      '`FROM` (and `JOIN`) -> `WHERE` -> `GROUP BY` -> `HAVING` -> `SELECT` -> `DISTINCT` -> `ORDER BY` -> `LIMIT`.',
    interviewQ2: 'Why is SQL called a declarative language?',
    interviewA2:
      'Because you specify *what* result you want (filtering, grouping, sorting rules) rather than *how* to loop through disk blocks; the database optimizer chooses the execution plan.',
  },
  {
    id: 186,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 4,
    title: 'SELECT and DISTINCT',
    subtitle: 'CHOOSING COLUMNS, RENAMING WITH ALIASES, AND FINDING UNIQUE VALUES',
    coreEn:
      '`SELECT` picks exact columns or calculated expressions from a table, `AS` gives them clear business names, and `SELECT DISTINCT` removes duplicate values to show unique categories.',
    coreHi:
      '`SELECT` table se exact columns ya calculated values nikalta hai, `AS` unhe clean naam deta hai, aur `SELECT DISTINCT` duplicate values hatakar sirf unique categories dikhata hai.',
    analogyTitle: 'Choosing Specific Dishes from a Buffet + Listing Unique Cuisines',
    analogyEn:
      '`SELECT *` piles every single dish from a 50-item buffet onto your plate. `SELECT name, price` takes only what you need. `SELECT DISTINCT cuisine` lists each cuisine name just once.',
    analogyHi:
      '`SELECT *` buffet se saari 50 dishes plate mein bharne jaisa hai. `SELECT name, price` sirf zaroori items lena hai. `SELECT DISTINCT city` har city ka naam sirf ek baar dikhata hai.',
    steps: [
      {
        title: 'List Explicit Columns',
        en: 'Write `SELECT order_id, city, amount` instead of `SELECT *` in production queries.',
        hi: 'Production queries mein `SELECT *` ke bajaye hamesha exact column names likhein.',
      },
      {
        title: 'Compute & Alias Expressions',
        en: 'Create readable derived outputs like `amount * 0.18 AS gst_amount`.',
        hi: '`amount * 0.18 AS gst_amount` likhkar clean calculated columns banayein.',
      },
      {
        title: 'Find Unique Values with `DISTINCT`',
        en: 'Run `SELECT DISTINCT city FROM customers;` to audit all unique categories and spot typos.',
        hi: 'Saari unique categories aur typos check karne ke liye `SELECT DISTINCT city FROM customers;` chalayein.',
      },
      {
        title: 'Count Uniques with `COUNT(DISTINCT ...)`',
        en: 'Use `SELECT COUNT(DISTINCT customer_id) FROM orders;` to count active unique buyers.',
        hi: 'Unique buyers ginne ke liye `COUNT(DISTINCT customer_id)` use karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • SELECT, ALIASES & DISTINCT',
    code: `SELECT DISTINCT city
FROM customers
ORDER BY city;

SELECT
    product_name,
    price,
    ROUND(price * 1.18, 2) AS price_with_gst
FROM products;`,
    codeOutput: `city
------
Delhi
Mumbai
Pune

product_name | price  | price_with_gst
-------------+--------+---------------
Laptop Stand | 1000.0 |        1180.00
USB-C Hub    | 1500.0 |        1770.00`,
    codeCaptionEn: '`DISTINCT` lists each city once, and `AS price_with_gst` gives the calculated column a clean label.',
    codeCaptionHi: '`DISTINCT` ne har city ek baar dikhayi aur `AS price_with_gst` ne calculated column ko clean header diya.',
    tableTitle: 'SELECT & DISTINCT Patterns',
    tableHeaders: ['SQL Pattern', 'What It Returns', 'Best For'],
    tableRows: [
      ['SELECT col1, col2', 'Only requested columns', 'Fast, clean production queries'],
      ['SELECT DISTINCT col', 'Unique values of that column', 'Auditing categories & spellings'],
      ['SELECT DISTINCT c1, c2', 'Unique combinations of (c1, c2)', 'Finding unique city-category pairs'],
      ['COUNT(DISTINCT user_id)', 'Number of unique users', 'Active user / buyer KPIs'],
    ],
    tableNoteEn: '`DISTINCT` applies to the **entire row** of selected columns, not just the first column after `DISTINCT`.',
    tableNoteHi: '`DISTINCT` sirf pehle column par nahi, balki select kiye gaye **poore row combination** par apply hota hai.',
    mistakeEn: 'Using `SELECT *` on a 120-column warehouse table in production scripts — it wastes network bandwidth and breaks downstream pipelines when schemas change.',
    mistakeHi: '120 columns wale warehouse table par production mein `SELECT *` chalana — isse query slow hoti hai aur schema badalne par pipeline toot sakti hai.',
    proHabitEn: 'Use `SELECT * ... LIMIT 5` only for quick exploration; always list explicit column names in saved SQL queries.',
    proHabitHi: '`SELECT * ... LIMIT 5` sirf quick check ke liye use karein; final queries mein hamesha explicit column names likhein.',
    jobUseEn: 'Every SQL exploration begins with `SELECT DISTINCT` on status/region columns to verify what values exist before building filters.',
    jobUseHi: 'Har SQL analysis ki shuruat `SELECT DISTINCT` se hoti hai taaki filter lagane se pehle pata chale table mein kaunsi categories hain.',
    mcq1Question: 'What does `SELECT DISTINCT city, status FROM orders;` return?',
    mcq1Correct: 'Every unique combination of `(city, status)` pairs.',
    mcq1Wrongs: [
      'Only distinct cities with a random status.',
      'Total count of rows in `orders`.',
      'A syntax error because `DISTINCT` only accepts one column.',
    ],
    mcq1Explain: '`DISTINCT` deduplicates across all columns listed in the `SELECT` clause together.',
    mcq2Question: 'Why is `SELECT *` discouraged in production SQL queries?',
    mcq2Correct: 'It fetches unnecessary columns, increases I/O cost, and can break downstream code if columns are added or reordered.',
    mcq2Wrongs: [
      'Because PostgreSQL does not support `*`.',
      'Because `SELECT *` deletes duplicate rows.',
      'Because `SELECT *` cannot be used with `WHERE`.',
    ],
    mcq2Explain: 'Explicit column lists keep queries fast (especially on columnar warehouses) and resilient to schema changes.',
    realWorldScenario:
      'Before calculating paid revenue, you run `SELECT DISTINCT status FROM orders;` and discover both `"Paid"` and `"paid "` exist — catching a data-quality bug immediately.',
    interviewQ1: 'What is the difference between `COUNT(*)` and `COUNT(DISTINCT customer_id)`?',
    interviewA1:
      '`COUNT(*)` counts every row (including repeats and NULLs), whereas `COUNT(DISTINCT customer_id)` counts only unique non-NULL customer IDs.',
    interviewQ2: 'In PostgreSQL, what is `SELECT DISTINCT ON (col)` used for?',
    interviewA2:
      'PostgreSQL’s `DISTINCT ON (customer_id)` keeps only the very first row per `customer_id` according to `ORDER BY`, which is handy for fetching each customer’s latest order.',
  },
  {
    id: 187,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 5,
    title: 'WHERE, AND, OR and IN',
    subtitle: 'FILTERING ROWS WITH PRECISION, NULL CHECKS, BETWEEN, AND ILIKE',
    coreEn:
      'The `WHERE` clause filters rows before grouping or output using comparisons (`=`, `>`, `<>`), logical operators (`AND`, `OR`, `NOT`), list membership (`IN`), ranges (`BETWEEN`), pattern matching (`LIKE`/`ILIKE`), and `IS NULL`.',
    coreHi:
      '`WHERE` clause grouping se pehle rows ko filter karta hai — comparisons (`=`, `>`, `<>`), `AND`/`OR`, list ke liye `IN`, range ke liye `BETWEEN`, text search ke liye `LIKE`/`ILIKE`, aur blanks ke liye `IS NULL` use karke.',
    analogyTitle: 'Airport Security Gate with Specific Entry Rules',
    analogyEn:
      'A boarding gate only lets passengers through who match exact rules: `flight IN (\'AI101\', \'AI102\') AND boarding_pass IS NOT NULL`. Everyone else is filtered out right at the gate.',
    analogyHi:
      'Airport gate par sirf wahi passengers andar jaate hain jo rules match karein: `flight IN (\'AI101\', \'AI102\') AND boarding_pass IS NOT NULL`. Baaki sab wahin filter ho jaate hain.',
    steps: [
      {
        title: 'Combine `AND` & `OR` with Parentheses',
        en: '`AND` has higher precedence than `OR`, so always wrap `OR` blocks in parentheses `(...)`.',
        hi: '`AND` ki priority `OR` se zyada hoti hai, isliye `OR` conditions ko hamesha `(...)` mein band karein.',
      },
      {
        title: 'Use `IN` & `BETWEEN` for Clean Filters',
        en: 'Write `city IN (\'Delhi\', \'Pune\')` instead of chaining multiple `OR`s, and `amount BETWEEN 100 AND 500`.',
        hi: 'Kai `OR` likhne ke bajaye `city IN (\'Delhi\', \'Pune\')` aur range ke liye `BETWEEN 100 AND 500` use karein.',
      },
      {
        title: 'Match Text with `ILIKE` (PostgreSQL)',
        en: 'Use `name ILIKE \'a%\'` for case-insensitive pattern matching (`%` = any chars, `_` = 1 char).',
        hi: 'Case-insensitive text search ke liye PostgreSQL mein `ILIKE \'a%\'` use karein.',
      },
      {
        title: 'Check Blanks with `IS NULL`',
        en: 'Never write `= NULL`; always write `IS NULL` or `IS NOT NULL`.',
        hi: 'Kabhi `= NULL` na likhein; hamesha `IS NULL` ya `IS NOT NULL` use karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • PRECISION ROW FILTERING',
    code: `SELECT order_id, city, amount
FROM orders
WHERE city IN ('Delhi', 'Mumbai')
  AND amount BETWEEN 500 AND 2000
  AND delivered_at IS NOT NULL;`,
    codeOutput: `order_id | city   | amount
---------+--------+--------
     104 | Delhi  | 1200.00
     109 | Mumbai |  850.00`,
    codeCaptionEn: 'Combining `IN`, `BETWEEN`, and `IS NOT NULL` reads almost like plain English.',
    codeCaptionHi: '`IN`, `BETWEEN`, aur `IS NOT NULL` ko milakar likhi query bilkul plain English jaisi padhi jaati hai.',
    tableTitle: 'Essential SQL `WHERE` Operators',
    tableHeaders: ['Operator', 'Meaning', 'Example'],
    tableRows: [
      ['IN (...)', 'Matches any value in list', "status IN ('paid', 'shipped')"],
      ['BETWEEN a AND b', 'Inclusive range [a, b]', 'age BETWEEN 18 AND 30'],
      ['ILIKE', 'Case-insensitive wildcard match (PG)', "email ILIKE '%@gmail.com'"],
      ['IS NULL / IS NOT NULL', 'Tests for missing values', 'discount IS NOT NULL'],
    ],
    tableNoteEn: 'In SQL, `NULL` means "unknown", so `col = NULL` and `col <> NULL` both evaluate to UNKNOWN (never True).',
    tableNoteHi: 'SQL mein `NULL` ka matlab "unknown" hai, isliye `col = NULL` kabhi True nahi hota — hamesha `IS NULL` likhein.',
    mistakeEn: 'Writing `WHERE city = \'Delhi\' OR city = \'Pune\' AND amount > 500` without parentheses — SQL evaluates `AND` first and returns ALL Delhi rows regardless of amount!',
    mistakeHi: 'Bina brackets ke `city = \'Delhi\' OR city = \'Pune\' AND amount > 500` likhna — isse `AND` pehle chalta hai aur saare Delhi orders (bhale hi amount < 500 ho) aa jaate hain!',
    proHabitEn: 'Always wrap `OR` conditions in parentheses (or replace them with `IN (...)`), and always use `IS NULL` / `IS NOT NULL`.',
    proHabitHi: '`OR` conditions ko hamesha `(...)` mein band karein (ya `IN (...)` use karein) aur NULL ke liye `IS NULL` likhein.',
    jobUseEn: 'Used in every single analytics query to isolate active customers, exclude cancelled/test orders, and slice date ranges.',
    jobUseHi: 'Har analytics query mein cancelled/test orders hatane, active users filter karne aur date ranges slice karne mein roz use hota hai.',
    mcq1Question: 'Which SQL condition correctly finds orders where `coupon_code` is missing?',
    mcq1Correct: 'WHERE coupon_code IS NULL',
    mcq1Wrongs: [
      'WHERE coupon_code = NULL',
      'WHERE coupon_code == None',
      'WHERE coupon_code IN (NULL)',
    ],
    mcq1Explain: 'In SQL three-valued logic, `= NULL` is always UNKNOWN; `IS NULL` is the only valid check for NULLs.',
    mcq2Question: 'What does `WHERE (city = \'Delhi\' OR city = \'Goa\') AND amount >= 1000` match?',
    mcq2Correct: 'Orders of ₹1,000+ from either Delhi or Goa.',
    mcq2Wrongs: [
      'All Delhi orders regardless of amount, plus Goa orders ≥ ₹1,000.',
      'Only orders that are in both Delhi and Goa at once.',
      'Orders strictly less than ₹1,000.',
    ],
    mcq2Explain: 'Parentheses force the `OR` to evaluate first, then require `amount >= 1000` for both cities.',
    realWorldScenario:
      'You need to pull all delivered orders from Delhi or Bengaluru with value between ₹1,000 and ₹5,000, excluding any internal test accounts (`email NOT ILIKE \'%@company.com\'`).',
    interviewQ1: 'What is the difference between `LIKE` and `ILIKE` in PostgreSQL?',
    interviewA1:
      '`LIKE` is case-sensitive (`\'Delhi\'` does not match `\'delhi\'`), whereas PostgreSQL’s `ILIKE` is case-insensitive.',
    interviewQ2: 'Why can `WHERE col NOT IN (1, 2, NULL)` return zero rows unexpectedly?',
    interviewA2:
      'Because `NOT IN` expands to `col <> 1 AND col <> 2 AND col <> NULL`, and `col <> NULL` evaluates to UNKNOWN for every row, making the whole condition fail!',
  },
  {
    id: 188,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 6,
    title: 'ORDER BY and LIMIT',
    subtitle: 'SORTING LEADERBOARDS, TOP-N QUERIES, AND PAGINATION WITH OFFSET',
    coreEn:
      '`ORDER BY` sorts query results ascending (`ASC`, default) or descending (`DESC`) across one or more columns, and `LIMIT` caps how many rows are returned (optionally skipping rows with `OFFSET`).',
    coreHi:
      '`ORDER BY` query results ko chhote se bade (`ASC`) ya bade se chhote (`DESC`) order mein jamata hai, aur `LIMIT` batata hai ki sirf kitni top rows chahiye (`OFFSET` se rows skip bhi kar sakte hain).',
    analogyTitle: 'IPL Points Table — Sorted by Points, Showing Top 4 Playoffs',
    analogyEn:
      'Teams are sorted by `points DESC`, and when two teams tie, `net_run_rate DESC` breaks the tie. Taking `LIMIT 4` picks the 4 playoff qualifiers.',
    analogyHi:
      'Cricket points table mein pehle `points DESC` se sort hota hai, tie hone par `net_run_rate DESC` tie todta hai, aur `LIMIT 4` se top 4 playoff teams milti hain.',
    steps: [
      {
        title: 'Sort with `ASC` or `DESC`',
        en: 'Use `ORDER BY amount DESC` for highest first, or `ASC` (default) for lowest/oldest first.',
        hi: 'Sabse bada upar rakhne ke liye `ORDER BY amount DESC` aur chhote se bade ke liye `ASC` likhein.',
      },
      {
        title: 'Add a Tie-Breaker Column',
        en: 'Write `ORDER BY amount DESC, order_id ASC` so ties always appear in a predictable order.',
        hi: 'Tie hone par predictable order rakhne ke liye `ORDER BY amount DESC, order_id ASC` likhein.',
      },
      {
        title: 'Control `NULLS LAST` in PostgreSQL',
        en: 'In PostgreSQL, `DESC` puts `NULL`s FIRST by default! Add `NULLS LAST` to keep real top values at the top.',
        hi: 'PostgreSQL mein `DESC` default mein `NULL`s ko sabse upar rakh deta hai! Asli top values upar rakhne ke liye `NULLS LAST` lagayein.',
      },
      {
        title: 'Cap Output with `LIMIT` / `OFFSET`',
        en: 'Use `LIMIT 10` for Top-10 reports or `LIMIT 10 OFFSET 10` for Page 2.',
        hi: 'Top-10 report ke liye `LIMIT 10` aur Page 2 ke liye `LIMIT 10 OFFSET 10` use karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • TOP-3 PRODUCTS WITH NULLS LAST',
    code: `SELECT product_name, rating, price
FROM products
ORDER BY rating DESC NULLS LAST, price ASC
LIMIT 3;`,
    codeOutput: `product_name  | rating | price
--------------+--------+--------
Smart Watch   |    4.9 | 4999.00
Noise Earbuds |    4.8 | 1999.00
Desk Lamp     |    4.8 | 2499.00`,
    codeCaptionEn: 'When two products tied at `4.8` rating, `price ASC` placed the cheaper ₹1,999 item first.',
    codeCaptionHi: 'Jab do products ka rating `4.8` par tie hua, tab `price ASC` ne saste ₹1,999 wale item ko upar rakha.',
    tableTitle: 'ORDER BY & LIMIT Cheat Sheet',
    tableHeaders: ['Clause', 'Effect', 'Example'],
    tableRows: [
      ['ORDER BY col DESC', 'Highest to lowest', 'ORDER BY revenue DESC'],
      ['Multi-column sort', 'Primary sort + tie-breaker', 'ORDER BY dept ASC, salary DESC'],
      ['DESC NULLS LAST', 'Keeps NULLs at bottom in PostgreSQL', 'ORDER BY rating DESC NULLS LAST'],
      ['LIMIT 5 OFFSET 5', 'Skips first 5, returns rows 6–10', 'Page 2 of a 5-row leaderboard'],
    ],
    tableNoteEn: 'Never use `LIMIT` without `ORDER BY` when you care which rows come back — database row order is not guaranteed without `ORDER BY`.',
    tableNoteHi: 'Bina `ORDER BY` ke `LIMIT` kabhi mat lagayein agar aapko specific top/latest rows chahiye — database ka default row order fixed nahi hota.',
    mistakeEn: 'Running `ORDER BY rating DESC LIMIT 5` in PostgreSQL without `NULLS LAST` and getting 5 products with `NULL` ratings at the top!',
    mistakeHi: 'PostgreSQL mein `NULLS LAST` ke bina `ORDER BY rating DESC LIMIT 5` chalana aur top 5 mein 5 `NULL` ratings aa jana!',
    proHabitEn: 'Always pair `LIMIT` with a deterministic `ORDER BY` (including a unique tie-breaker like `id`) and add `NULLS LAST` on nullable `DESC` columns.',
    proHabitHi: '`LIMIT` ke saath hamesha deterministic `ORDER BY` (tie-breaker ID ke saath) aur nullable columns par `DESC NULLS LAST` lagayein.',
    jobUseEn: 'Used in every Top-10 products dashboard, "most recent 5 logins" security check, and highest-risk churn list.',
    jobUseHi: 'Top-10 products dashboard, "last 5 logins" security check aur highest-risk customers list banane mein roz use hota hai.',
    mcq1Question: 'In PostgreSQL, where do `NULL` values appear by default when you run `ORDER BY score DESC`?',
    mcq1Correct: 'At the very TOP (first), unless you specify `NULLS LAST`.',
    mcq1Wrongs: [
      'They are automatically deleted from the table.',
      'At the very bottom automatically.',
      'In the middle next to zero.',
    ],
    mcq1Explain: 'PostgreSQL treats `NULL` as larger than any non-null value, so `DESC` places NULLs first unless `NULLS LAST` is added.',
    mcq2Question: 'Which query returns rows 11 through 20 of products sorted by highest price?',
    mcq2Correct: 'SELECT * FROM products ORDER BY price DESC LIMIT 10 OFFSET 10;',
    mcq2Wrongs: [
      'SELECT * FROM products ORDER BY price DESC LIMIT 20 OFFSET 10;',
      'SELECT * FROM products LIMIT 11 TO 20;',
      'SELECT * FROM products ORDER BY price ASC LIMIT 10;',
    ],
    mcq2Explain: '`OFFSET 10` skips rows 1–10 and `LIMIT 10` returns the next 10 rows (11–20).',
    realWorldScenario:
      'Your e-commerce homepage displays the "Top 5 Highest-Rated Headphones". Adding `NULLS LAST` prevents brand-new unrated products from hijacking the #1 spot.',
    interviewQ1: 'Why is using `LIMIT 10` without an `ORDER BY` clause risky in SQL?',
    interviewA1:
      'Relational tables have no guaranteed physical row order; without `ORDER BY`, the database may return a different arbitrary 10 rows on different runs.',
    interviewQ2: 'How do you find the second-highest salary in a table using `ORDER BY` and `LIMIT`?',
    interviewA2:
      'Use `SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;` (using `DISTINCT` so ties for first place don’t repeat).',
  },
  {
    id: 189,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 7,
    title: 'Aggregate Functions and GROUP BY',
    subtitle: 'SUMMARIZING TABLES WITH COUNT, SUM, AVG, MIN, MAX, AND GROUP BY',
    coreEn:
      'Aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) collapse many rows into summary numbers, and `GROUP BY` computes those summaries separately for each category (like per city or per month).',
    coreHi:
      'Aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) bahut saari rows ko summary numbers mein badalte hain, aur `GROUP BY` har category (jaise har city ya month) ke liye alag summary nikalta hai.',
    analogyTitle: 'Supermarket Receipt Grouped by Department',
    analogyEn:
      'Instead of reading 50 individual line items on a grocery bill, `GROUP BY department` shows you one clean total for Dairy, one for Produce, and one for Bakery.',
    analogyHi:
      '50 alag items ka lamba bill padhne ke bajaye `GROUP BY department` aapko Dairy, Vegetables aur Bakery ka alag-alag clean total dikha deta hai.',
    steps: [
      {
        title: 'Pick Grouping Columns',
        en: 'Put the category column(s) you want one row per (e.g., `city`) in both `SELECT` and `GROUP BY`.',
        hi: 'Jis category ke hisaab se summary chahiye (jaise `city`), use `SELECT` aur `GROUP BY` dono mein likhein.',
      },
      {
        title: 'Choose Aggregate Functions',
        en: 'Wrap numeric columns in `COUNT(*)`, `SUM(amount)`, `AVG(amount)`, `MIN()`, or `MAX()`.',
        hi: 'Numeric columns par `COUNT(*)`, `SUM(amount)`, `AVG(amount)`, `MIN()`, ya `MAX()` lagayein.',
      },
      {
        title: 'Remember the Golden `GROUP BY` Rule',
        en: 'Every column in `SELECT` must either be inside an aggregate function OR listed in `GROUP BY`.',
        hi: 'Golden Rule: `SELECT` ka har column ya toh aggregate function ke andar hoga YA `GROUP BY` mein likha hoga.',
      },
      {
        title: 'Know How Aggregates Handle `NULL`',
        en: '`COUNT(*)` counts all rows including NULLs, while `COUNT(col)`, `SUM(col)`, and `AVG(col)` ignore NULLs.',
        hi: '`COUNT(*)` saari rows ginta hai (NULL samet), jabki `COUNT(col)`, `SUM(col)` aur `AVG(col)` NULLs ko ignore karte hain.',
      },
    ],
    codeLabel: 'POSTGRESQL • REVENUE SUMMARY BY CITY',
    code: `SELECT
    city,
    COUNT(*) AS order_count,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value
FROM orders
GROUP BY city
ORDER BY total_revenue DESC;`,
    codeOutput: `city   | order_count | total_revenue | avg_order_value
-------+-------------+---------------+----------------
Mumbai |           5 |       4500.00 |          900.00
Delhi  |           4 |       3200.00 |          800.00
Pune   |           2 |       1100.00 |          550.00`,
    codeCaptionEn: '`city` is in `GROUP BY`, and all other selected columns are aggregated (`COUNT`, `SUM`, `AVG`).',
    codeCaptionHi: '`city` `GROUP BY` mein hai aur baaki sabhi selected columns aggregated (`COUNT`, `SUM`, `AVG`) hain.',
    tableTitle: 'Core SQL Aggregate Functions',
    tableHeaders: ['Function', 'What It Computes', 'Ignores NULLs?'],
    tableRows: [
      ['COUNT(*)', 'Total number of rows in group', 'No (counts every row)'],
      ['COUNT(col)', 'Number of non-NULL values in col', 'Yes'],
      ['SUM(col)', 'Total of non-NULL numbers', 'Yes'],
      ['AVG(col)', 'SUM(col) / COUNT(col)', 'Yes (divides by non-NULL count)'],
    ],
    tableNoteEn: 'Be careful with `AVG(discount)`: if 50% of rows have `NULL` discount, `AVG` ignores them instead of treating them as `0` — use `AVG(COALESCE(discount, 0))` if NULL means 0!',
    tableNoteHi: 'Dhyan dein: `AVG(discount)` NULLs ko ignore karta hai; agar NULL ka matlab `0` hai toh `AVG(COALESCE(discount, 0))` likhein!',
    mistakeEn: 'Putting an unaggregated column in `SELECT` that is missing from `GROUP BY` (e.g., `SELECT city, customer_name, SUM(amount) FROM orders GROUP BY city;`), causing a PostgreSQL error.',
    mistakeHi: '`SELECT` mein aisa non-aggregated column likh dena jo `GROUP BY` mein nahi hai — isse PostgreSQL turant error de deta hai.',
    proHabitEn: 'Always check `COUNT(*)` vs `COUNT(col)` when auditing grouped metrics so missing values never silently skew `AVG()`.',
    proHabitHi: 'Grouped metrics check karte waqt `COUNT(*)` aur `COUNT(col)` dono compare karein taaki NULLs `AVG()` ko chupke se galat na karein.',
    jobUseEn: 'Powers every business KPI query: monthly recurring revenue (MRR), average order value (AOV) by channel, and daily active users (DAU).',
    jobUseHi: 'Monthly revenue (MRR), channel-wise average order value (AOV) aur daily active users (DAU) sab isi `GROUP BY` se bante hain.',
    mcq1Question: 'What is the difference between `COUNT(*)` and `COUNT(email)` in PostgreSQL?',
    mcq1Correct: '`COUNT(*)` counts all rows; `COUNT(email)` counts only rows where `email` is NOT NULL.',
    mcq1Wrongs: [
      '`COUNT(*)` only counts distinct emails.',
      '`COUNT(email)` counts the characters in each email.',
      'There is no difference.',
    ],
    mcq1Explain: '`COUNT(column_name)` skips NULL values, whereas `COUNT(*)` counts every row in the group.',
    mcq2Question: 'Why does `SELECT city, order_date, SUM(amount) FROM orders GROUP BY city;` throw an error?',
    mcq2Correct: '`order_date` is neither inside an aggregate function nor included in `GROUP BY`.',
    mcq2Wrongs: [
      '`SUM(amount)` cannot be used with `city`.',
      'PostgreSQL does not allow 3 columns in `SELECT`.',
      '`GROUP BY` must come before `FROM`.',
    ],
    mcq2Explain: 'Every non-aggregated column in `SELECT` must appear in `GROUP BY` so SQL knows which value to show per group.',
    realWorldScenario:
      'Your finance team asks for total orders, unique customers, and average order value per sales channel for Q1.',
    interviewQ1: 'How does `AVG(col)` treat `NULL` values, and when could that mislead a business report?',
    interviewA1:
      '`AVG(col)` excludes NULLs from both numerator and denominator. If NULL actually means "₹0 bonus", `AVG(bonus)` will overstate the average; use `AVG(COALESCE(bonus, 0))` instead.',
    interviewQ2: 'Can you `GROUP BY` multiple columns? Give a practical example.',
    interviewA2:
      'Yes — e.g., `GROUP BY city, product_category` produces one summary row for every unique `(city, product_category)` pair.',
  },
  {
    id: 190,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 8,
    title: 'HAVING and CASE WHEN',
    subtitle: 'FILTERING GROUPED RESULTS AND CREATING CONDITIONAL BUCKETS IN SQL',
    coreEn:
      '`HAVING` filters groups *after* `GROUP BY` (e.g., cities with `SUM(amount) > 5000`), while `CASE WHEN ... THEN ... ELSE ... END` adds SQL’s version of `if-elif-else` to bucket rows or compute conditional totals.',
    coreHi:
      '`HAVING` `GROUP BY` ke *baad* groups ko filter karta hai (jaise sirf woh cities jahan `SUM(amount) > 5000`), aur `CASE WHEN ... THEN ... ELSE ... END` SQL ka `if-elif-else` hai jisse aap custom categories ya conditional sums bana sakte hain.',
    analogyTitle: 'Filtering Players Before Match (`WHERE`) vs Filtering Teams After Points (`HAVING`)',
    analogyEn:
      '`WHERE` checks individual players before the game (`age >= 18`). `HAVING` checks whole team scores after the match (`SUM(runs) >= 200`). `CASE WHEN` is the referee awarding Gold/Silver/Bronze medals based on final score.',
    analogyHi:
      '`WHERE` match se pehle har player ko check karta hai (`age >= 18`). `HAVING` match ke baad poori team ka score check karta hai (`SUM(runs) >= 200`). `CASE WHEN` score ke hisaab se Gold/Silver/Bronze medal deta hai.',
    steps: [
      {
        title: 'Filter Raw Rows with `WHERE`',
        en: 'Exclude cancelled orders or old dates *before* grouping using `WHERE`.',
        hi: 'Grouping se *pehle* cancelled orders ya purani dates `WHERE` se hata dein.',
      },
      {
        title: 'Filter Grouped Aggregates with `HAVING`',
        en: 'Apply conditions on `COUNT(*)`, `SUM()`, or `AVG()` using `HAVING COUNT(*) >= 5`.',
        hi: '`GROUP BY` ke baad `COUNT(*)`, `SUM()`, ya `AVG()` par condition lagane ke liye `HAVING` use karein.',
      },
      {
        title: 'Bucket Values with `CASE WHEN`',
        en: 'Write `CASE WHEN amount >= 1000 THEN \'High\' ELSE \'Standard\' END` to label tiers.',
        hi: 'Custom tiers banane ke liye `CASE WHEN amount >= 1000 THEN \'High\' ELSE \'Standard\' END` likhein.',
      },
      {
        title: 'Use Conditional Aggregation (`SUM(CASE WHEN ...)`)',
        en: 'Count or sum subsets side by side in one pass: `SUM(CASE WHEN status = \'paid\' THEN 1 ELSE 0 END)`.',
        hi: 'Ek hi query mein side-by-side counts nikalne ke liye `SUM(CASE WHEN ... THEN 1 ELSE 0 END)` use karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • HAVING + CASE WHEN SEGMENTATION',
    code: `SELECT
    customer_id,
    SUM(amount) AS total_spend,
    CASE
        WHEN SUM(amount) >= 5000 THEN 'VIP'
        WHEN SUM(amount) >= 2000 THEN 'Regular'
        ELSE 'New'
    END AS customer_tier
FROM orders
WHERE status = 'paid'
GROUP BY customer_id
HAVING COUNT(*) >= 2;`,
    codeOutput: `customer_id | total_spend | customer_tier
------------+-------------+--------------
         10 |     6200.00 | VIP
         14 |     2450.00 | Regular`,
    codeCaptionEn: '`WHERE` kept paid orders, `HAVING` kept repeat buyers (2+ orders), and `CASE WHEN` assigned loyalty tiers.',
    codeCaptionHi: '`WHERE` ne paid orders rakhe, `HAVING` ne 2+ order wale repeat buyers chune, aur `CASE WHEN` ne loyalty tier diya.',
    tableTitle: 'WHERE vs HAVING Comparison',
    tableHeaders: ['Feature', 'WHERE', 'HAVING'],
    tableRows: [
      ['When It Runs', 'Before `GROUP BY`', 'After `GROUP BY`'],
      ['What It Filters', 'Individual raw rows', 'Aggregated groups'],
      ['Can Use `SUM()`/`COUNT()`?', 'No (causes error)', 'Yes (built for aggregates)'],
      ['Performance Tip', 'Always put row filters here first', 'Use only for aggregate conditions'],
    ],
    tableNoteEn: '`CASE WHEN` stops at the **first** condition that evaluates to True, so order your thresholds from highest to lowest (or lowest to highest) carefully.',
    tableNoteHi: '`CASE WHEN` pehli True condition par hi ruk jaata hai, isliye thresholds ko sahi order mein likhein aur hamesha `ELSE` rakhein.',
    mistakeEn: 'Writing `WHERE SUM(amount) > 1000` (fails because `WHERE` cannot evaluate aggregates) or forgetting `ELSE` in `CASE WHEN`, silently producing `NULL`s.',
    mistakeHi: '`WHERE SUM(amount) > 1000` likhna (error aata hai) ya `CASE WHEN` mein `ELSE` bhool jana jisse `NULL` ban jaate hain.',
    proHabitEn: 'Push non-aggregate filters into `WHERE` (faster!), keep aggregate filters in `HAVING`, and always include an `ELSE` branch in `CASE WHEN`.',
    proHabitHi: 'Normal row filters hamesha `WHERE` mein rakhein, aggregate filters `HAVING` mein, aur har `CASE WHEN` mein `ELSE` zaroor likhein.',
    jobUseEn: 'Used to find repeat customers (`HAVING COUNT(*) > 1`), build RFM loyalty tiers, and pivot conversion rates (`SUM(CASE WHEN ...)`).',
    jobUseHi: 'Repeat buyers dhoondhne (`HAVING COUNT(*) > 1`), RFM customer tiers banane aur conversion rate pivot karne mein roz use hota hai.',
    mcq1Question: 'Which clause correctly keeps only departments whose average salary exceeds ₹80,000?',
    mcq1Correct: 'HAVING AVG(salary) > 80000',
    mcq1Wrongs: [
      'WHERE AVG(salary) > 80000',
      'GROUP BY AVG(salary) > 80000',
      'ORDER BY AVG(salary) > 80000',
    ],
    mcq1Explain: 'Aggregate conditions like `AVG(salary) > 80000` can only be evaluated after grouping inside `HAVING`.',
    mcq2Question: 'What happens if no `WHEN` branch matches in a `CASE WHEN` expression and there is no `ELSE` clause?',
    mcq2Correct: 'It returns `NULL`.',
    mcq2Wrongs: ['It returns `0`.', 'It raises a syntax error.', 'It returns an empty string `""`.'],
    mcq2Explain: 'Without an explicit `ELSE`, unmatched rows default to `NULL`.',
    realWorldScenario:
      'Your growth team wants to find cities with at least 50 paid orders this month and label each city as `"Tier 1"` (revenue ≥ ₹1L) or `"Growth"` (< ₹1L).',
    interviewQ1: 'What is the key difference between `WHERE` and `HAVING`?',
    interviewA1:
      '`WHERE` filters individual rows *before* `GROUP BY` and cannot use aggregate functions. `HAVING` filters grouped summaries *after* `GROUP BY` and is specifically meant for aggregate conditions.',
    interviewQ2: 'How can you count both `paid` and `cancelled` orders in a single grouped SQL query?',
    interviewA2:
      'Use conditional aggregation: `SUM(CASE WHEN status = \'paid\' THEN 1 ELSE 0 END) AS paid_cnt, SUM(CASE WHEN status = \'cancelled\' THEN 1 ELSE 0 END) AS cancelled_cnt` (or PostgreSQL’s `COUNT(*) FILTER (WHERE status = \'paid\')`).',
  },
  {
    id: 191,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 9,
    title: 'INNER, LEFT, RIGHT and FULL JOIN',
    subtitle: 'COMBINING RELATED TABLES WITHOUT LOSING OR DUPLICATING ROWS',
    coreEn:
      'SQL `JOIN`s combine columns from two tables using a matching key (`ON a.id = b.id`): `INNER JOIN` keeps only matches, `LEFT JOIN` keeps all left rows, `RIGHT JOIN` keeps all right rows, and `FULL OUTER JOIN` keeps everything from both.',
    coreHi:
      'SQL `JOIN` do tables ko matching key (`ON a.id = b.id`) par jodta hai: `INNER JOIN` sirf common matches rakhta hai, `LEFT JOIN` left table ki saari rows rakhta hai, `RIGHT JOIN` right ki saari, aur `FULL JOIN` dono tables ki saari rows rakhta hai.',
    analogyTitle: 'Guest List vs Check-In List at a Wedding',
    analogyEn:
      '`INNER JOIN` = invited guests who actually showed up. `LEFT JOIN` (Invited -> Checked-In) = every invited guest, showing `NULL` check-in time for no-shows. `FULL JOIN` = everyone invited PLUS any surprise walk-ins.',
    analogyHi:
      '`INNER JOIN` = woh mehmaan jo invited the aur aaye bhi. `LEFT JOIN` = saare invited mehmaan (jo nahi aaye unka check-in `NULL`). `FULL JOIN` = saare invited + bina bulaye aaye hue walk-ins sab!',
    steps: [
      {
        title: 'Alias Tables Clearly',
        en: 'Use short readable aliases like `orders o` and `customers c` so every column prefix (`o.amount`, `c.name`) is unambiguous.',
        hi: 'Chhote clear aliases (`orders o`, `customers c`) dein taaki har column (`o.amount`, `c.name`) bilkul saaf rahe.',
      },
      {
        title: 'Choose the Right Join Type',
        en: 'Default to `LEFT JOIN` when enriching a fact table (`orders`) with lookup details (`customers`) so you never accidentally drop orders.',
        hi: 'Fact table (`orders`) ko lookup table (`customers`) se enrich karte waqt `LEFT JOIN` chunein taaki koi order gayab na ho.',
      },
      {
        title: 'Keep Right-Table Filters in `ON` for `LEFT JOIN`',
        en: 'Putting a right-table filter in `WHERE` turns a `LEFT JOIN` into an `INNER JOIN`! Put it in the `ON` clause instead.',
        hi: '`LEFT JOIN` mein right table ka filter `WHERE` mein dalne par woh `INNER JOIN` ban jaata hai — use `ON` mein rakhein.',
      },
      {
        title: 'Check Row Counts to Prevent Fan-Out',
        en: 'Verify your join key is unique on at least one side so rows don’t multiply unexpectedly.',
        hi: 'Verify karein ki kam se kam ek side par join key unique ho taaki rows multiply (fan-out) na hon.',
      },
    ],
    codeLabel: 'POSTGRESQL • LEFT JOIN TO FIND CUSTOMERS WITH ZERO ORDERS',
    code: `SELECT
    c.customer_id,
    c.full_name,
    COUNT(o.order_id) AS total_orders
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.full_name
ORDER BY total_orders DESC;`,
    codeOutput: `customer_id | full_name | total_orders
------------+-----------+-------------
         10 | Asha Rao  |            3
         11 | Ravi Sen  |            1
         12 | Neha Roy  |            0`,
    codeCaptionEn: 'Notice `COUNT(o.order_id)` returns `0` for Neha Roy because `LEFT JOIN` kept her with `o.order_id = NULL`.',
    codeCaptionHi: 'Dekhiye `COUNT(o.order_id)` ne Neha Roy ke liye `0` dikhaya kyunki `LEFT JOIN` ne unhe `NULL` order ke saath rakha.',
    tableTitle: 'The 4 Main SQL Join Types',
    tableHeaders: ['Join Type', 'Rows Kept', 'Common Use Case'],
    tableRows: [
      ['INNER JOIN', 'Only matching keys in both tables', 'Orders that have valid payment records'],
      ['LEFT JOIN', 'All left rows + matching right rows', 'All customers + their orders (even 0 orders)'],
      ['RIGHT JOIN', 'All right rows + matching left rows', 'Rare (usually rewritten as LEFT JOIN)'],
      ['FULL OUTER JOIN', 'All rows from both tables', 'Reconciling two systems to find mismatches'],
    ],
    tableNoteEn: 'To find customers who have **never** placed an order (anti-join), use `LEFT JOIN ... WHERE o.order_id IS NULL`.',
    tableNoteHi: 'Jinhone kabhi order nahi kiya unhe dhoondhne ke liye `LEFT JOIN ... WHERE o.order_id IS NULL` (anti-join) use karein.',
    mistakeEn: 'Writing `COUNT(*)` instead of `COUNT(o.order_id)` after a `LEFT JOIN` — customers with zero orders still have 1 row (with NULLs), so `COUNT(*)` wrongly shows `1` instead of `0`!',
    mistakeHi: '`LEFT JOIN` ke baad `COUNT(o.order_id)` ki jagah `COUNT(*)` likhna — isse 0 orders wale customer ka count bhi galti se `1` aa jaata hai!',
    proHabitEn: 'Always count the right-table primary key (`COUNT(o.order_id)`) after a `LEFT JOIN`, and prefer `LEFT JOIN` over `RIGHT JOIN` for readability.',
    proHabitHi: '`LEFT JOIN` ke baad hamesha right table ki primary key (`COUNT(o.order_id)`) count karein aur `RIGHT JOIN` ki jagah `LEFT JOIN` use karein.',
    jobUseEn: '95% of real Data Science SQL queries join 3 to 6 tables (Users + Orders + Items + Products + Marketing Campaigns) to build one analytics table.',
    jobUseHi: '95% real Data Science SQL queries 3 se 6 tables ko `JOIN` karke ek clean analytics ya ML feature table banati hain.',
    mcq1Question: 'After `customers c LEFT JOIN orders o ON c.id = o.customer_id`, why does `COUNT(o.order_id)` give `0` for a customer with no orders while `COUNT(*)` gives `1`?',
    mcq1Correct: '`LEFT JOIN` creates 1 row with `o.order_id = NULL`; `COUNT(*)` counts that row, while `COUNT(o.order_id)` ignores NULL.',
    mcq1Wrongs: [
      '`COUNT(*)` only works on `INNER JOIN`.',
      'PostgreSQL adds 1 to every `COUNT(*)`.',
      '`o.order_id` cannot be counted.',
    ],
    mcq1Explain: 'Because `COUNT(col)` ignores NULLs, counting a non-null key from the right table gives the exact true match count (`0`).',
    mcq2Question: 'What happens if you write `FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.status = \'paid\'`?',
    mcq2Correct: 'It filters out the NULL-padded unmatched rows, effectively turning the `LEFT JOIN` into an `INNER JOIN`.',
    mcq2Wrongs: [
      'It keeps all customers with zero orders.',
      'It turns into a `FULL OUTER JOIN`.',
      'It deletes unpaid orders from the database.',
    ],
    mcq2Explain: 'Since `NULL = \'paid\'` is UNKNOWN, `WHERE` drops unmatched customers. Move `AND o.status = \'paid\'` into the `ON` clause to preserve all customers.',
    realWorldScenario:
      'Your CRM team wants a list of all registered users who have never placed a single order so they can send a 20% welcome coupon.',
    interviewQ1: 'What happens to a `LEFT JOIN` if you put a condition on the right table inside the `WHERE` clause vs the `ON` clause?',
    interviewA1:
      'Putting it in `WHERE` filters out NULL-matched rows after the join, converting it into an `INNER JOIN`. Putting it in `ON` filters the right table during matching while preserving all left rows.',
    interviewQ2: 'What is a "many-to-many join explosion" and how do you spot it?',
    interviewA2:
      'If both tables have duplicate join keys (e.g., 3 rows on the left × 4 rows on the right for the same ID), the join creates 12 rows, inflating sums. Spot it by checking row counts before and after joining.',
  },
  {
    id: 192,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 10,
    title: 'Subqueries and EXISTS',
    subtitle: 'NESTING QUERIES FOR DYNAMIC THRESHOLDS AND FAST EXISTENCE CHECKS',
    coreEn:
      'A **subquery** is a query nested inside another query (in `WHERE`, `FROM`, or `SELECT`) to compute a dynamic value like the average order size, while `EXISTS` checks whether at least one matching row exists in another table.',
    coreHi:
      '**Subquery** ek query ke andar likhi doosri query hoti hai (jaise pehle average nikalna aur phir usse bade orders filter karna), jabki `EXISTS` check karta hai ki doosre table mein kam se kam ek matching row maujood hai ya nahi.',
    analogyTitle: 'Checking If Someone Is on the VIP List Without Copying the Whole List',
    analogyEn:
      'Asking "Find all students who scored above the class average" needs two steps: first find the class average (inner subquery), then compare each student to it (outer query). `EXISTS` is like asking a bouncer "Is this ID on the list? Stop searching the moment you find 1 match!"',
    analogyHi:
      '"Class average se zyada marks wale students" nikalne ke liye pehle inner query average nikalti hai, phir outer query compare karti hai. `EXISTS` bouncer se poochhne jaisa hai: "Kya yeh ID list mein hai? Pehla match milte hi ruk jao!"',
    steps: [
      {
        title: 'Write & Test the Inner Query First',
        en: 'Always run the inner subquery standalone first to confirm it returns the exact scalar or list you expect.',
        hi: 'Hamesha pehle inner subquery ko alag se run karke check karein ki woh sahi single value ya list de rahi hai.',
      },
      {
        title: 'Use Scalar Subqueries for Dynamic Thresholds',
        en: 'Compare against a single computed number: `WHERE amount > (SELECT AVG(amount) FROM orders)`.',
        hi: 'Dynamic threshold ke liye single number subquery use karein: `WHERE amount > (SELECT AVG(amount) FROM orders)`.',
      },
      {
        title: 'Prefer `EXISTS` / `NOT EXISTS` Over `NOT IN`',
        en: '`NOT EXISTS` handles `NULL`s safely and short-circuits on the first match, making it safer and often faster than `NOT IN`.',
        hi: '`NOT EXISTS` `NULL` values par bilkul safe rehta hai aur pehla match milte hi ruk jaata hai — `NOT IN` se zyada safe hai.',
      },
      {
        title: 'Avoid Deeply Nested Subqueries',
        en: 'If you nest more than 2 levels deep, refactor into a clean CTE (`WITH`) for readability.',
        hi: 'Agar nesting 2 level se zyada ho jaye, toh code ko readable rakhne ke liye CTE (`WITH`) mein badal dein.',
      },
    ],
    codeLabel: 'POSTGRESQL • SUBQUERY & EXISTS EXAMPLES',
    code: `-- 1) Orders strictly above average amount
SELECT order_id, amount
FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);

-- 2) Customers who have at least one paid order
SELECT c.customer_id, c.full_name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.customer_id AND o.status = 'paid'
);`,
    codeOutput: `order_id | amount
---------+--------
     104 | 1500.00
     108 | 2200.00

customer_id | full_name
------------+----------
         10 | Asha Rao
         11 | Ravi Sen`,
    codeCaptionEn: '`EXISTS` returns True as soon as it finds one matching paid order — and never duplicates customer rows like a `JOIN` would!',
    codeCaptionHi: '`EXISTS` pehla matching paid order milte hi True de deta hai — aur `JOIN` ki tarah customer rows ko duplicate bhi nahi karta!',
    tableTitle: 'Subquery Types at a Glance',
    tableHeaders: ['Subquery Type', 'Returns', 'Example'],
    tableRows: [
      ['Scalar Subquery', 'Single value (1 row, 1 col)', 'WHERE price > (SELECT AVG(price) FROM items)'],
      ['List Subquery', '1 column, multiple rows', 'WHERE id IN (SELECT user_id FROM vip_users)'],
      ['Derived Table (`FROM`)', 'Full virtual table (needs alias)', 'FROM (SELECT ...) AS sub'],
      ['Correlated `EXISTS`', 'True / False per outer row', 'WHERE EXISTS (SELECT 1 FROM orders o WHERE ...)'],
    ],
    tableNoteEn: 'Unlike `JOIN`, `WHERE EXISTS (...)` **never** multiplies outer rows even if a customer has 50 orders.',
    tableNoteHi: '`JOIN` ke ulta, `WHERE EXISTS (...)` kabhi outer rows ko multiply nahi karta bhale hi customer ke 50 orders hon.',
    mistakeEn: 'Using `WHERE id NOT IN (SELECT customer_id FROM returns)` when `returns.customer_id` has even a single `NULL` — SQL returns 0 rows!',
    mistakeHi: '`NOT IN` mein aisi subquery lagana jisme ek bhi `NULL` ho — isse poori query chupchaap 0 rows return kar deti hai!',
    proHabitEn: 'Always prefer `NOT EXISTS` over `NOT IN` when checking missing records across tables — it is immune to the `NULL` trap.',
    proHabitHi: 'Do tables ke beech missing records check karne ke liye hamesha `NOT IN` ki jagah `NOT EXISTS` use karein.',
    jobUseEn: 'Used to find above-average high-value transactions, identify active subscribers with recent logins (`EXISTS`), and filter out churned accounts (`NOT EXISTS`).',
    jobUseHi: 'Average se bade orders nikalne, active users check karne (`EXISTS`), aur inactive/churned users hatane (`NOT EXISTS`) mein roz use hota hai.',
    mcq1Question: 'Why is `NOT EXISTS` generally safer than `NOT IN (subquery)` in SQL?',
    mcq1Correct: '`NOT EXISTS` works properly even if the subquery column contains `NULL` values, whereas `NOT IN` can return zero rows.',
    mcq1Wrongs: [
      '`NOT IN` does not exist in PostgreSQL.',
      '`NOT EXISTS` automatically sorts results.',
      '`NOT IN` only works on text columns.',
    ],
    mcq1Explain: 'Any `NULL` inside a `NOT IN` list makes the comparison evaluate to UNKNOWN for every row, returning empty output.',
    mcq2Question: 'What is a key benefit of using `WHERE EXISTS` instead of `INNER JOIN` when you only want a list of customers who placed at least one order?',
    mcq2Correct: '`EXISTS` will never duplicate customer rows if a customer has multiple orders.',
    mcq2Wrongs: [
      '`EXISTS` automatically computes total revenue.',
      '`INNER JOIN` cannot match `customer_id`.',
      '`EXISTS` deletes unpaid orders.',
    ],
    mcq2Explain: '`EXISTS` is a semi-join: it stops at the first matching order and keeps each qualifying customer row exactly once.',
    realWorldScenario:
      'You need to find all products that have NEVER been ordered so the warehouse can clear dead stock. Using `WHERE NOT EXISTS` guarantees accuracy even if some order rows have `NULL` product IDs.',
    interviewQ1: 'What is the difference between a correlated and an uncorrelated subquery?',
    interviewA1:
      'An uncorrelated subquery runs independently once (like `SELECT AVG(price) FROM products`). A correlated subquery references a column from the outer query (like `o.customer_id = c.customer_id`) and is evaluated logically per outer row.',
    interviewQ2: 'Why do developers write `SELECT 1` inside `EXISTS (SELECT 1 FROM ...)`?',
    interviewA2:
      'Because `EXISTS` only checks whether at least one row is returned — the actual selected value is ignored, so `SELECT 1` signals intent clearly.',
  },
  {
    id: 193,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 11,
    title: 'Common Table Expressions',
    subtitle: 'WRITING CLEAN, STEP-BY-STEP SQL WITH `WITH` CLAUSES (CTEs)',
    coreEn:
      'A Common Table Expression (CTE) uses the `WITH` keyword to name a temporary result set at the top of your query — turning messy nested subqueries into a clean, top-to-bottom recipe.',
    coreHi:
      'Common Table Expression (CTE) `WITH` keyword se query ke upar ek clean temporary named table bana deta hai — jisse uljhi hui nested subqueries ek aasan step-by-step recipe ban jaati hain.',
    analogyTitle: 'Cooking Prep Bowls Before Stir-Frying',
    analogyEn:
      'Instead of chopping vegetables inside a sizzling pan (nested subqueries), a chef preps Bowl 1 (`cleaned_orders`) and Bowl 2 (`customer_totals`), then combines them neatly in the final `SELECT`.',
    analogyHi:
      'Chalti kadhai ke andar sabzi kaatne (nested subqueries) ke bajaye chef pehle Bowl 1 (`cleaned_orders`) aur Bowl 2 (`customer_totals`) taiyaar karta hai, aur phir final `SELECT` mein aaram se combine karta hai.',
    steps: [
      {
        title: 'Start with `WITH cte_name AS (...)`',
        en: 'Give each logical stage a descriptive business name like `paid_orders` or `monthly_sales`.',
        hi: 'Har stage ko meaningful business naam dein jaise `paid_orders` ya `monthly_sales`.',
      },
      {
        title: 'Chain Multiple CTEs with Commas',
        en: 'Separate CTE 1 and CTE 2 with a comma (never repeat `WITH`!) so CTE 2 can read directly from CTE 1.',
        hi: 'Do CTEs ko comma `,` se jodein (`WITH` dobara mat likhein) taaki CTE 2 seedha CTE 1 ka output padh sake.',
      },
      {
        title: 'Debug One CTE at a Time',
        en: 'Temporarily run `SELECT * FROM cte_1 LIMIT 10;` to inspect intermediate results easily.',
        hi: 'Debugging ke liye beech mein `SELECT * FROM cte_1 LIMIT 10;` chalakar har step verify kar lein.',
      },
      {
        title: 'Write a Short Final `SELECT`',
        en: 'Keep the final query crisp and readable, pulling from your prepped CTEs.',
        hi: 'Final `SELECT` ko chhota aur crystal clear rakhein jo upar banaye CTEs ko combine kare.',
      },
    ],
    codeLabel: 'POSTGRESQL • MULTI-STEP CTE PIPELINE',
    code: `WITH paid_orders AS (
    SELECT customer_id, amount
    FROM orders
    WHERE status = 'paid'
),
customer_totals AS (
    SELECT customer_id, SUM(amount) AS total_spend
    FROM paid_orders
    GROUP BY customer_id
)
SELECT customer_id, total_spend
FROM customer_totals
WHERE total_spend > (SELECT AVG(total_spend) FROM customer_totals)
ORDER BY total_spend DESC;`,
    codeOutput: `customer_id | total_spend
------------+------------
         10 |     6200.00
         14 |     3800.00`,
    codeCaptionEn: 'Step 1 filters paid orders, Step 2 totals spend per customer, and the final `SELECT` finds above-average buyers!',
    codeCaptionHi: 'Step 1 ne paid orders filter kiye, Step 2 ne har customer ka total nikala, aur final `SELECT` ne above-average buyers dhundhe!',
    tableTitle: 'Nested Subquery vs CTE (`WITH`)',
    tableHeaders: ['Aspect', 'Nested Subquery', 'CTE (`WITH`)'],
    tableRows: [
      ['Reading Flow', 'Inside-out (hard to read)', 'Top-to-bottom (like Python steps)'],
      ['Reusability in Query', 'Must copy-paste subquery again', 'Reference the CTE name multiple times'],
      ['Debugging', 'Tricky to isolate inner query', 'Swap final `SELECT * FROM step_1`'],
      ['Lifetime', 'Single query only', 'Single query only (temporary)'],
    ],
    tableNoteEn: 'A CTE exists **only for that single SQL statement** — it does not create a permanent table in the database.',
    tableNoteHi: 'CTE sirf us **ek hi query** ke dauran exist karta hai — yeh database mein permanent table nahi banata.',
    mistakeEn: 'Repeating the `WITH` keyword before the second CTE (`WITH cte1 AS (...), WITH cte2 AS (...)`) or putting a comma right before the final `SELECT`.',
    mistakeHi: 'Doosre CTE se pehle dobara `WITH` likh dena ya final `SELECT` se pehle galti se comma `,` chhod dena.',
    proHabitEn: 'Break every complex analytics query into 2–4 well-named CTEs (e.g., `base_data`, `aggregated`, `ranked`) so teammates can review it in seconds.',
    proHabitHi: 'Har lambi analytics query ko 2–4 clean named CTEs (`base_data`, `aggregated`, `ranked`) mein baantein taaki team aasani se samajh sake.',
    jobUseEn: 'Modern analytics engineering (dbt, BigQuery, Snowflake, PostgreSQL) writes almost every production model using modular CTEs.',
    jobUseHi: 'Modern analytics engineering (dbt, BigQuery, Snowflake, PostgreSQL) mein lagbhag har production model clean CTEs se hi likha jaata hai.',
    mcq1Question: 'How do you define TWO CTEs (`step1` and `step2`) in one PostgreSQL query?',
    mcq1Correct: '`WITH step1 AS (...), step2 AS (...) SELECT ...`',
    mcq1Wrongs: [
      '`WITH step1 AS (...) WITH step2 AS (...) SELECT ...`',
      '`CTE step1 AS (...); CTE step2 AS (...); SELECT ...`',
      '`WITH step1 AS (...), step2 AS (...), SELECT ...`',
    ],
    mcq1Explain: 'Write `WITH` only once at the start, separate CTE definitions with a comma, and put NO comma before the final `SELECT`.',
    mcq2Question: 'Does a CTE save a permanent table into your PostgreSQL database?',
    mcq2Correct: 'No — a CTE is temporary and exists only during the execution of that single query.',
    mcq2Wrongs: [
      'Yes — it overwrites the original table.',
      'Yes — it stays saved for 24 hours.',
      'Only if you use `ORDER BY`.',
    ],
    mcq2Explain: 'CTEs are query-scoped named expressions; to persist results, use `CREATE VIEW` or `CREATE TABLE AS`.',
    realWorldScenario:
      'You need to compute monthly revenue, then month-over-month growth %, then flag months with >20% growth. Writing 3 stacked CTEs makes the logic effortless to audit.',
    interviewQ1: 'Why do data teams prefer CTEs over deeply nested subqueries?',
    interviewA1:
      'CTEs read linearly top-to-bottom, let you reuse an intermediate result multiple times in the same query without copy-pasting, and make step-by-step debugging trivial.',
    interviewQ2: 'What is the difference between a CTE and a SQL `VIEW`?',
    interviewA2:
      'A CTE exists only inside a single query execution, whereas a `VIEW` is a saved named query stored in the database catalog that anyone can query repeatedly.',
  },
  {
    id: 194,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 12,
    title: 'Window Functions',
    subtitle: 'COMPUTING GROUP METRICS AND COMPARISONS WITHOUT COLLAPSING ROWS',
    coreEn:
      'Window functions (`OVER (PARTITION BY ... ORDER BY ...)`) let you compute averages, sums, previous-row values (`LAG`), or next-row values (`LEAD`) across related rows while keeping **every individual row intact**.',
    coreHi:
      'Window functions (`OVER (PARTITION BY ... ORDER BY ...)`) aapko related rows par average, sum, pichhli row (`LAG`) ya agli row (`LEAD`) nikalne dete hain — bina individual rows ko collapse kiye!',
    analogyTitle: 'Seeing Your Own Marks Right Next to Your Class Average',
    analogyEn:
      '`GROUP BY class` collapses 30 students into 1 class-average row — you lose individual students! A window function (`AVG(marks) OVER (PARTITION BY class)`) keeps all 30 student rows and writes the class average right next to each student.',
    analogyHi:
      '`GROUP BY class` 30 students ko collapse karke sirf 1 row bana deta hai. Window function (`AVG(marks) OVER (PARTITION BY class)`) sabhi 30 students ki rows rakhta hai aur har student ke bagal mein unki class ka average likh deta hai.',
    steps: [
      {
        title: 'Recognize the `OVER (...)` Signature',
        en: 'Any function followed by `OVER (...)` is a window function — it never reduces your row count.',
        hi: 'Kisi bhi function ke aage `OVER (...)` dikhe toh woh window function hai — yeh rows ki ginti kabhi kam nahi karta.',
      },
      {
        title: 'Group Windows with `PARTITION BY`',
        en: '`PARTITION BY dept` resets the calculation for each department (like `GROUP BY` without collapsing).',
        hi: '`PARTITION BY dept` har department ke liye alag window banata hai (bina rows collapse kiye).',
      },
      {
        title: 'Order Inside Windows with `ORDER BY`',
        en: 'Use `ORDER BY order_date` inside `OVER (...)` for `LAG()`, `LEAD()`, and running totals.',
        hi: '`LAG()`, `LEAD()` aur running totals ke liye `OVER (...)` ke andar `ORDER BY order_date` lagayein.',
      },
      {
        title: 'Filter Window Results in an Outer CTE',
        en: 'You cannot put window functions directly in `WHERE`; wrap them in a CTE and filter in the outer `SELECT`.',
        hi: 'Window function ko seedha `WHERE` mein nahi likh sakte; pehle CTE mein compute karein phir outer query mein filter karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • DEPARTMENT AVG & LAG() GROWTH',
    code: `SELECT
    emp_name,
    dept,
    salary,
    ROUND(AVG(salary) OVER (PARTITION BY dept), 0) AS dept_avg,
    salary - LAG(salary) OVER (PARTITION BY dept ORDER BY salary) AS diff_from_prev
FROM employees;`,
    codeOutput: `emp_name | dept  | salary | dept_avg | diff_from_prev
---------+-------+--------+----------+---------------
Meera    | IT    |  70000 |    80000 |           NULL
Rohan    | IT    |  90000 |    80000 |          20000
Sia      | Sales |  60000 |    60000 |           NULL`,
    codeCaptionEn: 'Every employee row stayed intact while showing both their department’s average (`dept_avg`) and salary step (`LAG`).',
    codeCaptionHi: 'Har employee ki row safe rahi aur bagal mein department average (`dept_avg`) aur pichhli salary se antar (`LAG`) dono mil gaye.',
    tableTitle: 'Must-Know SQL Window Functions',
    tableHeaders: ['Function', 'What It Does', 'Typical Use Case'],
    tableRows: [
      ['AVG(x) OVER (PARTITION BY g)', 'Group average on every row', 'Compare each store vs regional average'],
      ['LAG(x, 1) OVER (ORDER BY dt)', 'Value from previous row', 'Month-over-Month (MoM) revenue growth'],
      ['LEAD(x, 1) OVER (ORDER BY dt)', 'Value from next row', 'Time until customer’s next purchase'],
      ['FIRST_VALUE(x) OVER (...)', 'First value in the window', 'Compare current price vs launch price'],
    ],
    tableNoteEn: 'An empty `OVER ()` treats the **entire result set** as one single window (e.g., `amount / SUM(amount) OVER ()` for % of grand total).',
    tableNoteHi: 'Khali `OVER ()` poore table ko ek single window manta hai (jaise `amount / SUM(amount) OVER ()` se grand total ka % nikalna).',
    mistakeEn: 'Trying to filter directly with `WHERE LAG(sales) OVER (...) > 100` — PostgreSQL rejects window functions inside `WHERE` because `WHERE` runs before `SELECT`.',
    mistakeHi: 'Window function ko seedha `WHERE` clause mein likhna — PostgreSQL error deta hai kyunki `WHERE` pehle chalta hai.',
    proHabitEn: 'Compute window functions inside a clean CTE first, then filter on their aliases in the outer `SELECT` query.',
    proHabitHi: 'Pehle CTE mein window function calculate karein, phir outer `SELECT` ke `WHERE` mein uske alias par filter lagayein.',
    jobUseEn: 'Window functions are the #1 most tested SQL topic in Data Science & Analytics interviews — used for retention, MoM growth, and % of total share.',
    jobUseHi: 'Data Science aur Analytics interviews mein sabse zyada poochha jaane wala SQL topic — MoM growth, retention aur % share nikalne ke liye.',
    mcq1Question: 'What is the fundamental difference between `GROUP BY` and `OVER (PARTITION BY ...)`?',
    mcq1Correct: '`GROUP BY` collapses rows into one row per group; `OVER (PARTITION BY ...)` keeps all original rows intact.',
    mcq1Wrongs: [
      '`OVER` only works on text columns.',
      '`GROUP BY` cannot compute `SUM()`.',
      'Window functions delete duplicate rows automatically.',
    ],
    mcq1Explain: 'Window functions append aggregated or positional values alongside every row without reducing the row count.',
    mcq2Question: 'Which window function lets you access the *previous* month’s revenue on the current month’s row?',
    mcq2Correct: 'LAG(revenue, 1) OVER (ORDER BY month)',
    mcq2Wrongs: [
      'LEAD(revenue, 1) OVER (ORDER BY month)',
      'PREV(revenue)',
      'MAX(revenue) GROUP BY month',
    ],
    mcq2Explain: '`LAG()` looks backward by `n` rows in the ordered window; `LEAD()` looks forward.',
    realWorldScenario:
      'Your CFO asks for a monthly revenue table showing each month’s sales, last month’s sales (`LAG`), and the exact month-over-month % growth.',
    interviewQ1: 'How do you calculate each product’s percentage share of its category’s total revenue in SQL?',
    interviewA1:
      'Use `ROUND(100.0 * revenue / SUM(revenue) OVER (PARTITION BY category), 2) AS pct_of_category`.',
    interviewQ2: 'Why can’t you put a window function in a `WHERE` clause, and how do you work around it?',
    interviewA2:
      'Window functions are evaluated during the `SELECT` stage (after `WHERE` and `HAVING`). Wrap the window query in a CTE or subquery and filter its alias in the outer `WHERE`.',
  },
  {
    id: 195,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 13,
    title: 'Ranking and Running Totals',
    subtitle: 'ROW_NUMBER, RANK, DENSE_RANK, AND CUMULATIVE SUMS IN POSTGRESQL',
    coreEn:
      'Ranking window functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`) let you pick Top-N per group (e.g., Top 3 products per category), while `SUM(x) OVER (ORDER BY date)` computes cumulative running totals and moving averages.',
    coreHi:
      'Ranking functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`) har group mein Top-N nikalne ke kaam aate hain (jaise har category ke Top 3 products), aur `SUM(x) OVER (ORDER BY date)` cumulative running totals aur moving averages nikalta hai.',
    analogyTitle: 'Olympic Podium Medals vs Car Odometer',
    analogyEn:
      'If two runners tie for 1st place: `ROW_NUMBER` assigns arbitrary 1, 2, 3; `RANK` gives 1, 1, 3 (skips 2); `DENSE_RANK` gives 1, 1, 2 (no gap!). A running total is like a car odometer that keeps adding every day’s km to the cumulative total.',
    analogyHi:
      'Agar do players 1st par tie hon: `ROW_NUMBER` 1, 2, 3 dega; `RANK` 1, 1, 3 (2 skip karega); `DENSE_RANK` 1, 1, 2 (bina gap). Running total car ke odometer jaisa hai jo roz ki doori ko total mein jodta chalta hai.',
    steps: [
      {
        title: 'Choose the Right Ranking Function',
        en: 'Use `ROW_NUMBER()` for strict unique picks (deduplication), `DENSE_RANK()` for Top-N salary tiers with ties.',
        hi: 'Exact 1 row/deduplication ke liye `ROW_NUMBER()`, aur ties samet Top-N tiers ke liye `DENSE_RANK()` chunein.',
      },
      {
        title: 'Partition & Order for Top-N per Group',
        en: 'Write `DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk` inside a CTE, then filter `WHERE rnk <= 3`.',
        hi: 'CTE mein `PARTITION BY dept ORDER BY salary DESC` lagakar outer query mein `WHERE rnk <= 3` filter karein.',
      },
      {
        title: 'Compute Running Totals',
        en: 'Use `SUM(sales) OVER (ORDER BY sale_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`.',
        hi: 'Cumulative sum ke liye `SUM(sales) OVER (ORDER BY sale_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)` likhein.',
      },
      {
        title: 'Compute 7-Day Moving Averages',
        en: 'Use `AVG(sales) OVER (ORDER BY sale_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)`.',
        hi: '7-day moving average ke liye `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` frame use karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • TOP-2 PER CITY & RUNNING TOTAL',
    code: `WITH ranked AS (
    SELECT
        sale_date,
        sales,
        DENSE_RANK() OVER (ORDER BY sales DESC) AS sales_rank,
        SUM(sales) OVER (
            ORDER BY sale_date
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS running_total
    FROM daily_sales
)
SELECT * FROM ranked ORDER BY sale_date;`,
    codeOutput: `sale_date  | sales | sales_rank | running_total
-----------+-------+------------+--------------
2026-01-01 |   200 |          2 |           200
2026-01-02 |   350 |          1 |           550
2026-01-03 |   200 |          2 |           750`,
    codeCaptionEn: 'Both `200`-sale days tied at `DENSE_RANK = 2`, while `running_total` accumulated `200 -> 550 -> 750`.',
    codeCaptionHi: 'Dono `200` wale din `DENSE_RANK = 2` par tie hue, aur `running_total` `200 -> 550 -> 750` badhta gaya.',
    tableTitle: 'ROW_NUMBER vs RANK vs DENSE_RANK on Ties `[100, 100, 90]`',
    tableHeaders: ['Score', 'ROW_NUMBER()', 'RANK()', 'DENSE_RANK()'],
    tableRows: [
      ['100 (first)', '1', '1', '1'],
      ['100 (tied)', '2', '1', '1'],
      ['90 (next)', '3', '3 (skips 2)', '2 (no gap)'],
    ],
    tableNoteEn: 'For deduplicating rows in SQL, `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY updated_at DESC) = 1` is the gold-standard pattern.',
    tableNoteHi: 'SQL mein duplicate rows hatane ka sabse famous pattern `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY updated_at DESC) = 1` hai.',
    mistakeEn: 'Using `LIMIT 3` when asked for the "Top 3 products **per category**" — `LIMIT 3` only returns 3 rows total for the whole table instead of 3 per category!',
    mistakeHi: '"Har category ke Top 3 products" poochhe jaane par `LIMIT 3` laga dena — isse poore table se sirf 3 rows aati hain, har category se 3 nahi!',
    proHabitEn: 'Always specify `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` on running totals so duplicate dates sum row-by-row predictably.',
    proHabitHi: 'Running totals mein `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` likhein taaki duplicate dates par bhi exact row-by-row sum mile.',
    jobUseEn: 'Used for Top-3 products per region, deduplicating event logs (`ROW_NUMBER = 1`), YTD cumulative revenue charts, and 7-day rolling averages.',
    jobUseHi: 'Har region ke Top-3 products, event log deduplication (`ROW_NUMBER = 1`), YTD revenue aur 7-day rolling averages mein roz use hota hai.',
    mcq1Question: 'For scores `[95, 95, 88]`, what values does `DENSE_RANK() OVER (ORDER BY score DESC)` return?',
    mcq1Correct: '1, 1, 2',
    mcq1Wrongs: ['1, 1, 3', '1, 2, 3', '1, 2, 2'],
    mcq1Explain: '`DENSE_RANK()` assigns ties the same rank (`1, 1`) and continues with the next consecutive integer (`2`) without skipping.',
    mcq2Question: 'Which SQL pattern finds the single most recent order for EVERY customer?',
    mcq2Correct: 'CTE with `ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn` followed by `WHERE rn = 1`.',
    mcq2Wrongs: [
      '`SELECT * FROM orders ORDER BY order_date DESC LIMIT 1;`',
      '`SELECT customer_id, SUM(order_date) FROM orders GROUP BY customer_id;`',
      '`SELECT DISTINCT order_date FROM orders;`',
    ],
    mcq2Explain: 'Partitioning by `customer_id` and keeping `rn = 1` guarantees exactly one newest order per customer.',
    realWorldScenario:
      'Your e-commerce analytics dashboard needs a 7-day rolling average of daily orders to smooth out weekend spikes.',
    interviewQ1: 'Explain the exact difference between `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`.',
    interviewA1:
      'On ties (e.g., two 1st places): `ROW_NUMBER()` assigns unique sequential numbers (1, 2, 3); `RANK()` gives ties the same rank and skips numbers (1, 1, 3); `DENSE_RANK()` gives ties the same rank without gaps (1, 1, 2).',
    interviewQ2: 'Why does `ROWS BETWEEN` behave differently from the default `RANGE BETWEEN` in running totals?',
    interviewA2:
      'When two rows share the exact same `ORDER BY` date, default `RANGE` adds both rows together on both lines, whereas `ROWS` accumulates strictly row by row.',
  },
  {
    id: 196,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 14,
    title: 'Date and Text Functions',
    subtitle: 'DATE_TRUNC, EXTRACT, INTERVAL, TRIM, LOWER, AND SPLIT_PART IN POSTGRESQL',
    coreEn:
      'PostgreSQL provides rich built-in functions to bucket timestamps (`DATE_TRUNC(\'month\', dt)`), extract parts (`EXTRACT(YEAR FROM dt)`), do date math (`INTERVAL \'30 days\'`), and clean text (`TRIM`, `LOWER`, `REPLACE`, `COALESCE`).',
    coreHi:
      'PostgreSQL aapko dates ke liye `DATE_TRUNC(\'month\', dt)`, `EXTRACT(YEAR FROM dt)`, `INTERVAL \'30 days\'` aur text saaf karne ke liye `TRIM`, `LOWER`, `REPLACE`, aur `COALESCE` jaise built-in functions deta hai.',
    analogyTitle: 'Calendar Stamp + Text Scrubber Built Right Inside the Database',
    analogyEn:
      '`DATE_TRUNC(\'month\', order_date)` stamps every date in March (`Mar 1`, `Mar 14`, `Mar 29`) as `2026-03-01` so you can group by month effortlessly. `TRIM(LOWER(city))` scrubs messy spaces and casing before grouping.',
    analogyHi:
      '`DATE_TRUNC(\'month\', order_date)` March ki har date (`Mar 1`, `Mar 14`, `Mar 29`) ko `2026-03-01` bana deta hai taaki monthly grouping aasan ho. `TRIM(LOWER(city))` grouping se pehle spaces aur casing saaf kar deta hai.',
    steps: [
      {
        title: 'Bucket Dates with `DATE_TRUNC`',
        en: 'Use `DATE_TRUNC(\'month\', order_date)::DATE` to roll up daily rows cleanly by week, month, or quarter.',
        hi: 'Daily data ko week, month ya quarter mein group karne ke liye `DATE_TRUNC(\'month\', order_date)::DATE` use karein.',
      },
      {
        title: 'Filter Recent Windows with `INTERVAL`',
        en: 'Write `WHERE order_date >= CURRENT_DATE - INTERVAL \'30 days\'` for rolling last-30-day metrics.',
        hi: 'Pichhle 30 dino ka data nikalne ke liye `CURRENT_DATE - INTERVAL \'30 days\'` use karein.',
      },
      {
        title: 'Normalize Text with `TRIM` & `LOWER`',
        en: 'Clean user-entered categories with `INITCAP(TRIM(city))` or `LOWER(TRIM(email))`.',
        hi: 'Messy text categories ko `LOWER(TRIM(email))` ya `INITCAP(TRIM(city))` se standardize karein.',
      },
      {
        title: 'Replace NULLs with `COALESCE`',
        en: 'Use `COALESCE(phone, \'Not Provided\')` to return the first non-NULL fallback value.',
        hi: 'NULL ki jagah clean default value dikhane ke liye `COALESCE(phone, \'Not Provided\')` use karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • MONTHLY ROLLUP & TEXT CLEANING',
    code: `SELECT
    DATE_TRUNC('month', order_date)::DATE AS order_month,
    INITCAP(TRIM(city)) AS clean_city,
    COALESCE(coupon_code, 'NONE') AS coupon,
    SUM(amount) AS revenue
FROM orders
GROUP BY 1, 2, 3
ORDER BY 1, 4 DESC;`,
    codeOutput: `order_month | clean_city | coupon  | revenue
------------+------------+---------+--------
2026-01-01  | Delhi      | NONE    | 2400.00
2026-01-01  | Mumbai     | SAVE10  | 1800.00`,
    codeCaptionEn: '`DATE_TRUNC` grouped January dates into `2026-01-01`, `INITCAP(TRIM())` unified city spellings, and `COALESCE` labeled missing coupons.',
    codeCaptionHi: '`DATE_TRUNC` ne January ki dates ko `2026-01-01` banaya, `INITCAP(TRIM())` ne city clean ki, aur `COALESCE` ne blank coupon ko `NONE` banaya.',
    tableTitle: 'Essential PostgreSQL Date & Text Functions',
    tableHeaders: ['Function', 'Example', 'Result'],
    tableRows: [
      ['DATE_TRUNC', "DATE_TRUNC('month', DATE '2026-03-19')", '2026-03-01 00:00:00'],
      ['EXTRACT', "EXTRACT(DOW FROM DATE '2026-03-15')", '0 (Sunday in PG)'],
      ['SPLIT_PART', "SPLIT_PART('asha@gmail.com', '@', 2)", "'gmail.com'"],
      ['COALESCE', "COALESCE(NULL, 'Unknown')", "'Unknown'"],
    ],
    tableNoteEn: '`DATE_TRUNC(\'month\', dt)` is much better than `EXTRACT(MONTH FROM dt)` when spanning multiple years — `EXTRACT` merges Jan 2025 and Jan 2026 together!',
    tableNoteHi: 'Multiple years ke data mein `EXTRACT(MONTH)` ki jagah `DATE_TRUNC(\'month\')` use karein — `EXTRACT` Jan 2025 aur Jan 2026 ko mila deta hai!',
    mistakeEn: 'Grouping multi-year sales by `EXTRACT(MONTH FROM order_date)` and accidentally mixing January 2025 revenue with January 2026 revenue!',
    mistakeHi: 'Multi-year sales ko `EXTRACT(MONTH)` se group kar dena, jisse Jan 2025 aur Jan 2026 ki sales ek mein mil jaati hain!',
    proHabitEn: 'Always use `DATE_TRUNC(\'month\', dt)` for time-series grouping, and `COALESCE()` whenever NULLs need a clean display or `0` default.',
    proHabitHi: 'Time-series grouping ke liye hamesha `DATE_TRUNC(\'month\', dt)` aur NULL defaults ke liye `COALESCE()` use karein.',
    jobUseEn: 'Used in every cohort retention table, weekly KPI dashboard, email-domain segmentation (`SPLIT_PART`), and dirty CRM text cleanup.',
    jobUseHi: 'Cohort retention, weekly KPI dashboards, email domain extraction (`SPLIT_PART`) aur CRM text cleanup mein roz use hota hai.',
    mcq1Question: 'Why is `DATE_TRUNC(\'month\', order_date)` safer than `EXTRACT(MONTH FROM order_date)` for a 3-year sales trend chart?',
    mcq1Correct: '`DATE_TRUNC` keeps the year attached (`2025-01-01` vs `2026-01-01`), whereas `EXTRACT(MONTH)` combines all Januaries into `1`.',
    mcq1Wrongs: [
      '`EXTRACT` does not work on dates in PostgreSQL.',
      '`DATE_TRUNC` deletes old years automatically.',
      'They produce the exact same output.',
    ],
    mcq1Explain: '`DATE_TRUNC` preserves year + month chronology as a proper timestamp/date.',
    mcq2Question: 'What does `COALESCE(NULL, NULL, \'Guest\', \'Admin\')` return?',
    mcq2Correct: `'Guest'`,
    mcq2Wrongs: ['NULL', `'Admin'`, 'An error because there are 4 arguments'],
    mcq2Explain: '`COALESCE` scans arguments left to right and returns the very first non-NULL value.',
    realWorldScenario:
      'You need to count signups by email domain (`gmail.com`, `yahoo.com`, corporate) for the last 30 days using `SPLIT_PART(LOWER(email), \'@\', 2)` and `INTERVAL \'30 days\'`.',
    interviewQ1: 'How do you extract the domain name from an `email` column in PostgreSQL?',
    interviewA1:
      'Use `SPLIT_PART(LOWER(TRIM(email)), \'@\', 2)` which splits on `@` and takes the 2nd part.',
    interviewQ2: 'What is `COALESCE()` and how is it commonly used in analytics queries?',
    interviewA2:
      '`COALESCE(a, b, ...)` returns the first non-NULL argument. Analysts use it to replace NULL numeric metrics with `0` (e.g., `COALESCE(discount, 0)`) or blank categories with `\'Unknown\'`.',
  },
  {
    id: 197,
    modNum: 18,
    modTitle: 'SQL for Data Science',
    topicNumInMod: 15,
    title: 'Query Validation and Performance Basics',
    subtitle: 'EXPLAIN ANALYZE, INDEXES, SARGABLE FILTERS, AND SANITY CHECKS',
    coreEn:
      'Writing SQL that runs is step 1; writing **accurate, fast** SQL requires validating row counts/totals and using indexes, `EXPLAIN ANALYZE`, and sargable `WHERE` predicates so queries run in milliseconds instead of minutes.',
    coreHi:
      'Query ka chal jana sirf step 1 hai; **accurate aur fast** SQL ke liye row counts/totals validate karna, indexes samajhna, `EXPLAIN ANALYZE` padhna aur `WHERE` column ko function mein wrap na karna (sargable filter) zaroori hai.',
    analogyTitle: 'Book Index vs Flipping Every Single Page of a 1,000-Page Textbook',
    analogyEn:
      'A `Seq Scan` (Sequential Scan) is flipping every single page of a 1,000-page book to find "Broadcasting". An `Index Scan` checks the alphabetical index at the back and jumps straight to page 412 in 1 second!',
    analogyHi:
      '`Seq Scan` 1,000 page ki kitab ka har panna palatne jaisa hai. `Index Scan` kitab ke peeche bane Index ko dekh kar seedha page 412 par 1 second mein pahunchne jaisa hai!',
    steps: [
      {
        title: 'Validate Row Counts & Totals',
        en: 'Compare `COUNT(*)` and `SUM(amount)` before and after joins to guarantee zero accidental fan-out or dropped rows.',
        hi: 'Join se pehle aur baad mein `COUNT(*)` aur `SUM(amount)` match karein taaki koi row gayab ya double na hui ho.',
      },
      {
        title: 'Inspect Speed with `EXPLAIN ANALYZE`',
        en: 'Prefix slow queries with `EXPLAIN ANALYZE` to see if PostgreSQL is doing a slow `Seq Scan` or a fast `Index Scan`.',
        hi: 'Slow query ke aage `EXPLAIN ANALYZE` lagakar dekhein ki `Seq Scan` ho raha hai ya fast `Index Scan`.',
      },
      {
        title: 'Keep `WHERE` Columns Sargable (Index-Friendly)',
        en: 'Write `WHERE order_date >= \'2026-01-01\' AND order_date < \'2027-01-01\'` instead of `WHERE EXTRACT(YEAR FROM order_date) = 2026`.',
        hi: 'Index use karne ke liye `WHERE EXTRACT(YEAR FROM dt) = 2026` ke bajaye range filter `dt >= \'2026-01-01\' AND dt < \'2027-01-01\'` likhein.',
      },
      {
        title: 'Select Only Needed Columns & Filter Early',
        en: 'Drop `SELECT *`, filter inside early CTEs, and avoid unnecessary `DISTINCT` on already-unique tables.',
        hi: '`SELECT *` hatayein, `WHERE` filter sabse pehle lagayein aur unnecessary `DISTINCT` se bachein.',
      },
    ],
    codeLabel: 'POSTGRESQL • INDEX-FRIENDLY (SARGABLE) QUERY + EXPLAIN',
    code: `-- Fast: uses an index on order_date!
EXPLAIN ANALYZE
SELECT order_id, amount
FROM orders
WHERE order_date >= DATE '2026-01-01'
  AND order_date <  DATE '2026-02-01';`,
    codeOutput: `Index Scan using idx_orders_date on orders (actual time=0.04..0.18 rows=420)
Execution Time: 0.25 ms`,
    codeCaptionEn: 'Writing a direct date range allowed PostgreSQL to use `Index Scan` and finish in `0.25 ms`.',
    codeCaptionHi: 'Direct date range likhne se PostgreSQL ne `Index Scan` use kiya aur query sirf `0.25 ms` mein poori ho gayi.',
    tableTitle: 'Slow SQL Anti-Patterns vs Fast Pro Alternatives',
    tableHeaders: ['Slow Anti-Pattern', 'Fast Pro Alternative', 'Why It Is Faster'],
    tableRows: [
      ['WHERE YEAR(dt) = 2026', "WHERE dt >= '2026-01-01' AND dt < '2027-01-01'", 'Allows B-tree Index Scan'],
      ['SELECT * FROM huge_tbl', 'SELECT id, amount FROM huge_tbl', 'Reads far less disk & network I/O'],
      ["WHERE name LIKE '%son'", "WHERE name LIKE 'John%' (or full-text index)", 'Leading `%` disables standard B-tree index'],
      ['Blind `SELECT DISTINCT` to hide dupes', 'Fix the buggy `JOIN` key', 'Avoids expensive sort + fixes root bug'],
    ],
    tableNoteEn: 'Caution: `EXPLAIN` only estimates the plan, whereas `EXPLAIN ANALYZE` actually **runs** the query — never run `EXPLAIN ANALYZE` on a `DELETE`/`UPDATE` without wrapping it in a rolled-back transaction.',
    tableNoteHi: 'Yaad rakhein: `EXPLAIN` sirf plan dikhata hai, jabki `EXPLAIN ANALYZE` query ko sach mein run karta hai.',
    mistakeEn: 'Slapping `SELECT DISTINCT` onto a broken `JOIN` to hide duplicate rows — it slows down the query AND masks a serious data-modeling bug!',
    mistakeHi: 'Galat `JOIN` se aayi duplicate rows chhupane ke liye upar se `SELECT DISTINCT` chipka dena — isse query slow hoti hai aur asli bug chhup jaata hai!',
    proHabitEn: 'Validate every analytical query by checking row counts, NULL counts, and total `SUM(revenue)` against a known source-of-truth table.',
    proHabitHi: 'Har report query ko final karne se pehle row count, NULL count aur total `SUM(revenue)` ko source-of-truth se zaroor match karein.',
    jobUseEn: 'Keeps company dashboards loading in <2 seconds, prevents runaway cloud warehouse bills (BigQuery/Snowflake), and ensures executive numbers are 100% trustworthy.',
    jobUseHi: 'Dashboards ko 2 second ke andar load rakhne, cloud warehouse billing bachane aur executive numbers ko 100% accurate rakhne mein use hota hai.',
    mcq1Question: 'Why is `WHERE order_date >= \'2026-01-01\' AND order_date < \'2027-01-01\'` faster than `WHERE EXTRACT(YEAR FROM order_date) = 2026`?',
    mcq1Correct: 'Wrapping an indexed column in a function (`EXTRACT`) prevents PostgreSQL from using a standard B-tree index.',
    mcq1Wrongs: [
      '`EXTRACT` cannot read dates in 2026.',
      'Range comparisons delete half the table automatically.',
      'PostgreSQL does not support `=`.',
    ],
    mcq1Explain: 'Leaving the indexed column bare on one side of the comparison (sargable) lets the planner perform a fast Index Scan.',
    mcq2Question: 'What does `EXPLAIN ANALYZE` show you in PostgreSQL?',
    mcq2Correct: 'The actual execution plan (e.g., Seq Scan vs Index Scan), real row counts, and measured execution time.',
    mcq2Wrongs: [
      'A plain-English summary of your table’s business meaning.',
      'Automatically creates missing indexes on your table.',
      'Exports your query to a CSV file.',
    ],
    mcq2Explain: '`EXPLAIN ANALYZE` executes the query and reports the exact operations, costs, and timings.',
    realWorldScenario:
      'A dashboard query takes 45 seconds on a 20-million-row `orders` table. You run `EXPLAIN ANALYZE`, spot a `Seq Scan` caused by `WHERE DATE_TRUNC(\'day\', created_at) = ...`, rewrite it as a direct timestamp range, and drop runtime to 0.3 seconds.',
    interviewQ1: 'What makes a `WHERE` clause "sargable", and why does it matter?',
    interviewA1:
      'Sargable (Search ARGument ABLE) means the database can use an index on the filtered column because the column isn’t wrapped in a function or math expression (e.g., `col >= X` instead of `FUNC(col) = Y`).',
    interviewQ2: 'How do you validate that a complex multi-join SQL report has accurate numbers before sending it to leadership?',
    interviewA2:
      'Check total row counts before and after each join, verify `SUM(revenue)` matches the raw `orders` fact table, test edge cases (NULLs, cancelled orders), and spot-check 3–5 individual IDs manually.',
  },
  // =========================================================================
  // MODULE 19: Data Pipelines and Engineering Basics (IDs 198–207)
  // =========================================================================
  {
    id: 198,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 1,
    title: 'Introduction to Data Engineering',
    subtitle: 'BUILDING RELIABLE DATA PLUMBING SO ANALYSTS AND ML MODELS THRIVE',
    coreEn:
      'Data Engineering designs, builds, and maintains automated data pipelines that collect raw data from apps, APIs, and databases, clean and validate it, and deliver trustworthy tables on schedule.',
    coreHi:
      'Data Engineering automated data pipelines design, build aur maintain karti hai — jo apps, APIs aur databases se raw data lekar clean aur validate karti hain aur time par reliable tables deliver karti hain.',
    analogyTitle: 'City Water Supply Pipes vs Carrying Buckets from a River',
    analogyEn:
      'Data Scientists are like chefs cooking insights and ML models. Without Data Engineers building clean water pipes (pipelines), chefs would spend all day walking to the river with buckets (manually downloading messy CSVs).',
    analogyHi:
      'Data Scientists chef ki tarah hain jo insights aur ML models banate hain. Data Engineers shahar ki saaf water pipeline banate hain — unke bina chefs ko roz balti lekar nadi se raw CSV bharna padta!',
    steps: [
      {
        title: 'Ingest From Sources',
        en: 'Pull raw data reliably from app databases, third-party APIs, mobile events, and partner files.',
        hi: 'App databases, APIs, mobile events aur partner files se raw data reliably collect karein.',
      },
      {
        title: 'Store & Validate',
        en: 'Land immutable raw data in a staging lake/warehouse and check schemas, nulls, and freshness.',
        hi: 'Raw data ko staging area mein safe store karein aur schema, nulls, freshness check karein.',
      },
      {
        title: 'Transform into Analytics Models',
        en: 'Clean, deduplicate, and join raw tables into business-ready reporting and ML feature tables.',
        hi: 'Raw tables ko clean, deduplicate aur join karke business-ready reporting aur ML feature tables banayein.',
      },
      {
        title: 'Schedule, Monitor & Alert',
        en: 'Automate runs (e.g., daily at 2 AM) with logging and alerts if any step fails.',
        hi: 'Pipelines ko automate (jaise roz raat 2 baje) karein aur fail hone par logging aur alert set karein.',
      },
    ],
    codeLabel: 'PYTHON • SIMPLE MODULAR DATA PIPELINE SKELETON',
    code: `def extract(raw_rows):
    return list(raw_rows)

def transform(rows):
    return [{"id": r["id"], "amt": float(r["amt"])} for r in rows if r["amt"] is not None]

def load(clean_rows):
    print(f"Loaded {len(clean_rows)} clean records ->", clean_rows)

raw = [{"id": 1, "amt": "250"}, {"id": 2, "amt": None}, {"id": 3, "amt": "400"}]
load(transform(extract(raw)))`,
    codeOutput: `Loaded 2 clean records -> [{'id': 1, 'amt': 250.0}, {'id': 3, 'amt': 400.0}]`,
    codeCaptionEn: 'Separating `extract`, `transform`, and `load` into distinct functions makes every stage easy to test and debug.',
    codeCaptionHi: '`extract`, `transform`, aur `load` ko alag functions mein baantne se har stage ko test aur debug karna aasan ho jaata hai.',
    tableTitle: 'Data Engineer vs Data Analyst vs Data Scientist',
    tableHeaders: ['Role', 'Primary Focus', 'Core Tools'],
    tableRows: [
      ['Data Engineer', 'Reliable pipelines, warehouses, data quality', 'Python, SQL, Airflow, Spark, dbt'],
      ['Data Analyst', 'Dashboards, KPIs, business reporting', 'SQL, Excel, Power BI, Tableau'],
      ['Data Scientist', 'Predictive ML models, experiments, AI', 'Python, Pandas, Scikit-Learn, PyTorch'],
    ],
    tableNoteEn: 'Even as a Data Scientist, knowing Data Engineering basics lets you build self-sufficient, production-ready ML workflows.',
    tableNoteHi: 'Data Scientist hote hue bhi Data Engineering basics aane se aap production-ready aur independent ML pipelines bana paate hain.',
    mistakeEn: 'Treating a messy one-off Jupyter Notebook that requires clicking "Run All" manually every morning as a production data pipeline.',
    mistakeHi: 'Ek messy Jupyter Notebook ko jisme roz subah manually "Run All" dabana pade, use production data pipeline maan lena.',
    proHabitEn: 'Design every pipeline to be modular, automated, idempotent (safe to re-run without creating duplicates), and monitored.',
    proHabitHi: 'Har pipeline ko modular, automated, idempotent (dobara run karne par duplicate na banaye) aur monitored banayein.',
    jobUseEn: 'Every AI/ML system fails on bad data ("Garbage In, Garbage Out"); Data Engineering guarantees fresh, accurate, ML-ready data every day.',
    jobUseHi: 'Har AI/ML system kharab data par fail hota hai ("Garbage In, Garbage Out"); Data Engineering roz fresh aur accurate data guarantee karti hai.',
    mcq1Question: 'What does "idempotency" mean in a data pipeline?',
    mcq1Correct: 'Running the pipeline twice for the same date produces the exact same result without creating duplicate rows.',
    mcq1Wrongs: [
      'The pipeline deletes the entire database every night.',
      'The pipeline can only run once a year.',
      'The pipeline ignores all errors silently.',
    ],
    mcq1Explain: 'Idempotent pipelines (e.g., overwriting a day’s partition or using `UPSERT`) allow safe retries after failures.',
    mcq2Question: 'Which role is primarily responsible for building automated, reliable data pipelines and maintaining data warehouses?',
    mcq2Correct: 'Data Engineer',
    mcq2Wrongs: ['UI/UX Designer', 'Frontend Developer', 'Manual QA Tester'],
    mcq2Explain: 'Data Engineers build the ingestion, storage, transformation, and orchestration infrastructure that powers analytics and ML.',
    realWorldScenario:
      'Your ML churn model broke on Monday because a manual CSV upload was missed on Sunday. You replace the manual step with an automated scheduled Python pipeline.',
    interviewQ1: 'Why is Data Engineering essential for successful Machine Learning in production?',
    interviewA1:
      'ML models need consistent, fresh, validated features in both training and serving. Without reliable pipelines, models suffer from broken schemas, stale data, and silent prediction drift.',
    interviewQ2: 'What makes a data pipeline "production-ready" compared to an exploratory notebook?',
    interviewA2:
      'Modular version-controlled code, automated scheduling, schema validation, idempotent writes, structured logging, and failure alerting.',
  },
  {
    id: 199,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 2,
    title: 'Data Ingestion Concepts',
    subtitle: 'FULL LOADS, INCREMENTAL LOADS, WATERMARKS, AND CDC EXPLAINED',
    coreEn:
      'Data ingestion is the first mile of a pipeline — moving data from source systems into storage using either **Full Loads** (copy everything), **Incremental Loads** (copy only new/updated rows via a watermark), or **CDC** (Change Data Capture).',
    coreHi:
      'Data ingestion pipeline ka pehla kadam hai — source se data lana: **Full Load** (poora table copy karna), **Incremental Load** (sirf naye/updated rows watermark se lana), ya **CDC** (har change real-time capture karna).',
    analogyTitle: 'Backing Up All Photos vs Syncing Only Today’s New Photos',
    analogyEn:
      'A **Full Load** copies all 50,000 photos from your phone every single night (slow & expensive). An **Incremental Load** checks the timestamp of the last synced photo (the **watermark**) and uploads only the 12 new photos taken today.',
    analogyHi:
      '**Full Load** roz raat phone ki saari 50,000 photos dobara upload karne jaisa hai. **Incremental Load** pichhle sync ka time (**watermark**) dekhta hai aur sirf aaj ki 12 nayi photos sync karta hai.',
    steps: [
      {
        title: 'Choose Full vs Incremental Mode',
        en: 'Use Full Load only for tiny lookup tables (<100k rows); use Incremental Load for large growing event/order tables.',
        hi: 'Chhote lookup tables ke liye Full Load aur bade roz badhne wale orders/events tables ke liye Incremental Load chunein.',
      },
      {
        title: 'Track a Reliable Watermark',
        en: 'Store the latest `updated_at` timestamp or max `id` processed so the next run fetches `WHERE updated_at > last_watermark`.',
        hi: 'Pichhle run ka `max(updated_at)` ya `max(id)` watermark save karein taaki agla run sirf usse naya data laaye.',
      },
      {
        title: 'Handle Updates with Upsert (`MERGE`)',
        en: 'When an old order’s status changes from `pending` to `delivered`, `UPSERT` updates the existing row instead of duplicating it.',
        hi: 'Agar purane order ka status badle, toh duplicate banane ke bajaye `UPSERT` (`MERGE`) se wahi row update karein.',
      },
      {
        title: 'Land Raw Copy Untouched',
        en: 'Save ingested data into a raw/bronze zone first so you can replay transformations if bugs are found later.',
        hi: 'Ingested data ko pehle raw/bronze layer mein bina badle save karein taaki zaroorat par replay kar sakein.',
      },
    ],
    codeLabel: 'PYTHON • INCREMENTAL WATERMARK INGESTION',
    code: `source_orders = [
    {"id": 101, "updated_at": "2026-01-01", "amt": 500},
    {"id": 102, "updated_at": "2026-01-02", "amt": 800},
    {"id": 103, "updated_at": "2026-01-03", "amt": 650},
]
last_watermark = "2026-01-01"

new_batch = [r for r in source_orders if r["updated_at"] > last_watermark]
new_watermark = max(r["updated_at"] for r in new_batch)
print("Ingested rows:", len(new_batch), "| New watermark:", new_watermark)`,
    codeOutput: `Ingested rows: 2 | New watermark: 2026-01-03`,
    codeCaptionEn: 'Only the 2 records newer than `2026-01-01` were fetched, and the watermark advanced to `2026-01-03`.',
    codeCaptionHi: 'Sirf `2026-01-01` ke baad ke 2 naye records fetch hue aur watermark update hokar `2026-01-03` ho gaya.',
    tableTitle: 'Comparing Ingestion Strategies',
    tableHeaders: ['Strategy', 'How It Works', 'Best For'],
    tableRows: [
      ['Full Load', 'Truncate & reload entire table', 'Small lookup tables (countries, products)'],
      ['Incremental (Watermark)', 'Fetch `updated_at > last_run`', 'Large daily orders, logs, transactions'],
      ['CDC (Change Data Capture)', 'Reads DB transaction log (WAL)', 'Near real-time sync including deletes'],
      ['Webhook / Push', 'Source pushes events to your endpoint', 'Payment gateways (Stripe/Razorpay)'],
    ],
    tableNoteEn: 'Watermark ingestion alone cannot detect hard `DELETE`s in the source database — CDC or soft-delete flags (`is_deleted = true`) solve that.',
    tableNoteHi: 'Simple watermark se source database ke hard `DELETE`s pata nahi chalte — uske liye CDC ya `is_deleted` flag use hota hai.',
    mistakeEn: 'Running a Full Load every hour on a 100-million-row `orders` table, overloading the live production database and slowing down customer checkout!',
    mistakeHi: '10 crore rows wale live `orders` table par har ghante Full Load chalana — jisse live website aur checkout slow ho jaata hai!',
    proHabitEn: 'Ingest incrementally from a **read replica** (not the primary app DB) using `updated_at` watermarks or CDC.',
    proHabitHi: 'Live production DB ke bajaye hamesha **read replica** se `updated_at` watermark ya CDC ke zariye incremental data ingest karein.',
    jobUseEn: 'Tools like Fivetran, Airbyte, and Debezium use these exact watermark and CDC patterns to sync app databases into cloud warehouses.',
    jobUseHi: 'Fivetran, Airbyte aur Debezium jaise industry tools bilkul isi watermark aur CDC pattern se databases ko cloud warehouse mein sync karte hain.',
    mcq1Question: 'What is a "watermark" in incremental data ingestion?',
    mcq1Correct: 'A saved marker (like the last `updated_at` timestamp or max ID) used to fetch only newly added or modified rows.',
    mcq1Wrongs: [
      'A company logo placed on a Matplotlib chart.',
      'A rule that deletes old columns automatically.',
      'A password used to log into PostgreSQL.',
    ],
    mcq1Explain: 'Tracking the high-watermark ensures each incremental run fetches only deltas since the previous successful load.',
    mcq2Question: 'Which ingestion method captures inserts, updates, AND hard deletes directly from a database’s transaction log?',
    mcq2Correct: 'Change Data Capture (CDC)',
    mcq2Wrongs: ['Manual CSV export', 'Append-only `created_at` watermark', 'Static JSON file'],
    mcq2Explain: 'Log-based CDC (like Debezium reading PostgreSQL’s WAL) captures every row-level insert, update, and delete with minimal load on the source DB.',
    realWorldScenario:
      'Your startup’s `transactions` table hit 50 million rows and the nightly Full Load now takes 4 hours. Switching to an `updated_at` incremental load cuts sync time to 2 minutes.',
    interviewQ1: 'What is the difference between Full Load and Incremental Load?',
    interviewA1:
      'Full Load reloads the entire source table on every run (simple, best for small tables). Incremental Load fetches only new or changed rows since the last watermark (fast and scalable for large tables).',
    interviewQ2: 'Why should ingestion jobs read from a database read-replica instead of the primary production database?',
    interviewA2:
      'Heavy analytical scan queries consume CPU, RAM, and disk I/O; isolating them on a read replica ensures live customer transactions are never slowed down.',
  },
  {
    id: 200,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 3,
    title: 'Batch Processing vs Streaming',
    subtitle: 'SCHEDULED BULK RUNS VS CONTINUOUS REAL-TIME EVENT PROCESSING',
    coreEn:
      '**Batch processing** collects data over a period (hourly/daily) and processes it in bulk, whereas **Streaming** processes every single event continuously within milliseconds to seconds as it arrives.',
    coreHi:
      '**Batch processing** data ko jama karke fixed time par (har ghante ya roz raat) ek saath process karta hai, jabki **Streaming** har ek event ko aate hi milliseconds/seconds mein real-time process karta hai.',
    analogyTitle: 'Daily Postal Mail Truck vs Instant WhatsApp Message',
    analogyEn:
      'Batch processing is a postal truck that collects all letters for 24 hours and delivers them efficiently in one trip (low cost, higher delay). Streaming is WhatsApp — each message is delivered instantly the moment you press send.',
    analogyHi:
      'Batch processing roz shaam aane wale post truck jaisa hai jo saari chitthiyan ek saath le jaata hai (sasta, thoda delay). Streaming WhatsApp jaisa hai — send dabate hi turant delivery!',
    steps: [
      {
        title: 'Measure Business Latency Needs',
        en: 'Ask stakeholders: "Do we lose money if this data is 1 hour old, or do we truly need sub-second updates?"',
        hi: 'Stakeholders se poochhein: "Kya 1 ghante purane data se kaam chalega, ya sach mein 1-second real-time chahiye?"',
      },
      {
        title: 'Pick Batch for Most Analytics & ML Training',
        en: 'Use scheduled batch jobs (Cron, Airflow, Spark) for daily dashboards, billing, and weekly ML retraining.',
        hi: 'Daily dashboards, billing aur ML retraining ke liye simple aur reliable Batch processing (Airflow/Spark) chunein.',
      },
      {
        title: 'Pick Streaming for Instant Action',
        en: 'Use Kafka/Flink/PubSub for credit-card fraud blocking, ride-hailing surge pricing, and live IoT alarms.',
        hi: 'Fraud detection, live ride pricing aur IoT alarms ke liye Streaming (Kafka/Flink) use karein.',
      },
      {
        title: 'Consider Micro-Batching as a Middle Ground',
        en: 'Running small 1–5 minute batches often gives "near real-time" freshness at a fraction of true streaming complexity.',
        hi: '1–5 minute ke micro-batches kai baar kam complexity mein near real-time freshness de dete hain.',
      },
    ],
    codeLabel: 'PYTHON • BATCH SUMMARY VS STREAMING ALERT',
    code: `events = [
    {"txn": 1, "amt": 400},
    {"txn": 2, "amt": 95000},
    {"txn": 3, "amt": 1200},
]

# Streaming style: act immediately on each event
for e in events:
    if e["amt"] > 50000:
        print(f"[STREAM ALERT] Block & verify txn {e['txn']} (Rs {e['amt']})")

# Batch style: summarize whole group at end of day
print(f"[BATCH SUMMARY] Total volume: Rs {sum(e['amt'] for e in events)}")`,
    codeOutput: `[STREAM ALERT] Block & verify txn 2 (Rs 95000)
[BATCH SUMMARY] Total volume: Rs 96600`,
    codeCaptionEn: 'Streaming reacts instantly to Transaction 2, while Batch computes the end-of-day total across all transactions.',
    codeCaptionHi: 'Streaming ne Transaction 2 par turant alert diya, jabki Batch ne din ke end mein sabka total nikala.',
    tableTitle: 'Batch Processing vs Streaming Comparison',
    tableHeaders: ['Factor', 'Batch Processing', 'Stream Processing'],
    tableRows: [
      ['Latency', 'Minutes, hours, or daily', 'Milliseconds to seconds'],
      ['Cost & Complexity', 'Lower, simpler to debug & backfill', 'Higher (24/7 clusters, state management)'],
      ['Popular Tools', 'Airflow, dbt, Spark Batch, Cron', 'Apache Kafka, Apache Flink, Spark Streaming'],
      ['Ideal Use Cases', 'Monthly finance reports, ML training', 'Fraud blocking, live GPS tracking, alerts'],
    ],
    tableNoteEn: 'Rule of thumb in industry: **Start with Batch** unless a clear business case demands sub-minute latency.',
    tableNoteHi: 'Industry rule: Jab tak sub-minute real-time ki pakki zaroorat na ho, **hamesha Batch se shuruat karein**.',
    mistakeEn: 'Over-engineering a complex 24/7 Kafka + Flink streaming architecture for an executive dashboard that managers only open once every Monday morning!',
    mistakeHi: 'Aise dashboard ke liye jo manager sirf Monday subah kholta hai, mehanga 24/7 real-time Kafka streaming system bana dena!',
    proHabitEn: 'Match architecture to business SLA: Batch for daily/hourly decisions, Micro-batch for 5-minute ops, Streaming for instant automated actions.',
    proHabitHi: 'Business zaroorat ke hisaab se architecture chunein: daily reports ke liye Batch aur instant fraud/alerts ke liye Streaming.',
    jobUseEn: 'Understanding batch vs streaming helps Data Scientists decide whether ML features should be pre-computed nightly (offline store) or served live (online store).',
    jobUseHi: 'Is samajh se Data Scientists tay karte hain ki ML features raat ko batch mein banenge (offline store) ya live calculate honge (online store).',
    mcq1Question: 'Which real-world use case genuinely requires **Stream Processing** instead of nightly Batch Processing?',
    mcq1Correct: 'Blocking a fraudulent credit card swipe before the payment is approved.',
    mcq1Wrongs: [
      'Generating a monthly employee payroll PDF.',
      'Calculating last quarter’s regional sales report.',
      'Sending an annual customer birthday summary.',
    ],
    mcq1Explain: 'Fraud blocking must decide in milliseconds during checkout — waiting for a nightly batch is far too late.',
    mcq2Question: 'Why do most data teams prefer Batch Processing when real-time latency is NOT required?',
    mcq2Correct: 'It is cheaper, simpler to operate, easier to debug, and straightforward to re-run/backfill.',
    mcq2Wrongs: [
      'Because Batch Processing cannot use Python or SQL.',
      'Because Streaming cannot handle numbers.',
      'Because Batch runs faster than 1 millisecond.',
    ],
    mcq2Explain: 'Batch jobs only consume compute while running and avoid the operational overhead of 24/7 stateful streaming clusters.',
    realWorldScenario:
      'A ride-sharing app uses Streaming to match drivers and riders in real time, and nightly Batch Processing to compute driver weekly payouts and city demand reports.',
    interviewQ1: 'When would you choose Batch Processing vs Stream Processing?',
    interviewA1:
      'Choose Batch for high-throughput periodic workloads where minutes/hours of latency are acceptable (reporting, billing, ML training). Choose Streaming when value decays within seconds (fraud detection, live recommendations, alerting).',
    interviewQ2: 'What is "micro-batching"?',
    interviewA2:
      'Micro-batching processes incoming data in very small, frequent batches (e.g., every 10 seconds to 5 minutes), balancing near real-time freshness with simpler batch semantics.',
  },
  {
    id: 201,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 4,
    title: 'ETL vs ELT',
    subtitle: 'TRANSFORMING BEFORE LOADING VS TRANSFORMING INSIDE CLOUD WAREHOUSES',
    coreEn:
      'In **ETL** (Extract, Transform, Load), you clean and reshape data on a separate server *before* loading it into the warehouse. In modern **ELT** (Extract, Load, Transform), you load raw data directly into a fast cloud warehouse first, then transform it using SQL (`dbt`).',
    coreHi:
      '**ETL** (Extract, Transform, Load) mein data warehouse mein dalne se *pehle* alag server par clean hota hai. Modern **ELT** (Extract, Load, Transform) mein pehle raw data seedha cloud warehouse mein load hota hai, phir andar SQL (`dbt`) se transform hota hai.',
    analogyTitle: 'Washing Vegetables Before Putting in Fridge (ETL) vs Storing Raw & Cooking On Demand (ELT)',
    analogyEn:
      'ETL is washing, chopping, and cooking vegetables before putting them in a small fridge (saves fridge space, but you can’t un-chop them later). ELT is having a huge modern walk-in pantry where you store raw ingredients first and cook whatever recipe analysts need anytime!',
    analogyHi:
      'ETL chhote fridge ke liye sabzi pehle hi kaat-paka kar rakhne jaisa hai (baad mein recipe nahi badal sakte). ELT bade modern pantry jaisa hai jahan raw data safe rakha jaata hai aur zaroorat ke hisaab se SQL se alag-alag tables bana lete hain!',
    steps: [
      {
        title: 'Extract Raw Source Data',
        en: 'Pull data from PostgreSQL, Salesforce, Stripe, or CSV files in both ETL and ELT.',
        hi: 'ETL aur ELT dono ka pehla step source (DB, API, CSV) se raw data extract karna hai.',
      },
      {
        title: 'Decide Where Transformation Lives',
        en: 'Use **ETL** when you must mask/drop sensitive PII before cloud storage; use **ELT** for fast, flexible cloud analytics.',
        hi: 'Agar cloud mein bhejne se pehle sensitive PII mask karni ho toh **ETL**; fast flexible cloud analytics ke liye **ELT** chunein.',
      },
      {
        title: 'Keep Raw Layer Immutable (ELT)',
        en: 'In ELT, analysts can always rebuild clean tables from the untouched raw layer if business rules change.',
        hi: 'ELT mein untouched raw layer safe rehti hai, isliye business rule badalne par clean tables turant rebuild ho sakti hain.',
      },
      {
        title: 'Version-Control SQL Transformations',
        en: 'Use modular SQL (e.g., dbt models) in ELT so every transformation is tested and tracked in Git.',
        hi: 'ELT mein SQL transformations ko Git aur dbt mein version-control aur test karein.',
      },
    ],
    codeLabel: 'POSTGRESQL • MODERN ELT TRANSFORMATION IN WAREHOUSE',
    code: `-- Raw table already loaded (E -> L); now Transform (T) inside warehouse
CREATE OR REPLACE VIEW analytics_clean_orders AS
SELECT
    order_id,
    INITCAP(TRIM(city)) AS city,
    COALESCE(amount, 0) AS amount_inr,
    order_date::DATE AS order_day
FROM raw_orders
WHERE order_id IS NOT NULL;`,
    codeOutput: `CREATE VIEW
-- Ready for BI dashboards & ML notebooks!`,
    codeCaptionEn: 'In ELT, `raw_orders` stays untouched while `analytics_clean_orders` delivers clean, standardized columns via SQL.',
    codeCaptionHi: 'ELT mein `raw_orders` bilkul safe rehta hai aur `analytics_clean_orders` SQL se clean columns serve karta hai.',
    tableTitle: 'ETL vs ELT Side-by-Side',
    tableHeaders: ['Feature', 'Traditional ETL', 'Modern Cloud ELT'],
    tableRows: [
      ['Order of Steps', 'Extract -> Transform -> Load', 'Extract -> Load -> Transform'],
      ['Where Transform Runs', 'Dedicated ETL server / Python', 'Inside Cloud Warehouse (Snowflake/BigQuery)'],
      ['Raw Data Preserved?', 'Usually discarded after transform', 'Yes — kept in raw/bronze layer'],
      ['Best For', 'Strict PII masking before storage', 'Agile BI, dbt models, scalable cloud analytics'],
    ],
    tableNoteEn: 'Cheap cloud storage + massively parallel SQL warehouses (BigQuery, Snowflake, Redshift) are why ELT became the modern standard.',
    tableNoteHi: 'Sasti cloud storage aur super-fast cloud warehouses (BigQuery, Snowflake) ki wajah se aaj ELT modern standard ban gaya hai.',
    mistakeEn: 'Overwriting or deleting raw ingested data after transforming it — if you discover a formula bug 3 months later, you have no way to reprocess historical data!',
    mistakeHi: 'Transform karne ke baad raw data delete kar dena — agar 3 mahine baad koi bug mile toh purana data wapas theek karne ka koi rasta nahi bachta!',
    proHabitEn: 'Always preserve an immutable raw layer (ELT mindset), and only apply pre-load ETL stripping for strict compliance/PII fields.',
    proHabitHi: 'Hamesha ek untouched raw layer safe rakhein, aur sirf strict privacy/PII masking ke liye load se pehle ETL lagayein.',
    jobUseEn: 'Modern Data Stack companies run Airbyte/Fivetran (E+L) + BigQuery/Snowflake + dbt (T) as their everyday ELT workflow.',
    jobUseHi: 'Aaj ki tech companies Airbyte/Fivetran (E+L) + BigQuery/Snowflake + dbt (T) ka ELT workflow roz use karti hain.',
    mcq1Question: 'What is the main difference between ETL and ELT?',
    mcq1Correct: 'ETL transforms data *before* loading into the warehouse; ELT loads raw data *first* and transforms it inside the warehouse.',
    mcq1Wrongs: [
      'ELT skips the Extract step completely.',
      'ETL only works with Excel spreadsheets.',
      'ELT does not allow SQL queries.',
    ],
    mcq1Explain: 'The order of **L** (Load) and **T** (Transform) determines whether raw data lands in the warehouse first.',
    mcq2Question: 'When is pre-load transformation (ETL) still strictly preferred over loading raw data directly (ELT)?',
    mcq2Correct: 'When sensitive PII (like Aadhaar/SSN or credit card numbers) must be masked or removed before entering a cloud warehouse.',
    mcq2Wrongs: [
      'When you want to use SQL `GROUP BY`.',
      'When your dataset has fewer than 10 rows.',
      'When you want to keep raw data forever.',
    ],
    mcq2Explain: 'Regulatory compliance (GDPR, HIPAA, PCI-DSS) often forbids storing unmasked sensitive fields in shared analytics warehouses.',
    realWorldScenario:
      'Your startup loads raw Stripe, Shopify, and PostgreSQL tables into BigQuery with Airbyte, then transforms them into clean revenue models using SQL/dbt (ELT).',
    interviewQ1: 'Why has ELT largely replaced traditional ETL in modern cloud data stacks?',
    interviewA1:
      'Cloud warehouses offer cheap storage and elastic massively parallel SQL compute, allowing teams to load raw data fast, keep historical raw copies for replay, and iterate on SQL transformations without bottlenecks.',
    interviewQ2: 'Give one scenario where you would combine ETL and ELT ("EtLT").',
    interviewA2:
      'Mask or hash sensitive PII fields in a lightweight pre-load step (small `t`), load the safe raw data into the warehouse (`L`), and run all business joins and aggregations inside the warehouse (`T`).',
  },
  {
    id: 202,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 5,
    title: 'Data Transformation Pipelines',
    subtitle: 'BRONZE -> SILVER -> GOLD LAYERS AND CLEAN PIPELINE STAGES',
    coreEn:
      'A transformation pipeline turns messy raw data into analytics- and ML-ready tables through structured layers: **Bronze** (raw untouched), **Silver** (cleaned, typed, deduplicated), and **Gold** (aggregated KPIs & feature tables).',
    coreHi:
      'Transformation pipeline gande raw data ko step-by-step clean tables mein badalti hai: **Bronze** (asli raw data), **Silver** (cleaned, typed, deduplicated), aur **Gold** (business KPIs aur ML feature tables).',
    analogyTitle: 'Gold Ore Refining Factory (Bronze -> Silver -> Gold)',
    analogyEn:
      'Raw rocks from the mine are **Bronze** (raw logs). Crushing and removing dirt gives pure metal bars — **Silver** (clean typed tables). Shaping bars into finished jewelry ready for display is **Gold** (executive KPI tables).',
    analogyHi:
      'Khadan se nikla kaccha patthar **Bronze** (raw data) hai. Safai karke shuddh dhatu banana **Silver** (clean table) hai. Aur usse ready jewelry banana **Gold** (dashboard & ML ready table) hai.',
    steps: [
      {
        title: 'Bronze Layer: Preserve Raw Fidelity',
        en: 'Store exact source records with an `ingested_at` timestamp — never modify Bronze rows.',
        hi: 'Source se aaya exact data `ingested_at` timestamp ke saath Bronze mein safe rakhein — ise kabhi edit na karein.',
      },
      {
        title: 'Silver Layer: Clean, Type & Deduplicate',
        en: 'Standardize column names, parse dates, cast numbers, handle nulls, and remove duplicate keys.',
        hi: 'Silver layer mein column names, dates, data types, nulls aur duplicate keys ko clean karein.',
      },
      {
        title: 'Gold Layer: Aggregate & Model for Business',
        en: 'Join Silver tables into focused business marts like `daily_city_revenue` or `customer_ml_features`.',
        hi: 'Silver tables ko join aur aggregate karke `daily_city_revenue` ya `customer_ml_features` jaise Gold tables banayein.',
      },
      {
        title: 'Add Automated Data Tests Between Layers',
        en: 'Assert `not_null`, `unique`, and `amount >= 0` before promoting Silver to Gold.',
        hi: 'Silver se Gold banate waqt automated tests (`not_null`, `unique`, `amount >= 0`) zaroor chalayein.',
      },
    ],
    codeLabel: 'PYTHON • BRONZE -> SILVER -> GOLD TRANSFORMATION',
    code: `import pandas as pd

# Bronze: raw messy records
bronze = pd.DataFrame([
    {"order_id": 1, "city": " delhi ", "amt": "500"},
    {"order_id": 1, "city": " delhi ", "amt": "500"},
    {"order_id": 2, "city": "Pune", "amt": "300"},
])

# Silver: deduplicated, trimmed, typed
silver = (
    bronze.drop_duplicates(subset=["order_id"])
          .assign(city=lambda d: d["city"].str.strip().str.title(),
                  amt=lambda d: d["amt"].astype(float))
)

# Gold: business KPI summary
gold = silver.groupby("city", as_index=False)["amt"].sum()
print(gold)`,
    codeOutput: `    city    amt
0  Delhi  500.0
1   Pune  300.0`,
    codeCaptionEn: 'Bronze kept the raw input, Silver cleaned & deduplicated Order 1, and Gold produced the clean city KPI table.',
    codeCaptionHi: 'Bronze mein raw data raha, Silver ne duplicate Order 1 hataya aur type fix kiya, aur Gold ne city KPI table banayi.',
    tableTitle: 'Medallion Architecture (Bronze / Silver / Gold)',
    tableHeaders: ['Layer', 'State of Data', 'Who Consumes It?'],
    tableRows: [
      ['Bronze (Raw)', 'Exact copy from source + metadata', 'Data Engineers (for replay/audit)'],
      ['Silver (Clean)', 'Cleaned, typed, deduplicated, conformed', 'Data Scientists & Analytics Engineers'],
      ['Gold (Curated)', 'Aggregated KPIs, star-schema marts', 'BI Dashboards, Executives, ML Serving'],
    ],
    tableNoteEn: 'Separating Silver and Gold stops 10 different teams from each re-cleaning the same raw table in 10 slightly different ways!',
    tableNoteHi: 'Silver aur Gold alag rakhne se 10 teams ko ek hi raw table ko 10 alag tarike se baar-baar clean nahi karna padta!',
    mistakeEn: 'Cramming ingestion, cleaning, deduplication, and complex KPI aggregation all into one giant 400-line script — when anything breaks, nobody knows which layer failed.',
    mistakeHi: 'Ingestion, cleaning, deduplication aur KPI aggregation sabko ek hi 400-line script mein thoons dena — bug aane par debug karna mushkil ho jaata hai.',
    proHabitEn: 'Structure every pipeline into clear Bronze -> Silver -> Gold stages with small, testable functions and automated assertions.',
    proHabitHi: 'Har pipeline ko clean Bronze -> Silver -> Gold stages mein baantein aur har stage ke baad chhote data tests lagayein.',
    jobUseEn: 'The Medallion Architecture (Bronze/Silver/Gold) is the global industry standard across Databricks, Snowflake, BigQuery, and dbt.',
    jobUseHi: 'Medallion Architecture (Bronze/Silver/Gold) Databricks, Snowflake, BigQuery aur dbt mein duniya bhar ka industry standard hai.',
    mcq1Question: 'In the Medallion Architecture, where should deduplication, type casting, and whitespace trimming happen?',
    mcq1Correct: 'In the Silver layer.',
    mcq1Wrongs: [
      'By manually editing the Bronze raw files.',
      'Only inside Power BI charts.',
      'After deleting the source database.',
    ],
    mcq1Explain: 'Bronze stays raw/untouched; Silver handles cleaning, typing, and deduplication; Gold holds curated aggregations.',
    mcq2Question: 'Why is keeping an untouched Bronze layer so valuable in a transformation pipeline?',
    mcq2Correct: 'If a bug is discovered in cleaning logic later, you can fix the Silver code and reprocess all history cleanly from Bronze.',
    mcq2Wrongs: [
      'Because Bronze tables are always smaller than Gold tables.',
      'Because executives query raw JSON logs directly.',
      'Because SQL cannot read Silver tables.',
    ],
    mcq2Explain: 'Immutable raw storage gives you full auditability and painless historical backfills.',
    realWorldScenario:
      'Two departments reported different monthly revenue because each cleaned `raw_orders` differently. Creating a single shared Silver `clean_orders` table eliminates the mismatch permanently.',
    interviewQ1: 'Explain the Medallion Architecture (Bronze, Silver, Gold) in simple terms.',
    interviewA1:
      'Bronze stores untouched raw ingested data for replayability; Silver cleans, types, and deduplicates data into a single source of truth; Gold builds business-ready aggregated marts and ML feature tables.',
    interviewQ2: 'What is a DAG in data transformation pipelines?',
    interviewA2:
      'A Directed Acyclic Graph (DAG) defines the exact dependency order of pipeline tasks (e.g., Bronze -> Silver -> Gold) with no circular loops, used by orchestrators like Airflow and dbt.',
  },
  {
    id: 203,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 6,
    title: 'Data Formats and Schema Validation',
    subtitle: 'CSV VS JSON VS PARQUET AND CATCHING BROKEN SCHEMAS EARLY',
    coreEn:
      'Choosing the right file format (CSV, JSON, Parquet) affects speed and storage by 10×, while **Schema Validation** enforces strict contracts (required columns, exact types, valid ranges) before bad data enters your pipeline.',
    coreHi:
      'Sahi file format (CSV, JSON, Parquet) speed aur storage ko 10× behtar banata hai, aur **Schema Validation** pipeline mein data ghusne se pehle hi columns, types aur ranges ka contract check karta hai.',
    analogyTitle: 'Airport Baggage Size & Weight Checker Before Boarding',
    analogyEn:
      'Airlines place a metal frame at the gate: if a bag is too big or overweight, it is stopped *before* boarding. Schema validation is that metal frame — if `amount` arrives as `"abc"` or a required column disappears, it stops the bad batch at the gate.',
    analogyHi:
      'Airport gate par baggage size checker hota hai jo galat size ka bag andar jaane se pehle hi rok deta hai. Schema validation bhi wahi checker hai — agar `amount` text `"abc"` ban kar aaye ya column gayab ho, toh wahi ruk jaata hai.',
    steps: [
      {
        title: 'Pick Row-Based vs Columnar Format',
        en: 'Use JSON for nested APIs, CSV for simple human sharing, and **Parquet** (columnar) for fast analytics & ML.',
        hi: 'Nested APIs ke liye JSON, simple sharing ke liye CSV, aur fast analytics/ML ke liye **Parquet** chunein.',
      },
      {
        title: 'Define an Explicit Schema Contract',
        en: 'Specify required column names, data types, non-null rules, and value bounds (e.g., `age >= 0`).',
        hi: 'Required column names, data types, non-null rules aur value ranges (`age >= 0`) ka clear contract likhein.',
      },
      {
        title: 'Validate Automatically at Ingestion',
        en: 'Use Python validators (`pydantic`, `pandera`, or Great Expectations) to fail fast or quarantine bad rows.',
        hi: 'Ingestion par hi `pydantic`, `pandera`, ya custom assertions chalakar bad rows ko turant pakdein.',
      },
      {
        title: 'Handle Schema Drift Gracefully',
        en: 'Alert engineers immediately when an upstream vendor renames a column or changes a type.',
        hi: 'Jab upstream vendor galti se column rename kare ya type badle (schema drift), toh turant alert bhejein.',
      },
    ],
    codeLabel: 'PYTHON • LIGHTWEIGHT SCHEMA VALIDATOR',
    code: `REQUIRED_COLS = {"order_id": int, "amount": (int, float), "city": str}

def validate_row(row):
    for col, expected_type in REQUIRED_COLS.items():
        if col not in row or not isinstance(row[col], expected_type):
            return False, f"Invalid or missing '{col}'"
    if row["amount"] < 0:
        return False, "Negative amount"
    return True, "OK"

print(validate_row({"order_id": 1, "amount": 250.0, "city": "Delhi"}))
print(validate_row({"order_id": 2, "amount": -50, "city": "Pune"}))`,
    codeOutput: `(True, 'OK')
(False, 'Negative amount')`,
    codeCaptionEn: 'Valid rows pass immediately while negative amounts or wrong types are caught before corrupting downstream tables.',
    codeCaptionHi: 'Sahi row turant pass ho gayi jabki negative amount ko downstream tables kharab karne se pehle hi pakad liya gaya.',
    tableTitle: 'Row-Oriented vs Columnar Data Formats',
    tableHeaders: ['Format', 'Structure', 'Schema Embedded?', 'Best Use Case'],
    tableRows: [
      ['CSV', 'Row text', 'No (everything is text)', 'Quick sharing, Excel handoff'],
      ['JSON / JSONL', 'Nested key-value text', 'Partial (per record)', 'REST APIs, event logs'],
      ['Parquet', 'Binary columnar', 'Yes (strict schema)', 'Data lakes, Spark, Pandas, ML'],
      ['Avro', 'Binary row-based', 'Yes (strict schema)', 'Kafka streaming messages'],
    ],
    tableNoteEn: 'Why is columnar Parquet so fast for analytics? If you only query `SUM(amount)` on a 100-column table, Parquet reads *only* the `amount` column from disk!',
    tableNoteHi: 'Columnar Parquet itna tez kyun hai? Kyunki 100 columns mein se sirf `SUM(amount)` poochhne par woh disk se sirf `amount` column hi padhta hai!',
    mistakeEn: 'Assuming upstream CSV/JSON files will never change — then waking up to a broken dashboard because a partner renamed `price` to `unit_price`.',
    mistakeHi: 'Yeh maan kar chalna ki upstream file ka format kabhi nahi badlega — aur ek din `price` ka naam `unit_price` hone par poora dashboard toot jana.',
    proHabitEn: 'Validate every incoming batch against an explicit schema contract and route bad rows to a quarantine ("dead-letter") table instead of silently corrupting Gold data.',
    proHabitHi: 'Har incoming batch ko schema contract se check karein aur kharab rows ko alag quarantine table mein bhejein.',
    jobUseEn: 'Data contracts and schema validation (Pandera, Pydantic, Great Expectations) prevent 80% of silent ML prediction failures in production.',
    jobUseHi: 'Schema validation (Pandera, Pydantic, Great Expectations) production mein 80% silent ML failures ko hone se pehle hi rok deta hai.',
    mcq1Question: 'Why is Apache Parquet dramatically faster than CSV for running `SELECT AVG(price)` on a 50-column dataset?',
    mcq1Correct: 'Parquet is columnar, so it reads only the `price` column from disk and skips the other 49 columns.',
    mcq1Wrongs: [
      'Parquet deletes 49 columns automatically when saving.',
      'CSV cannot store decimal numbers.',
      'Parquet converts all numbers to plain English words.',
    ],
    mcq1Explain: 'Columnar storage compresses similar values together and allows column pruning (reading only needed columns).',
    mcq2Question: 'What is "schema drift" in data engineering?',
    mcq2Correct: 'Unexpected upstream changes to column names, data types, or structure in incoming data.',
    mcq2Wrongs: [
      'Sorting a table alphabetically.',
      'Compressing a CSV file into a ZIP archive.',
      'Running a SQL `JOIN` on two tables.',
    ],
    mcq2Explain: 'Schema drift happens when source apps or vendors alter fields without warning, breaking unvalidated pipelines.',
    realWorldScenario:
      'A payment vendor silently changes `amount` from numeric `499` to string `"499 INR"`. Your schema validator catches it at ingestion and pages the team before the revenue dashboard breaks.',
    interviewQ1: 'Compare row-based storage (CSV/Avro) vs columnar storage (Parquet). When is each better?',
    interviewA1:
      'Row-based is best for write-heavy transactional or streaming workloads where you read/write whole records at once. Columnar (Parquet) is best for read-heavy analytics/ML where you aggregate a few columns across millions of rows.',
    interviewQ2: 'What is a "dead-letter queue" (or quarantine table) in schema validation?',
    interviewA2:
      'It is a separate holding table/bucket where invalid records that fail schema checks are routed for inspection, allowing valid records to continue flowing without halting the whole business.',
  },
  {
    id: 204,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 7,
    title: 'APIs and Data Collection Basics',
    subtitle: 'FETCHING JSON DATA FROM REST APIS WITH REQUESTS, PAGINATION, AND RATE LIMITS',
    coreEn:
      'REST APIs let your Python scripts fetch live external data (weather, stock prices, CRM records) over HTTP using `GET` requests, returning structured JSON that you normalize into a Pandas DataFrame.',
    coreHi:
      'REST APIs ke zariye aapka Python script HTTP `GET` request bhejkar live external data (weather, stock prices, CRM records) JSON format mein laata hai, jise aap seedha Pandas DataFrame mein badal sakte hain.',
    analogyTitle: 'Ordering From a Drive-Thru Menu Window',
    analogyEn:
      'You (client) drive up to the API URL (window), show your API key (membership card), send parameters (`?city=Delhi&days=7`), and the server hands back a neat JSON box with a status code (`200 OK` = order ready, `429` = slow down!).',
    analogyHi:
      'Aap (client) API URL par jaate hain, apni API key dikhate hain, parameters (`?city=Delhi`) dete hain, aur server aapko status code (`200 OK` = success, `429` = thoda ruko) ke saath JSON box de deta hai.',
    steps: [
      {
        title: 'Send Request with Timeout & Params',
        en: 'Call `requests.get(url, params=..., headers=..., timeout=10)` and load API keys from environment variables.',
        hi: '`requests.get(url, params=..., headers=..., timeout=10)` call karein aur API keys hamesha environment variables mein rakhein.',
      },
      {
        title: 'Check HTTP Status Codes',
        en: 'Call `resp.raise_for_status()` so `401` (bad key), `404` (not found), or `500` (server error) fail clearly.',
        hi: '`resp.raise_for_status()` lagayein taaki `401`, `404`, ya `500` error turant pakda jaye.',
      },
      {
        title: 'Handle Pagination & Rate Limits',
        en: 'Loop through `page=1, 2, ...` (or `next_cursor`) with polite `time.sleep()` / exponential backoff on `429`.',
        hi: 'Bade results ke liye `page` ya `next_cursor` loop chalayein aur `429` rate-limit par polite wait/backoff karein.',
      },
      {
        title: 'Flatten Nested JSON to a Table',
        en: 'Use `pd.json_normalize(data["items"])` to turn nested JSON objects into clean DataFrame columns.',
        hi: 'Nested JSON ko clean DataFrame columns mein badalne ke liye `pd.json_normalize()` use karein.',
      },
    ],
    codeLabel: 'PYTHON • FLATTENING API JSON INTO PANDAS',
    code: `import pandas as pd

# Simulated JSON response from a weather REST API (HTTP 200 OK)
api_json = {
    "status": "ok",
    "items": [
        {"city": "Delhi", "metrics": {"temp_c": 31, "humidity": 45}},
        {"city": "Pune",  "metrics": {"temp_c": 27, "humidity": 60}},
    ]
}
df = pd.json_normalize(api_json["items"])
print(df)`,
    codeOutput: `    city  metrics.temp_c  metrics.humidity
0  Delhi              31                45
1   Pune              27                60`,
    codeCaptionEn: '`pd.json_normalize()` automatically unpacked nested `metrics.temp_c` and `metrics.humidity` into flat columns.',
    codeCaptionHi: '`pd.json_normalize()` ne nested `metrics` dictionary ko apne aap clean flat columns mein badal diya.',
    tableTitle: 'HTTP Status Codes Every Data Scientist Must Know',
    tableHeaders: ['Status Code', 'Meaning', 'What Your Pipeline Should Do'],
    tableRows: [
      ['200 OK', 'Request succeeded', 'Parse JSON & continue'],
      ['401 / 403', 'Invalid/missing API key or forbidden', 'Stop & check auth credentials'],
      ['429', 'Too Many Requests (rate limited)', 'Wait with exponential backoff & retry'],
      ['500 / 503', 'Temporary server error', 'Retry a few times, then alert'],
    ],
    tableNoteEn: 'Never hardcode secret API keys directly in Python scripts or commit them to GitHub — always use `os.getenv("API_KEY")`!',
    tableNoteHi: 'Kabhi bhi secret API key ko seedha code mein likh kar GitHub par push na karein — hamesha `os.getenv("API_KEY")` use karein!',
    mistakeEn: 'Calling `requests.get(url)` inside a loop with no `timeout`, no status check, and hardcoded API keys — one slow server hangs your pipeline forever.',
    mistakeHi: 'Bina `timeout` aur bina status check ke loop mein `requests.get(url)` chalana — ek slow response poori pipeline ko hamesha ke liye hang kar sakta hai.',
    proHabitEn: 'Always set `timeout=10`, store keys in `.env` / secret managers, handle pagination, and use `pd.json_normalize()` for nested payloads.',
    proHabitHi: 'Hamesha `timeout=10` dein, API keys `.env` mein rakhein, pagination handle karein aur nested JSON par `pd.json_normalize()` lagayein.',
    jobUseEn: 'Used to enrich internal sales data with external weather APIs, currency exchange rates, geocoding coordinates, and CRM/ad-platform metrics.',
    jobUseHi: 'Apne sales data ko live weather API, currency exchange rates, Google Ads aur CRM metrics se enrich karne mein roz use hota hai.',
    mcq1Question: 'What does HTTP status code `429` mean when collecting data from a REST API?',
    mcq1Correct: 'Too Many Requests — you hit the API’s rate limit and need to slow down / backoff.',
    mcq1Wrongs: [
      'Success — your JSON payload is ready.',
      'The file format is Parquet instead of JSON.',
      'Your Python version is outdated.',
    ],
    mcq1Explain: '`429 Too Many Requests` signals rate limiting; well-behaved pipelines pause with exponential backoff before retrying.',
    mcq2Question: 'Which Pandas function cleanly flattens a list of nested JSON dictionaries into a flat DataFrame?',
    mcq2Correct: 'pd.json_normalize()',
    mcq2Wrongs: ['pd.read_csv()', 'pd.concat()', 'pd.to_datetime()'],
    mcq2Explain: '`pd.json_normalize()` converts nested dictionaries into dot-separated flat columns automatically.',
    realWorldScenario:
      'You build a nightly job pulling ad spend from a marketing API that returns 100 rows per page. You loop through pages using `next_cursor`, obey `429` limits, and flatten the JSON into Parquet.',
    interviewQ1: 'What is exponential backoff when retrying failed API requests?',
    interviewA1:
      'Instead of hammering a struggling API immediately, you wait progressively longer between retries (e.g., 1s -> 2s -> 4s -> 8s + small jitter) up to a max retry limit.',
    interviewQ2: 'Why should API keys never be hardcoded into source code?',
    interviewA2:
      'Hardcoded secrets get leaked in Git history, logs, and screenshots, risking unauthorized access and huge cloud/API bills. Always inject them via environment variables or a secret manager.',
  },
  {
    id: 205,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 8,
    title: 'Introduction to Data Warehouses',
    subtitle: 'OLTP VS OLAP, STAR SCHEMA (FACTS & DIMENSIONS), AND CLOUD WAREHOUSES',
    coreEn:
      'A **Data Warehouse** (like BigQuery, Snowflake, or Redshift) is a central analytical database (**OLAP**) optimized for fast read-heavy aggregations across billions of historical rows, typically organized in a **Star Schema** (Fact + Dimension tables).',
    coreHi:
      '**Data Warehouse** (jaise BigQuery, Snowflake, Redshift) ek central analytical database (**OLAP**) hai jo arabo historical rows par super-fast aggregations ke liye bana hai — aam taur par **Star Schema** (Fact + Dimension tables) mein.',
    analogyTitle: 'Cash Register (OLTP) vs Corporate Analytics Headquarters (OLAP Warehouse)',
    analogyEn:
      'A store’s cash register (**OLTP** like live PostgreSQL) is optimized to record 1 customer checkout in 5 milliseconds. The corporate Data Warehouse (**OLAP**) combines 5 years of receipts from 500 stores so analysts can ask "Which region grew fastest in Q4?" in 2 seconds.',
    analogyHi:
      'Dukaan ka billing counter (**OLTP**) ek-ek bill 5 millisecond mein record karne ke liye bana hai. Company ka Data Warehouse (**OLAP**) 500 stores ka 5 saal ka data mila kar seconds mein bade analytical sawaalon ka jawab deta hai.',
    steps: [
      {
        title: 'Separate OLTP from OLAP',
        en: 'Keep live app transactions on OLTP databases and sync copies to an OLAP Data Warehouse for heavy analytics.',
        hi: 'Live app transactions ko OLTP mein rakhein aur heavy analytics/BI ke liye OLAP Data Warehouse use karein.',
      },
      {
        title: 'Design Fact Tables (Measurements)',
        en: 'Store numeric events/metrics (`fact_orders`: `amount`, `qty`, `order_date_key`, `customer_key`).',
        hi: 'Fact tables mein numeric events aur measurements (`amount`, `qty`) + foreign keys rakhein.',
      },
      {
        title: 'Design Dimension Tables (Context)',
        en: 'Store descriptive "Who, What, Where, When" attributes (`dim_customers`, `dim_products`, `dim_date`).',
        hi: 'Dimension tables mein descriptive context (`dim_customers`, `dim_products`, `dim_date`) rakhein.',
      },
      {
        title: 'Partition & Cluster Large Tables',
        en: 'Partition huge fact tables by `order_date` so querying "last 7 days" scans only 7 partitions instead of 5 years.',
        hi: 'Bade fact tables ko `order_date` par partition karein taaki "last 7 days" query poora 5 saal ka data scan na kare.',
      },
    ],
    codeLabel: 'SQL • STAR SCHEMA ANALYTICAL QUERY IN WAREHOUSE',
    code: `SELECT
    d.calendar_month,
    p.category,
    SUM(f.revenue) AS total_revenue
FROM fact_orders f
JOIN dim_date d     ON f.date_key = d.date_key
JOIN dim_products p ON f.product_key = p.product_key
WHERE d.calendar_year = 2026
GROUP BY 1, 2
ORDER BY 1, 3 DESC;`,
    codeOutput: `calendar_month | category    | total_revenue
---------------+-------------+--------------
2026-01        | Electronics |     125000.00
2026-01        | Apparel     |      64000.00`,
    codeCaptionEn: 'One central `fact_orders` table joined cleanly to `dim_date` and `dim_products` — the classic Star Schema.',
    codeCaptionHi: 'Ek central `fact_orders` table ko `dim_date` aur `dim_products` se cleanly join kiya — yahi classic Star Schema hai.',
    tableTitle: 'OLTP Database vs OLAP Data Warehouse',
    tableHeaders: ['Dimension', 'OLTP (App DB)', 'OLAP (Data Warehouse)'],
    tableRows: [
      ['Primary Job', 'Fast individual inserts/updates', 'Fast bulk scans & aggregations'],
      ['Storage Style', 'Row-oriented', 'Columnar (compressed)'],
      ['Schema Style', 'Highly normalized (3NF)', 'Star / Snowflake Schema (Fact + Dim)'],
      ['Examples', 'PostgreSQL, MySQL', 'BigQuery, Snowflake, Redshift'],
    ],
    tableNoteEn: 'A **Data Lake** stores raw unstructured/semi-structured files (images, JSON, Parquet); a **Data Lakehouse** combines Lake flexibility with Warehouse SQL performance.',
    tableNoteHi: '**Data Lake** raw files (images, JSON, Parquet) rakhta hai, aur **Data Lakehouse** Lake aur Warehouse dono ki taqat milata hai.',
    mistakeEn: 'Running giant 5-year `GROUP BY` queries directly on the live OLTP production database, or forgetting date partition filters in BigQuery (causing huge pay-per-TB scan bills!).',
    mistakeHi: 'Live OLTP database par 5 saal ka heavy `GROUP BY` chalana, ya BigQuery mein date partition filter bhool kar bada bill bana lena!',
    proHabitEn: 'Always filter on the **partition column** (like `order_date`) and select only needed columns when querying cloud data warehouses.',
    proHabitHi: 'Cloud data warehouse query karte waqt hamesha **partition column** (`order_date`) par filter lagayein aur sirf zaroori columns select karein.',
    jobUseEn: 'Every mid-to-large company centralizes Marketing, Sales, Finance, and Product data in a Data Warehouse so BI dashboards and ML models share one single source of truth.',
    jobUseHi: 'Har badi company Marketing, Sales, Finance aur Product ka data ek Data Warehouse mein rakhti hai taaki sabko ek hi single source of truth mile.',
    mcq1Question: 'In a Star Schema data warehouse, what does a **Fact Table** primarily contain?',
    mcq1Correct: 'Numeric measurements/events (like `revenue`, `quantity`) and foreign keys linking to Dimension tables.',
    mcq1Wrongs: [
      'Only customer email addresses and home cities.',
      'Raw JPEG images and PDF manuals.',
      'Python source code files.',
    ],
    mcq1Explain: 'Fact tables store quantitative business events; Dimension tables store the descriptive Who/What/Where/When context.',
    mcq2Question: 'Why is partitioning a 1-billion-row warehouse table by `order_date` so effective?',
    mcq2Correct: 'Queries filtering for a specific month scan only that month’s partitions, drastically cutting runtime and cloud query cost.',
    mcq2Wrongs: [
      'It permanently deletes data older than 7 days.',
      'It converts SQL into Python.',
      'It removes all Primary Keys.',
    ],
    mcq2Explain: 'Partition pruning skips irrelevant date blocks entirely during query execution.',
    realWorldScenario:
      'Your BigQuery query on `fact_events` scanned 2 TB and cost $12 because it lacked a date filter. Adding `WHERE event_date >= CURRENT_DATE - 7` cut the scan to 40 GB ($0.24) and ran 15× faster.',
    interviewQ1: 'What is the difference between OLTP and OLAP systems?',
    interviewA1:
      'OLTP (Online Transaction Processing) handles high-concurrency, low-latency row reads/writes for live apps (e.g., PostgreSQL). OLAP (Online Analytical Processing) handles complex, read-heavy aggregations across massive historical datasets (e.g., BigQuery, Snowflake).',
    interviewQ2: 'Explain Fact tables vs Dimension tables in a Star Schema.',
    interviewA2:
      'A Fact table sits at the center holding measurable business events (`sales_amount`, `units`) and foreign keys. Dimension tables surround it like star points holding descriptive attributes (`dim_customer`, `dim_product`, `dim_date`).',
  },
  {
    id: 206,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 9,
    title: 'Reproducible Data Workflows',
    subtitle: 'GIT, VIRTUAL ENVIRONMENTS, CONFIG FILES, AND DETERMINISTIC RUNS',
    coreEn:
      'A reproducible workflow guarantees that any teammate (or your future self 6 months later) can re-run your pipeline on another machine and get the **exact same numbers and models**.',
    coreHi:
      'Reproducible workflow ka matlab hai ki aapka teammate (ya 6 mahine baad aap khud) kisi doosre laptop par wahi pipeline chalaye toh **bilkul exact wahi numbers aur results** milein.',
    analogyTitle: 'Exact Baking Recipe vs "A Pinch of This and That"',
    analogyEn:
      'If a baker writes "add some flour and bake till done", nobody can recreate the cake. A reproducible workflow records exact grams (`requirements.txt`), exact oven temperature (`config.yaml`), exact step order (scripts), and exact ingredient batch (data version).',
    analogyHi:
      '"Thoda aata daalkar paka lo" se koi same cake nahi bana sakta. Reproducible workflow exact measurements (`requirements.txt`), settings (`config.yaml`), aur clean scripts record karta hai taaki har baar wahi result bane.',
    steps: [
      {
        title: 'Pin Exact Package Versions',
        en: 'Use a virtual environment (`venv`/`conda`) and freeze versions in `requirements.txt` so library updates never break code.',
        hi: 'Virtual environment (`venv`) banayein aur exact package versions `requirements.txt` mein freeze karein.',
      },
      {
        title: 'Use Relative Paths & Config Files',
        en: 'Replace `C:\\Users\\Rahul\\Desktop\\sales.csv` with `pathlib.Path("data/raw/sales.csv")` and `config.yaml`.',
        hi: 'Hardcoded laptop paths ki jagah relative `pathlib.Path` aur `config.yaml` use karein.',
      },
      {
        title: 'Fix Random Seeds Everywhere',
        en: 'Pass `random_state=42` / `np.random.default_rng(42)` so sampling and train/test splits stay identical.',
        hi: 'Sampling aur train/test split har baar same rakhne ke liye `random_state=42` / seed fix karein.',
      },
      {
        title: 'Track Code in Git & Keep Raw Data Immutable',
        en: 'Commit clean scripts to Git (never commit giant CSVs or secrets via `.gitignore`) and keep `data/raw/` read-only.',
        hi: 'Code ko Git mein commit karein (bade CSVs aur secrets `.gitignore` mein rakhein) aur `data/raw/` ko kabhi modify na karein.',
      },
    ],
    codeLabel: 'PYTHON • REPRODUCIBLE PATHS, CONFIG & SEED',
    code: `from pathlib import Path
import numpy as np

CONFIG = {"raw_dir": "data/raw", "seed": 42, "sample_size": 3}

rng = np.random.default_rng(CONFIG["seed"])
sample_ids = rng.choice([101, 102, 103, 104, 105], size=CONFIG["sample_size"], replace=False)
data_path = Path(CONFIG["raw_dir"]) / "orders.parquet"

print("Portable path:", data_path.as_posix())
print("Reproducible sample:", sample_ids.tolist())`,
    codeOutput: `Portable path: data/raw/orders.parquet
Reproducible sample: [101, 105, 103]`,
    codeCaptionEn: 'Anyone on Windows, Mac, or Linux running this script gets the exact same portable path and exact same sample `[101, 105, 103]`.',
    codeCaptionHi: 'Windows, Mac ya Linux par koi bhi ise chalaye — portable path aur sample `[101, 105, 103]` har baar bilkul exact same aayega.',
    tableTitle: 'Checklist for a 100% Reproducible Data Project',
    tableHeaders: ['Pillar', 'Bad Habit', 'Reproducible Pro Standard'],
    tableRows: [
      ['Dependencies', 'Global Python install', 'Isolated `venv` + pinned `requirements.txt`'],
      ['File Paths', 'Hardcoded `C:\\Users\\Me\\...`', 'Relative `pathlib.Path` + config file'],
      ['Randomness', 'Unseeded `df.sample()`', 'Fixed `random_state=42`'],
      ['Execution', 'Running notebook cells out of order', 'Single top-to-bottom script / `make pipeline`'],
    ],
    tableNoteEn: 'Before sharing any Jupyter notebook, always click **"Restart Kernel & Run All Cells"** — if it doesn’t run cleanly top-to-bottom, it isn’t reproducible!',
    tableNoteHi: 'Koi bhi Jupyter notebook share karne se pehle hamesha **"Restart Kernel & Run All Cells"** chala kar verify karein!',
    mistakeEn: 'Running notebook cells out of order (Cell 5 -> Cell 2 -> Cell 8) so the result depends on hidden variables left in RAM that vanish tomorrow.',
    mistakeHi: 'Notebook cells ko ulte-seedhe order mein chalana — jisse result RAM mein bache purane variables par depend karta hai aur agle din fail ho jaata hai.',
    proHabitEn: 'Organize every project into `data/raw/`, `data/processed/`, `src/`, `requirements.txt`, and `.gitignore` from Day 1.',
    proHabitHi: 'Day 1 se hi project ko `data/raw/`, `data/processed/`, `src/`, `requirements.txt`, aur `.gitignore` structure mein rakhein.',
    jobUseEn: 'Mandatory in regulated industries (finance, healthcare) for audit trails and essential for every collaborative Data Science team.',
    jobUseHi: 'Finance aur healthcare mein audit ke liye mandatory hai, aur har collaborative Data Science team ki basic requirement hai.',
    mcq1Question: 'Why does hardcoding `pd.read_csv("C:/Users/Asha/Downloads/data.csv")` break reproducibility?',
    mcq1Correct: 'That path only exists on Asha’s personal laptop and immediately fails on teammates’ computers or cloud servers.',
    mcq1Wrongs: [
      'Because Pandas cannot read files from Downloads.',
      'Because CSV files do not work on Windows.',
      'Because relative paths are slower than absolute paths.',
    ],
    mcq1Explain: 'Relative project paths (`Path("data/raw/data.csv")`) or environment/config variables work identically on every machine.',
    mcq2Question: 'What is the fastest test to verify a Jupyter Notebook is truly reproducible?',
    mcq2Correct: 'Restart the kernel and run all cells cleanly from top to bottom without errors.',
    mcq2Wrongs: [
      'Save the notebook as a PDF screenshot.',
      'Delete all comments from the notebook.',
      'Run only the last cell again.',
    ],
    mcq2Explain: 'Restarting clears hidden in-memory state and proves every variable is created cleanly in order.',
    realWorldScenario:
      'Six months after launching a churn model, compliance asks you to reproduce the exact training metrics. Because you pinned `requirements.txt`, fixed `random_state=42`, and versioned code in Git, you reproduce it to the 4th decimal place in 5 minutes.',
    interviewQ1: 'What are the 4 key ingredients of a reproducible data science workflow?',
    interviewA1:
      '1) Version-controlled code (Git), 2) Pinned environment/dependencies (`requirements.txt`/Docker), 3) Immutable versioned data + relative paths, and 4) Deterministic execution (fixed random seeds, top-to-bottom scripts).',
    interviewQ2: 'Why shouldn’t you commit large raw CSV files or `.env` files to Git?',
    interviewA2:
      'Git bloats permanently on large binary/CSV files (use cloud storage or DVC instead), and committing `.env` leaks passwords and API keys publicly.',
  },
  {
    id: 207,
    modNum: 19,
    modTitle: 'Data Pipelines and Engineering Basics',
    topicNumInMod: 10,
    title: 'Logging and Pipeline Error Handling',
    subtitle: 'STRUCTURED LOGGING, TRY/EXCEPT, RETRIES, AND GRACEFUL FAILURE ALERTS',
    coreEn:
      'Production pipelines run unattended at 3 AM when nobody is watching `print()`. Using Python’s `logging` module (with timestamps & severity levels) and targeted `try/except` blocks ensures errors are recorded, retried when transient, and alerted cleanly.',
    coreHi:
      'Production pipelines raat 3 baje chalti hain jab koi `print()` nahi dekh raha hota. Python ka `logging` module (timestamps + levels) aur clean `try/except` ensure karta hai ki har error record ho, temporary glitch par retry ho aur team ko alert mile.',
    analogyTitle: 'Airplane Black Box Flight Recorder vs Shouting in an Empty Room',
    analogyEn:
      'Using `print()` in a scheduled pipeline is like shouting in an empty room — once the script closes, the message is gone. Structured `logging` is an airplane black box: every milestone (`INFO`), warning (`WARNING`), and crash (`ERROR`) is timestamped and saved permanently.',
    analogyHi:
      'Scheduled pipeline mein `print()` likhna khali kamre mein chillane jaisa hai — script band hote hi sab gayab! `logging` airplane ke black box jaisa hai jo har event (`INFO`, `WARNING`, `ERROR`) ko time ke saath permanently save karta hai.',
    steps: [
      {
        title: 'Replace `print()` with `logging`',
        en: 'Configure `logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")`.',
        hi: '`print()` ki jagah `logging` setup karein jisme timestamp, level (`INFO`/`ERROR`) aur message ho.',
      },
      {
        title: 'Log Key Pipeline Metrics',
        en: 'Record start time, rows extracted, rows quarantined, rows loaded, and total duration.',
        hi: 'Har run mein start time, kitni rows aayin, kitni reject huin aur kitni load huin — sab log karein.',
      },
      {
        title: 'Catch Specific Exceptions (Never Bare `except: pass`)',
        en: 'Handle known recoverable issues (`ValueError`, `TimeoutError`) specifically, and log full tracebacks with `logger.exception()`.',
        hi: 'Kabhi `except: pass` na likhein; specific exceptions (`ValueError`, `TimeoutError`) handle karein aur `logger.exception()` se traceback save karein.',
      },
      {
        title: 'Fail Loudly on Critical Errors',
        en: 'Re-raise fatal exceptions so your orchestrator (Airflow/GitHub Actions) marks the run FAILED and alerts Slack/email.',
        hi: 'Critical error par exception re-raise karein taaki Airflow/scheduler run ko FAILED mark karke team ko alert bheje.',
      },
    ],
    codeLabel: 'PYTHON • STRUCTURED LOGGING & SAFE ERROR HANDLING',
    code: `import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
logger = logging.getLogger("sales_pipeline")

def parse_amount(raw_val):
    try:
        return float(raw_val)
    except (TypeError, ValueError):
        logger.warning("Skipping invalid amount: %r", raw_val)
        return None

logger.info("Pipeline started")
cleaned = [v for r in ["250", "bad", "400"] if (v := parse_amount(r)) is not None]
logger.info("Pipeline finished | valid_rows=%d", len(cleaned))`,
    codeOutput: `INFO | Pipeline started
WARNING | Skipping invalid amount: 'bad'
INFO | Pipeline finished | valid_rows=2`,
    codeCaptionEn: 'Instead of crashing on `"bad"` or hiding it silently, the pipeline logged a clear `WARNING` and reported `valid_rows=2`.',
    codeCaptionHi: '`"bad"` value par crash hone ya chup rehne ke bajaye pipeline ne clean `WARNING` log kiya aur `valid_rows=2` report kiya.',
    tableTitle: 'Python Logging Severity Levels',
    tableHeaders: ['Level', 'When to Use', 'Example Message'],
    tableRows: [
      ['DEBUG', 'Detailed developer diagnostics', 'SQL query string & raw payload size'],
      ['INFO', 'Normal pipeline milestones', 'Loaded 12,450 rows into silver_orders'],
      ['WARNING', 'Unexpected but recoverable issue', 'Skipped 3 malformed rows (sent to quarantine)'],
      ['ERROR / CRITICAL', 'Task failed & needs attention', 'Database connection failed after 3 retries'],
    ],
    tableNoteEn: 'Using `logger.exception("Step failed")` inside an `except` block automatically attaches the complete Python stack trace!',
    tableNoteHi: '`except` block ke andar `logger.exception("Step failed")` likhne se poora Python traceback apne aap log ho jaata hai!',
    mistakeEn: 'Writing `try: run_pipeline() except Exception: pass` — this "silent failure" hides crashes so dashboards show 2-week-old stale data while the scheduler reports "Green / Success"!',
    mistakeHi: '`try: ... except Exception: pass` likh dena — isse pipeline chupchaap fail hoti rehti hai aur dashboard par purana galat data chalta rehta hai!',
    proHabitEn: 'Log row counts at every stage, handle row-level bad data by quarantining + warning, and always fail loudly on system-level errors.',
    proHabitHi: 'Har stage par row counts log karein, bad rows par `WARNING` + quarantine karein, aur system errors par loudly fail karke alert bhejein.',
    jobUseEn: 'Saves hours of 3 AM incident debugging and builds trust with leadership because data teams know about broken upstream feeds before stakeholders notice.',
    jobUseHi: 'Raat ko fail hone wali jobs ko minutes mein debug karne aur stakeholders se pehle hi data issue pakadne mein yahi skill kaam aati hai.',
    mcq1Question: 'Why is `except Exception: pass` considered one of the worst anti-patterns in data pipelines?',
    mcq1Correct: 'It silently swallows errors, leaving downstream dashboards stale or empty while reporting the job succeeded.',
    mcq1Wrongs: [
      'Because Python does not allow `try/except` in pipelines.',
      'Because it makes the pipeline run 10× slower.',
      'Because it automatically deletes log files.',
    ],
    mcq1Explain: 'Silent failures are far more dangerous than loud crashes because nobody knows the data is broken.',
    mcq2Question: 'Why is Python’s `logging` module preferred over `print()` in production data pipelines?',
    mcq2Correct: 'It adds timestamps, severity levels (`INFO`, `WARNING`, `ERROR`), easy file/cloud routing, and full stack traces.',
    mcq2Wrongs: [
      'Because `print()` cannot display numbers.',
      'Because `logging` automatically fixes syntax errors.',
      'Because `logging` replaces SQL queries.',
    ],
    mcq2Explain: 'Structured logging integrates directly with monitoring tools, log files, and alerting systems.',
    realWorldScenario:
      'Your nightly API sync failed at 2:14 AM due to a temporary 503 outage. Because you logged timestamps, added 3 retries with backoff, and re-raised fatal errors, it recovered automatically on Retry #2 and logged `INFO | Synced 8,400 rows`.',
    interviewQ1: 'What information should every production data pipeline log during a run?',
    interviewA1:
      'Run ID, start/end timestamps, source/target names, row counts at each stage (extracted, rejected, loaded), latency/duration, and full stack traces on any errors.',
    interviewQ2: 'When should a pipeline retry an error vs fail immediately?',
    interviewA2:
      'Retry transient external errors (network timeouts, HTTP 429/503, temporary DB locks) with backoff. Fail immediately on permanent logic/auth errors (HTTP 401 bad key, missing column schema error) because retrying won’t fix them.',
  },
  // =========================================================================
  // MODULE 20: Exploratory Data Analysis and Visualization (IDs 208–221)
  // =========================================================================
  {
    id: 208,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 1,
    title: 'What Is Exploratory Data Analysis?',
    subtitle: 'BECOMING A DATA DETECTIVE BEFORE BUILDING ANY MODEL OR DASHBOARD',
    coreEn:
      'Exploratory Data Analysis (EDA) is the structured investigation of a dataset using summary statistics and visual charts to uncover data quality issues, distributions, hidden patterns, and relationships before modeling.',
    coreHi:
      'Exploratory Data Analysis (EDA) kisi bhi ML model ya dashboard banane se pehle dataset ki gehri jaanch-padtal hai — summary statistics aur charts ki madad se data bugs, distributions, patterns aur relationships dhoondhna.',
    analogyTitle: 'Inspecting a Used Car Before Buying It',
    analogyEn:
      'You would never buy a used car just from its price tag! You open the hood (`info()`), check odometer & service history (`describe()`), and take a test drive (charts). EDA is your full inspection before trusting data with business decisions.',
    analogyHi:
      'Used car sirf price tag dekh kar nahi khareedte! Aap bonnet kholte hain (`info()`), meter aur service history check karte hain (`describe()`), aur test drive lete hain (charts). EDA data ka wahi full inspection hai.',
    steps: [
      {
        title: 'Audit Structure & Quality',
        en: 'Inspect shape, data types, missing values, duplicates, and impossible entries (e.g., negative age).',
        hi: 'Shape, data types, missing values, duplicates aur impossible entries (jaise negative age) check karein.',
      },
      {
        title: 'Explore Single Variables (Univariate)',
        en: 'Check distributions, medians, and category frequencies one column at a time.',
        hi: 'Ek-ek column ke distributions, medians aur category counts samjhein.',
      },
      {
        title: 'Explore Relationships (Bivariate / Multivariate)',
        en: 'Compare pairs of features and check how each feature relates to your target metric.',
        hi: 'Features ke aapas ke connections aur target variable par unka asar check karein.',
      },
      {
        title: 'Document Hypotheses & Next Actions',
        en: 'Write down clear findings (cleaning rules, key drivers, anomalies) that guide feature engineering and business action.',
        hi: 'Saaf findings likhein — kaunsi cleaning karni hai, kaunse key drivers mile, aur agla business/ML step kya hoga.',
      },
    ],
    codeLabel: 'PYTHON • QUICK 4-CHECK EDA AUDIT',
    code: `import pandas as pd

df = pd.DataFrame({
    "city": ["Delhi", "Pune", "Delhi", "Pune"],
    "spend": [1200, 450, 9500, 600],
    "churned": [0, 1, 0, 1]
})
print("Shape:", df.shape, "| Nulls:", int(df.isna().sum().sum()))
print("Churn rate by city:")
print(df.groupby("city")["churned"].mean().to_dict())`,
    codeOutput: `Shape: (4, 3) | Nulls: 0
Churn rate by city:
{'Delhi': 0.0, 'Pune': 1.0}`,
    codeCaptionEn: 'Even a 4-line EDA audit instantly exposed both an extreme spend (`9500`) and a stark churn gap between Delhi and Pune.',
    codeCaptionHi: 'Sirf 4 line ke EDA check ne turant high spend (`9500`) aur Delhi vs Pune ke churn difference ko pakad liya.',
    tableTitle: '4 Core Questions Answered by EDA',
    tableHeaders: ['EDA Pillar', 'What You Look For', 'Why It Matters'],
    tableRows: [
      ['Data Quality', 'Nulls, duplicates, wrong dtypes', 'Stops garbage-in-garbage-out'],
      ['Distributions', 'Skewness, clusters, outliers', 'Guides median vs mean & log transforms'],
      ['Relationships', 'Correlations, segment gaps', 'Reveals strongest ML predictors'],
      ['Business Sense', 'Impossible values & domain sanity', 'Catches upstream tracking bugs early'],
    ],
    tableNoteEn: 'Remember Anscombe’s Quartet: four completely different datasets can have the exact same mean and correlation — **always visualize your data**!',
    tableNoteHi: 'Anscombe’s Quartet yaad rakhein: 4 bilkul alag datasets ka mean aur correlation same ho sakta hai — isliye **hamesha charts banakar dekhein**!',
    mistakeEn: 'Skipping EDA and feeding raw CSV columns straight into XGBoost or Linear Regression, only to discover later that a leakage column or `-999` placeholder ruined the model.',
    mistakeHi: 'EDA skip karke raw CSV ko seedha ML model mein daal dena — aur baad mein pata chalna ki `-999` ya leakage column ne poora model kharab kar diya.',
    proHabitEn: 'Spend at least 30–40% of your project time on disciplined EDA and write a brief takeaway under every chart you plot.',
    proHabitHi: 'Project ka 30–40% samay disciplined EDA ko dein aur har chart ke neeche ek 1-line insight zaroor likhein.',
    jobUseEn: 'Top Data Scientists win projects not by fancy algorithms, but by discovering subtle data patterns and quality issues during EDA.',
    jobUseHi: 'Top Data Scientists projects fancy algorithm se nahi, balki EDA ke dauran pakde gaye smart insights aur data bugs se jeet’te hain.',
    mcq1Question: 'What is the primary goal of Exploratory Data Analysis (EDA)?',
    mcq1Correct: 'To understand data quality, distributions, anomalies, and relationships before modeling or reporting.',
    mcq1Wrongs: [
      'To delete half of the columns randomly.',
      'To deploy a neural network without looking at the data.',
      'To convert all numbers into text.',
    ],
    mcq1Explain: 'EDA uncovers data bugs, shapes, and domain insights so every downstream modeling or business decision stands on solid ground.',
    mcq2Question: 'What lesson does Anscombe’s Quartet teach about EDA?',
    mcq2Correct: 'Datasets with identical summary statistics (mean, variance, correlation) can look totally different visually — so always plot your data.',
    mcq2Wrongs: [
      'You only ever need to compute the mean.',
      'Charts are unnecessary if you have SQL.',
      'All datasets follow a normal bell curve.',
    ],
    mcq2Explain: 'Summary numbers alone can hide outliers, curves, and clusters that a simple scatter plot reveals instantly.',
    realWorldScenario:
      'Before building a loan-default model, your EDA discovers that 15% of rows have `income = 0` (placeholder for missing). Fixing that during EDA boosts model accuracy by 11%.',
    interviewQ1: 'Walk me through your standard EDA checklist when you receive a brand-new dataset.',
    interviewA1:
      '1) Clarify business goal & target, 2) Check shape, dtypes, nulls, and duplicates, 3) Univariate distributions & outliers, 4) Bivariate/target relationships & correlations, 5) Document cleaning actions and business hypotheses.',
    interviewQ2: 'Why is EDA still critical even when using powerful tree-based ML models?',
    interviewA2:
      'Tree models cannot detect target leakage, silent tracking bugs, duplicated IDs, or misaligned business definitions — only human-led EDA catches those.',
  },
  {
    id: 209,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 2,
    title: 'Asking Questions Before Analyzing',
    subtitle: 'TURNING VAGUE BUSINESS PROBLEMS INTO SHARP, TESTABLE DATA QUESTIONS',
    coreEn:
      'Great EDA starts with clear, specific business questions ("Why did Q3 churn rise among mobile users?") rather than aimlessly plotting 50 random charts.',
    coreHi:
      'Shandaar EDA 50 random charts banane se nahi, balki clear aur specific business questions ("Q3 mein mobile users ka churn kyun badha?") poochhne se shuru hota hai.',
    analogyTitle: 'Doctor Asking Symptoms Before Ordering Lab Tests',
    analogyEn:
      'A doctor doesn’t order 40 random X-rays and blood tests for every patient. They ask focused questions first ("Where does it hurt? Since when?") and order the exact tests that confirm or rule out each hypothesis.',
    analogyHi:
      'Doctor har patient ke 40 random tests nahi karwata. Woh pehle focused sawaal poochhta hai ("Kahan dard hai? Kab se?") aur phir wahi exact test karwata hai jo hypothesis confirm kare.',
    steps: [
      {
        title: 'Define the Decision & Metric',
        en: 'Ask: "What business decision will this analysis change, and what exact KPI measures success?"',
        hi: 'Poochhein: "Is analysis se kaunsa business decision badlega, aur success ka exact KPI kya hai?"',
      },
      {
        title: 'Form 3–5 Sharp Hypotheses',
        en: 'Write testable statements like "H1: Late deliveries (>5 days) double the return rate."',
        hi: 'Testable hypotheses likhein jaise "H1: 5 din se zyada late delivery par return rate double ho jaata hai."',
      },
      {
        title: 'Map Questions to Exact Columns',
        en: 'Verify which columns exist to test each hypothesis and spot missing data needs early.',
        hi: 'Check karein ki har hypothesis test karne ke liye kaunse columns chahiye aur kya koi data missing hai.',
      },
      {
        title: 'Stay Open to Surprises',
        en: 'Test your initial hypotheses first, then follow unexpected clues revealed by the data.',
        hi: 'Pehle apni hypotheses test karein, aur agar data koi naya unexpected pattern dikhaye toh use bhi explore karein.',
      },
    ],
    codeLabel: 'PYTHON • HYPOTHESIS-DRIVEN EDA TEST',
    code: `import pandas as pd

# Hypothesis: Orders delivered in >4 days have much higher return rates
orders = pd.DataFrame({
    "delivery_days": [2, 3, 6, 7, 2, 8],
    "returned":      [0, 0, 1, 1, 0, 1]
})
orders["is_late"] = orders["delivery_days"] > 4
print(orders.groupby("is_late")["returned"].mean().mul(100).rename("return_rate_%"))`,
    codeOutput: `is_late
False      0.0
True     100.0
Name: return_rate_%, dtype: float64`,
    codeCaptionEn: 'One focused question turned directly into a crisp metric proving late deliveries drive returns.',
    codeCaptionHi: 'Ek focused sawaal ne seedha crisp metric diya jisne prove kar diya ki late delivery se returns badhte hain.',
    tableTitle: 'Vague Prompt vs Sharp Analytical Question',
    tableHeaders: ['Vague Request', 'Sharp Testable Question', 'Actionable Output'],
    tableRows: [
      ['"Analyze our sales"', '"Which 3 product categories lost revenue YoY in Q4?"', 'Targeted inventory/promo fix'],
      ['"Look at customer churn"', '"Does churn spike within 30 days of a price hike?"', 'Retention offer timing'],
      ['"Check delivery data"', '"Which courier exceeds the 4-day SLA in Tier-2 cities?"', 'Switch courier partner'],
    ],
    tableNoteEn: 'A sharp analytical question always names the **metric**, the **segment**, and the **time window**.',
    tableNoteHi: 'Ek sharp analytical question mein hamesha **metric**, **segment**, aur **time window** clear hota hai.',
    mistakeEn: 'Spending 6 hours generating 30 colorful charts with no guiding question, then presenting slides where executives ask "So what should we actually do?"',
    mistakeHi: 'Bina kisi sawaal ke 6 ghante mein 30 colorful charts bana dena, jinke baad boss poochhe "Isse humein action kya lena hai?"',
    proHabitEn: 'Write 3–5 numbered business questions at the very top of your notebook before writing line 1 of Pandas or Matplotlib.',
    proHabitHi: 'Pandas ya Matplotlib ki pehli line likhne se pehle notebook ke top par 3–5 sharp business questions zaroor likhein.',
    jobUseEn: 'Separates junior "chart makers" from senior Data Scientists who partner directly with Product Managers and VPs.',
    jobUseHi: 'Yahi aadat junior "chart maker" aur senior decision-making Data Scientist ke beech sabse bada farq banati hai.',
    mcq1Question: 'Which of the following is the sharpest, most actionable EDA question?',
    mcq1Correct: 'Did repeat-purchase rate drop in Q3 specifically for orders delivered after 5 days?',
    mcq1Wrongs: [
      'Can you plot everything in this CSV?',
      'Is our data big?',
      'What color should our bar chart be?',
    ],
    mcq1Explain: 'It defines a clear metric (repeat-purchase rate), time window (Q3), and testable driver (delivery > 5 days).',
    mcq2Question: 'What three elements make a business question sharp and testable?',
    mcq2Correct: 'A clear metric, a target segment/driver, and a time period.',
    mcq2Wrongs: [
      'A 3D pie chart, a logo, and a font.',
      'Only raw SQL table names.',
      'Randomly picked columns.',
    ],
    mcq2Explain: 'Naming the metric, segment, and timeframe eliminates ambiguity and points straight to the exact analysis needed.',
    realWorldScenario:
      'A CEO says "Signups feel slow." Before pulling data, you refine it into 3 sharp questions comparing signup conversion by device (iOS/Android/Web) and marketing channel over the last 8 weeks.',
    interviewQ1: 'A stakeholder hands you a dataset and says "Find me some insights." What do you do first?',
    interviewA1:
      'Ask clarifying questions first: what business goal or KPI matters right now, what decisions are upcoming, and what hypotheses the team already has — then structure EDA around those questions.',
    interviewQ2: 'What is confirmation bias in EDA and how do you avoid it?',
    interviewA2:
      'Confirmation bias is only looking for evidence that supports your favorite guess. Avoid it by actively testing alternative explanations and checking segments that contradict your hypothesis.',
  },
  {
    id: 210,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 3,
    title: 'Univariate Analysis',
    subtitle: 'UNDERSTANDING ONE VARIABLE AT A TIME: CENTER, SPREAD, AND FREQUENCIES',
    coreEn:
      'Univariate analysis examines a **single column** by itself — using mean, median, std, IQR, histograms, and box plots for numeric columns, and frequency counts (`value_counts()`) + bar charts for categorical columns.',
    coreHi:
      'Univariate analysis mein hum ek baar mein **sirf ek column** ko deeply samajhte hain — numeric columns ke liye mean, median, std, IQR, histogram/box plot, aur categorical columns ke liye `value_counts()` + bar chart.',
    analogyTitle: 'Checking Each Ingredient Individually Before Cooking',
    analogyEn:
      'Before mixing ingredients, a chef checks each one alone: is the milk fresh? How spicy is the chili? Univariate analysis checks `age` alone, `price` alone, and `city` alone so you spot spoiled columns immediately.',
    analogyHi:
      'Khana banane se pehle chef har ingredient ko alag se check karta hai: doodh fresh hai kya? Mirch kitni teekhi hai? Univariate analysis bhi har column (`age`, `price`, `city`) ko alag se inspect karta hai.',
    steps: [
      {
        title: 'Classify Column Type',
        en: 'Separate continuous numerical columns (`price`, `age`) from categorical columns (`city`, `plan`).',
        hi: 'Pehle columns ko numeric (`price`, `age`) aur categorical (`city`, `plan`) mein alag karein.',
      },
      {
        title: 'Summarize Numeric Columns',
        en: 'Compare `mean` vs `median` (a big gap signals skewness!) and check `min`, `max`, `std`, and `IQR`.',
        hi: 'Numeric columns mein `mean` vs `median` compare karein (bada gap = skewness!) aur `min`, `max`, `std`, `IQR` dekhein.',
      },
      {
        title: 'Summarize Categorical Columns',
        en: 'Run `value_counts(normalize=True, dropna=False)` to see exact shares, rare categories, and nulls.',
        hi: 'Categorical columns par `value_counts(normalize=True, dropna=False)` chalakar % share aur rare values dekhein.',
      },
      {
        title: 'Plot One Chart Per Key Column',
        en: 'Use histograms/box plots for numbers and horizontal bar charts for categories.',
        hi: 'Numbers ke liye histogram/box plot aur categories ke liye horizontal bar chart banayein.',
      },
    ],
    codeLabel: 'PYTHON • NUMERIC & CATEGORICAL UNIVARIATE CHECK',
    code: `import pandas as pd

df = pd.DataFrame({
    "plan": ["Free", "Free", "Pro", "Free", "Enterprise"],
    "spend": [0, 0, 499, 0, 9999]
})
print("Plan share (%):")
print((df["plan"].value_counts(normalize=True) * 100).round(1).to_dict())
print(f"Spend -> Mean: {df['spend'].mean():.1f}, Median: {df['spend'].median():.1f}")`,
    codeOutput: `Plan share (%):
{'Free': 60.0, 'Pro': 20.0, 'Enterprise': 20.0}
Spend -> Mean: 2099.6, Median: 0.0`,
    codeCaptionEn: 'The huge gap between Mean (`2099.6`) and Median (`0.0`) immediately tells you `spend` is heavily right-skewed!',
    codeCaptionHi: 'Mean (`2099.6`) aur Median (`0.0`) ke bade gap ne turant bata diya ki `spend` heavily right-skewed hai!',
    tableTitle: 'Univariate Toolkit by Variable Type',
    tableHeaders: ['Variable Type', 'Best Summary Metrics', 'Best Visual Chart'],
    tableRows: [
      ['Numeric (Continuous)', 'Mean, Median, Std, IQR, Min/Max', 'Histogram, KDE, Box Plot'],
      ['Categorical (Nominal)', 'Counts, % Share, Mode, Cardinality', 'Bar Chart (sorted by count)'],
      ['Binary / Target (0/1)', 'Class balance % (e.g., 95% vs 5%)', 'Bar Chart / KPI card'],
    ],
    tableNoteEn: 'Checking the target column’s univariate balance (`y.value_counts(normalize=True)`) catches severe class imbalance (e.g., 99% non-fraud vs 1% fraud) immediately!',
    tableNoteHi: 'Target column ka `value_counts(normalize=True)` check karte hi severe class imbalance (jaise 99% vs 1% fraud) turant pakda jaata hai!',
    mistakeEn: 'Reporting only the `mean` of a heavily skewed column like customer income or order value, which misleads stakeholders about what a "typical" customer spends.',
    mistakeHi: 'Income ya order value jaise skewed column ka sirf `mean` batana — isse stakeholder ko "typical" customer ka galat andaaza milta hai.',
    proHabitEn: 'Always report **both** median + IQR alongside mean + std for numerical columns, and include `dropna=False` in `value_counts()`.',
    proHabitHi: 'Numeric columns mein mean/std ke saath hamesha median/IQR bhi dekhein, aur `value_counts(dropna=False)` chalayein.',
    jobUseEn: 'Catches class imbalance, constant zero-variance columns, high-cardinality IDs, and skewed features before ML training.',
    jobUseHi: 'ML training se pehle class imbalance, constant columns, aur skewed features pakadne mein roz use hota hai.',
    mcq1Question: 'If a salary column has Mean = ₹18 Lakhs and Median = ₹7 Lakhs, what does univariate analysis tell you?',
    mcq1Correct: 'The distribution is heavily right-skewed due to a few very high salaries pulling the mean upward.',
    mcq1Wrongs: [
      'Most employees earn ₹18 Lakhs.',
      'Half of the salaries are negative.',
      'The data is perfectly symmetric.',
    ],
    mcq1Explain: 'When `Mean >> Median`, extreme high values (right tail) pull the mean up while the median stays anchored at the middle employee.',
    mcq2Question: 'Which Pandas call shows the percentage share of every category including missing values?',
    mcq2Correct: 'df["plan"].value_counts(normalize=True, dropna=False)',
    mcq2Wrongs: [
      'df["plan"].mean()',
      'df["plan"].corr()',
      'df["plan"].describe(percentiles=[0.5])',
    ],
    mcq2Explain: '`normalize=True` converts raw counts into proportions, and `dropna=False` ensures `NaN` is counted too.',
    realWorldScenario:
      'During univariate EDA on a credit-fraud dataset, `df["is_fraud"].value_counts(normalize=True)` reveals 99.6% legit vs 0.4% fraud — alerting you to use F1/PR-AUC instead of accuracy.',
    interviewQ1: 'When should you report Median & IQR instead of Mean & Standard Deviation?',
    interviewA1:
      'Whenever the variable is skewed or contains strong outliers (like income, house prices, or session duration), because median and IQR are resistant to extreme values.',
    interviewQ2: 'What is "high cardinality" in a categorical column and why check it during univariate analysis?',
    interviewA2:
      'High cardinality means a text column has thousands of unique values (e.g., `zip_code` or `user_id`). Spotting it early prevents blowing up memory with one-hot encoding.',
  },
  {
    id: 211,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 4,
    title: 'Bivariate and Multivariate Analysis',
    subtitle: 'DISCOVERING HOW TWO OR MORE VARIABLES MOVE TOGETHER',
    coreEn:
      '**Bivariate analysis** studies the relationship between 2 variables (e.g., Ad Spend vs Sales), while **Multivariate analysis** examines 3+ variables at once (e.g., Ad Spend vs Sales split by Region and Channel) to uncover deeper interactions.',
    coreHi:
      '**Bivariate analysis** 2 variables ke beech ka rishta dekhta hai (jaise Ad Spend vs Sales), aur **Multivariate analysis** 3+ variables ko ek saath dekhta hai (jaise Ad Spend vs Sales alag-alag Region aur Channel ke hisaab se).',
    analogyTitle: 'Checking Height vs Weight, Then Splitting by Age & Sport',
    analogyEn:
      'Comparing Height vs Weight alone is bivariate. Adding Sport (`Basketball` vs `Gymnastics`) and Gender as color/facets is multivariate — suddenly patterns that looked blurry become crystal clear!',
    analogyHi:
      'Sirf Height aur Weight compare karna bivariate hai. Usmein Sport aur Age ko color ya alag panels mein jodna multivariate hai — jisse chhupe hue patterns turant saaf dikhne lagte hain!',
    steps: [
      {
        title: 'Numeric × Numeric -> Scatter & Correlation',
        en: 'Plot a scatter plot and compute Pearson/Spearman correlation (`df.corr()`) to check direction and strength.',
        hi: 'Do numeric columns ke liye scatter plot aur correlation (`df.corr()`) dekhein.',
      },
      {
        title: 'Categorical × Numeric -> Grouped Box/Bar',
        en: 'Compare distributions across categories with `groupby().agg(["median", "mean"])` and box/violin plots.',
        hi: 'Category vs numeric ke liye `groupby` medians aur grouped box plots banayein.',
      },
      {
        title: 'Categorical × Categorical -> Crosstab',
        en: 'Use `pd.crosstab(df["plan"], df["churned"], normalize="index")` to compare exact conversion or churn rates.',
        hi: 'Do categorical columns ke liye `pd.crosstab(..., normalize="index")` se exact rates compare karein.',
      },
      {
        title: 'Add a 3rd Variable (`hue`, `size`, Facets)',
        en: 'Color-code or split charts by a third variable to catch hidden confounders (like Simpson’s Paradox).',
        hi: 'Chart mein `hue` (color) ya facets se 3rd variable jodein taaki chhupe confounders (Simpson’s Paradox) pakde jayein.',
      },
    ],
    codeLabel: 'PYTHON • BIVARIATE CROSSTAB & CORRELATION',
    code: `import pandas as pd

df = pd.DataFrame({
    "channel": ["Ads", "Ads", "Organic", "Organic"],
    "ad_spend": [100, 200, 10, 20],
    "sales": [500, 950, 300, 320],
    "converted": [1, 1, 0, 1]
})
print("Correlation (ad_spend vs sales):", round(df["ad_spend"].corr(df["sales"]), 2))
print("\\nConversion rate by channel (%):")
print((pd.crosstab(df["channel"], df["converted"], normalize="index") * 100).round(1))`,
    codeOutput: `Correlation (ad_spend vs sales): 0.99

Conversion rate by channel (%):
converted     0      1
channel               
Ads         0.0  100.0
Organic    50.0   50.0`,
    codeCaptionEn: 'Correlation measured the Numeric×Numeric relationship (`0.99`), while `pd.crosstab` compared Categorical×Categorical conversion rates.',
    codeCaptionHi: 'Correlation ne Numeric×Numeric rishta (`0.99`) napa aur `pd.crosstab` ne channel-wise conversion rate dikhaya.',
    tableTitle: 'Bivariate Method Selector by Variable Pair',
    tableHeaders: ['Variable Pair', 'Statistical Summary', 'Best Visual Chart'],
    tableRows: [
      ['Numeric × Numeric', 'Pearson / Spearman correlation', 'Scatter plot / Regplot'],
      ['Categorical × Numeric', 'GroupBy mean, median, IQR', 'Box plot / Violin / Bar chart'],
      ['Categorical × Categorical', 'pd.crosstab(..., normalize="index")', 'Grouped / Stacked bar chart'],
      ['3+ Variables (Multivariate)', 'Pivot table / Correlation matrix', 'Scatter with `hue`, Heatmap, Pairplot'],
    ],
    tableNoteEn: 'Golden Rule: **Correlation does not imply causation!** Ice-cream sales and drowning rates correlate strongly because of a 3rd hidden variable: **Summer Heat**.',
    tableNoteHi: 'Golden Rule: **Correlation ka matlab causation nahi hota!** Ice-cream sales aur swimming accidents dono garmi (3rd variable) ki wajah se saath badhte hain.',
    mistakeEn: 'Seeing a high correlation between two columns and claiming "A causes B" without checking for confounding variables or plotting the actual scatter.',
    mistakeHi: 'Do columns mein high correlation dekh kar seedha bol dena "A ki wajah se B ho raha hai" — bina 3rd variable check kiye.',
    proHabitEn: 'Always test key bivariate relationships across subgroups (`hue="region"` or `hue="device"`) to make sure an overall trend isn’t hiding opposite subgroup behavior.',
    proHabitHi: 'Hamesha main relationship ko subgroups (`hue="region"` ya `device`) mein tod kar check karein taaki overall trend koi ulta pattern na chhupa raha ho.',
    jobUseEn: 'Used to find which features predict churn, detect multicollinearity among ML inputs, and uncover segment-specific marketing ROI.',
    jobUseHi: 'Churn predictors dhoondhne, ML features mein multicollinearity pakadne aur channel-wise marketing ROI nikalne mein roz use hota hai.',
    mcq1Question: 'Which Pandas function is ideal for comparing two categorical columns (`plan_type` vs `churned`) as row percentages?',
    mcq1Correct: 'pd.crosstab(df["plan_type"], df["churned"], normalize="index")',
    mcq1Wrongs: [
      'df.corr()',
      'df["plan_type"].hist()',
      'np.linspace()',
    ],
    mcq1Explain: '`pd.crosstab` with `normalize="index"` shows the exact percentage breakdown of `churned` within each `plan_type`.',
    mcq2Question: 'What is Simpson’s Paradox in multivariate analysis?',
    mcq2Correct: 'A trend that appears in aggregated overall data reverses or disappears when you split the data into subgroups.',
    mcq2Wrongs: [
      'When a dataset has zero missing values.',
      'When two charts use different colors.',
      'When `mean` equals `median`.',
    ],
    mcq2Explain: 'Simpson’s Paradox proves why adding a 3rd grouping variable (multivariate analysis) is essential before making big decisions.',
    realWorldScenario:
      'Overall conversion rate dropped 3%, alarming leadership. Multivariate EDA splitting by `device` shows both Mobile and Desktop actually *improved*, but lower-converting Mobile traffic surged from 40% to 70% of visits!',
    interviewQ1: 'What is the difference between Pearson and Spearman correlation?',
    interviewA1:
      'Pearson measures *linear* relationships and is sensitive to outliers; Spearman measures *monotonic* (rank-order) relationships and works well on skewed or non-linear monotonic data.',
    interviewQ2: 'Give an everyday example of correlation without causation.',
    interviewA2:
      'Ice cream sales and sunburn cases rise together every month — neither causes the other; both are driven by the confounding variable of hot sunny weather.',
  },
  {
    id: 212,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 5,
    title: 'Understanding Data Distributions',
    subtitle: 'NORMAL, RIGHT-SKEWED, LEFT-SKEWED, BIMODAL, AND LOG TRANSFORMS',
    coreEn:
      'A data distribution shows **where values cluster and how widely they spread**. Recognizing Normal (bell-shaped), Right-Skewed (long high tail), Left-Skewed, and Bimodal (two peaks) shapes guides both statistics and ML preprocessing.',
    coreHi:
      'Data distribution batata hai ki **values kahan zyada ikattha hain aur kitni faili hui hain**. Normal (bell curve), Right-Skewed (lambi high tail), Left-Skewed, aur Bimodal (do peaks) shapes pehchanna statistics aur ML dono ke liye zaroori hai.',
    analogyTitle: 'Heights of Adults (Normal) vs Salaries in a Company (Right-Skewed)',
    analogyEn:
      'Adult heights cluster neatly around the average (symmetric **Normal** bell curve). Company salaries have most staff between ₹5L–₹12L and a few executives at ₹2 Crore — stretching a long tail to the right (**Right-Skewed**).',
    analogyHi:
      'Logon ki height average ke aas-paas symmetrically jamti hai (**Normal** bell curve). Company salaries mein zyada log ₹5L–₹12L par hote hain aur kuch CXOs ₹2 Cr par — isse right side mein lambi tail banti hai (**Right-Skewed**).',
    steps: [
      {
        title: 'Visualize Shape with Histogram + KDE',
        en: 'Plot the distribution curve first to see peaks, tails, and gaps with your own eyes.',
        hi: 'Pehle histogram + KDE curve banakar peaks, tails aur gaps aankhon se dekhein.',
      },
      {
        title: 'Measure Skewness (`df[col].skew()`)',
        en: '`skew ≈ 0` is symmetric, `skew > +1` is strongly right-skewed, `skew < -1` is strongly left-skewed.',
        hi: '`df[col].skew()` check karein: `0` ke paas symmetric, `> +1` right-skewed, `< -1` left-skewed.',
      },
      {
        title: 'Spot Bimodal (Multi-Peak) Mixtures',
        en: 'Two humps usually mean two distinct subpopulations mixed together (e.g., B2C retail vs B2B wholesale orders).',
        hi: 'Agar do peaks (bimodal) dikhein, toh samajh jaiye do alag groups mile hue hain (jaise retail aur wholesale orders).',
      },
      {
        title: 'Transform Skewed Features When Needed',
        en: 'Apply `np.log1p(x)` to compress long right tails before feeding linear regression or distance-based ML models.',
        hi: 'Linear models ya distance-based ML ke liye long right tail ko `np.log1p(x)` se smooth karein.',
      },
    ],
    codeLabel: 'PYTHON • CHECKING SKEWNESS & LOG1P TRANSFORM',
    code: `import numpy as np
import pandas as pd

prices = pd.Series([100, 120, 150, 180, 200, 220, 250, 300, 5000])
log_prices = np.log1p(prices)

print("Raw skewness:", round(prices.skew(), 2))
print("After log1p skewness:", round(log_prices.skew(), 2))`,
    codeOutput: `Raw skewness: 2.96
After log1p skewness: 1.98`,
    codeCaptionEn: 'Applying `np.log1p()` compressed the extreme `5000` right tail and noticeably reduced skewness.',
    codeCaptionHi: '`np.log1p()` lagane se extreme `5000` wali right tail dab gayi aur skewness kaafi kam ho gayi.',
    tableTitle: '4 Common Real-World Distributions',
    tableHeaders: ['Distribution Shape', 'Mean vs Median', 'Real-World Example'],
    tableRows: [
      ['Normal (Symmetric)', 'Mean ≈ Median', 'Adult heights, exam scores, sensor noise'],
      ['Right-Skewed (Positive)', 'Mean > Median', 'Income, house prices, website session time'],
      ['Left-Skewed (Negative)', 'Mean < Median', 'Easy exam scores (most 85–98%, few 30%)'],
      ['Bimodal (Two Peaks)', 'Average sits in valley!', 'Weekday vs weekend restaurant orders'],
    ],
    tableNoteEn: 'Tree-based models (Random Forest, XGBoost) handle skewed features fine, while Linear Regression, Logistic Regression, and K-Means benefit hugely from log transforms & scaling.',
    tableNoteHi: 'Tree models (XGBoost/Random Forest) skew par chal jaate hain, par Linear Regression aur K-Means ko `log1p` aur scaling se bahut fayda hota hai.',
    mistakeEn: 'Seeing a bimodal distribution (two distinct customer groups at ₹200 and ₹5,000) and reporting the average ₹2,600 — where almost ZERO actual customers exist!',
    mistakeHi: 'Bimodal distribution (₹200 aur ₹5,000 ke do alag peaks) ka average ₹2,600 bata dena — jahan asliyat mein koi customer hai hi nahi!',
    proHabitEn: 'Always check both `.skew()` and a histogram before choosing summary stats (mean vs median) or ML transformations (`log1p`).',
    proHabitHi: 'Mean/median ya `log1p` choose karne se pehle hamesha `.skew()` aur histogram dono check karein.',
    jobUseEn: 'Used in feature engineering (log-transforming house prices), setting realistic SLA targets (95th percentile instead of mean), and discovering hidden customer segments.',
    jobUseHi: 'House price prediction mein log-transform karne, 95th percentile SLA set karne aur hidden customer segments pakadne mein use hota hai.',
    mcq1Question: 'In a strongly **right-skewed** dataset (like household income), how do the Mean and Median compare?',
    mcq1Correct: 'Mean is greater than Median (`Mean > Median`).',
    mcq1Wrongs: [
      'Mean is less than Median (`Mean < Median`).',
      'Mean and Median are always identical.',
      'Median cannot be calculated.',
    ],
    mcq1Explain: 'High values in the long right tail pull the Mean upward while the Median remains at the 50th percentile.',
    mcq2Question: 'What does a **bimodal** histogram (two clear peaks) usually suggest during EDA?',
    mcq2Correct: 'Two distinct subgroups are mixed in the same column and should likely be segmented.',
    mcq2Wrongs: [
      'Your Python installation is broken.',
      'All values in the column are identical.',
      'The dataset has no outliers.',
    ],
    mcq2Explain: 'Two peaks often reflect two populations (e.g., daytime vs nighttime users, or retail vs wholesale buyers).',
    realWorldScenario:
      'Your website latency average is 180 ms, but plotting the distribution reveals a long right tail where 5% of users wait 4,500 ms. You switch your team’s KPI to the 95th percentile (`p95`).',
    interviewQ1: 'Why do data scientists often apply `np.log1p()` to target variables like house prices in Linear Regression?',
    interviewA1:
      'Log transformation compresses extreme right-skewed values, stabilizes variance (reduces heteroscedasticity), and makes percentage errors more symmetric for linear models.',
    interviewQ2: 'What is the difference between `skewness` and `kurtosis`?',
    interviewA2:
      'Skewness measures asymmetry of a distribution (left vs right tail), whereas kurtosis measures tail heaviness / how prone the distribution is to extreme outliers.',
  },
  {
    id: 213,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 6,
    title: 'Identifying Patterns and Outliers',
    subtitle: 'IQR RULE, Z-SCORES, SEASONAL PATTERNS, AND DECIDING WHEN TO KEEP OR CAP',
    coreEn:
      'Outliers are values far outside the normal range — detected via the **IQR rule** (`Q1 - 1.5*IQR` to `Q3 + 1.5*IQR`) or **Z-score** (`|z| > 3`). Never blindly delete them: first determine if an outlier is a **data error** or a **valuable real event** (like fraud or a VIP buyer)!',
    coreHi:
      'Outliers woh values hain jo normal range se bahut door hoti hain — inhe **IQR rule** (`Q1 - 1.5*IQR` se `Q3 + 1.5*IQR`) ya **Z-score** (`|z| > 3`) se pakda jaata hai. Inhe bina soche delete mat karein: pehle check karein ki woh **data bug** hai ya **asli VIP/fraud event**!',
    analogyTitle: 'Fire Alarm vs Burnt Toast in a Kitchen',
    analogyEn:
      'A sudden smoke spike could be a faulty sensor (data error -> fix/remove) OR a real kitchen fire (fraud/VIP surge -> investigate immediately!). Treating both the same way would be a huge mistake.',
    analogyHi:
      'Achanak alarm bajna ya toh kharab sensor (data error -> remove) ho sakta hai YA asli aag (fraud/VIP event -> turant investigate karein!). Dono ke saath ek jaisa behavior karna badi galti hogi.',
    steps: [
      {
        title: 'Compute IQR Bounds (`1.5 * IQR`)',
        en: 'Find `Q1` (25%), `Q3` (75%), `IQR = Q3 - Q1`, and flag values below `Q1 - 1.5*IQR` or above `Q3 + 1.5*IQR`.',
        hi: '`Q1`, `Q3` aur `IQR = Q3 - Q1` nikalein aur `[Q1 - 1.5*IQR, Q3 + 1.5*IQR]` se bahar ki values flag karein.',
      },
      {
        title: 'Inspect Flagged Rows in Context',
        en: 'Print the actual outlier rows — is `age = 240` a typo, or is `order = ₹2,50,000` a genuine corporate bulk order?',
        hi: 'Flagged rows ko print karke samjhein: kya `age = 240` typo hai, ya `order = ₹2.5L` ek asli corporate order hai?',
      },
      {
        title: 'Choose the Right Treatment',
        en: 'Drop/fix impossible bugs (`age = 240`), cap/winsorize (`clip()`) extreme noise for linear models, or keep & flag real VIP/fraud events.',
        hi: 'Impossible bugs fix/drop karein, extreme noise par `.clip()` (capping) lagayein, aur asli VIP/fraud events ko safe rakhein.',
      },
      {
        title: 'Spot Recurring Temporal Patterns',
        en: 'Check day-of-week cycles, month-end spikes, and sudden step-changes in time-series data.',
        hi: 'Time-series mein weekend spikes, month-end jumps aur seasonal patterns bhi zaroor check karein.',
      },
    ],
    codeLabel: 'PYTHON • IQR OUTLIER DETECTOR & CAPPING',
    code: `import pandas as pd

s = pd.Series([100, 120, 130, 140, 150, 160, 950])
q1, q3 = s.quantile(0.25), s.quantile(0.75)
iqr = q3 - q1
upper = q3 + 1.5 * iqr

outliers = s[s > upper]
print(f"Q1={q1}, Q3={q3}, Upper fence={upper}")
print("Detected outliers:", outliers.tolist())
print("After capping:", s.clip(upper=upper).tolist())`,
    codeOutput: `Q1=125.0, Q3=155.0, Upper fence=200.0
Detected outliers: [950]
After capping: [100.0, 120.0, 130.0, 140.0, 150.0, 160.0, 200.0]`,
    codeCaptionEn: 'The IQR upper fence (`200.0`) flagged `950` cleanly, and `.clip()` capped it without deleting the row.',
    codeCaptionHi: 'IQR upper fence (`200.0`) ne `950` ko pakad liya aur `.clip()` ne row delete kiye bina use safely cap kar diya.',
    tableTitle: 'IQR Method vs Z-Score Method for Outliers',
    tableHeaders: ['Method', 'Rule', 'Best When'],
    tableRows: [
      ['IQR Fence', '< Q1 - 1.5*IQR or > Q3 + 1.5*IQR', 'Skewed data (resistant to extremes)'],
      ['Z-Score', '|(x - mean) / std| > 3', 'Roughly normal (bell-shaped) data'],
      ['Domain Bounds', 'e.g., age < 0 or age > 120', 'Always first — catches impossible bugs'],
    ],
    tableNoteEn: 'In fraud detection or anomaly detection, **the outliers ARE the exact signal you are trying to predict** — never delete them!',
    tableNoteHi: 'Fraud detection ya anomaly detection mein **outliers hi aapka asli target signal hote hain** — unhe kabhi delete mat karein!',
    mistakeEn: 'Blindly deleting every row outside `1.5 * IQR` in an e-commerce dataset — accidentally erasing your top 5% VIP enterprise buyers who generate 40% of company revenue!',
    mistakeHi: 'Bina check kiye `1.5 * IQR` ke bahar ki saari rows delete kar dena — aur galti se company ke top VIP customers ko hi gayab kar dena!',
    proHabitEn: 'Always inspect outlier rows first, separate errors from true extremes, and document whether you kept, clipped, log-transformed, or dropped them.',
    proHabitHi: 'Pehle outlier rows ko inspect karein, error aur asli VIP/fraud mein farq samjhein, aur apna action document karein.',
    jobUseEn: 'Used in fraud alerting, sensor fault detection, cleaning training sets for regression models, and explaining sudden KPI spikes to executives.',
    jobUseHi: 'Fraud alerting, sensor fault detection, regression data cleaning aur KPI spikes ko explain karne mein roz use hota hai.',
    mcq1Question: 'When is the **IQR method** preferable over the **Z-score method** for detecting outliers?',
    mcq1Correct: 'When the data is skewed, because Q1/Q3 are not distorted by extreme values the way mean and std are.',
    mcq1Wrongs: [
      'When the column contains only text strings.',
      'When there are zero outliers.',
      'Only when the dataset has fewer than 3 rows.',
    ],
    mcq1Explain: 'Mean and standard deviation get pulled heavily by a single huge outlier, whereas quartiles (IQR) remain robust.',
    mcq2Question: 'You spot an order of ₹4,50,000 in a retail dataset where the median order is ₹1,200. What should you do FIRST?',
    mcq2Correct: 'Inspect the record to check if it is a valid B2B/VIP bulk order or a data-entry glitch before deciding how to treat it.',
    mcq2Wrongs: [
      'Delete the row immediately without looking.',
      'Replace it with `0`.',
      'Delete the entire `amount` column.',
    ],
    mcq2Explain: 'Domain investigation always comes before deletion — removing valid whale customers destroys business accuracy.',
    realWorldScenario:
      'Your delivery-time column has `delivery_days = -3` (clock bug) and `delivery_days = 18` (real cyclone delay). You fix `-3` as an error and keep `18` flagged as a weather event.',
    interviewQ1: 'How do you handle outliers in a dataset before training a Machine Learning model?',
    interviewA1:
      'First investigate whether they are data errors or genuine extreme events. Fix/drop errors; for genuine extremes, either use robust models (tree-based / Huber loss), apply log transforms, or winsorize/cap (`clip`) depending on the business goal.',
    interviewQ2: 'What is winsorization (capping)?',
    interviewA2:
      'Replacing extreme values beyond a chosen threshold (e.g., 1st and 99th percentiles) with the threshold values themselves, retaining the row while limiting distortion.',
  },
  {
    id: 214,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 7,
    title: 'Matplotlib Fundamentals',
    subtitle: 'FIGURE, AXES, SUBPLOTS, LABELS, AND CLEAN PUBLICATION-GRADE CHARTS',
    coreEn:
      'Matplotlib is Python’s foundational plotting library. Using its clean object-oriented API (`fig, ax = plt.subplots()`), you control every element — titles, axis labels, gridlines, legends, subplots, and high-res image exports.',
    coreHi:
      'Matplotlib Python ki core plotting library hai. Iske clean object-oriented tarike (`fig, ax = plt.subplots()`) se aap chart ka har hissa — title, axis labels, gridlines, legend, subplots aur PNG export — control kar sakte hain.',
    analogyTitle: 'Picture Frame (`fig`) Holding One or More Canvases (`ax`)',
    analogyEn:
      'Think of `fig` (Figure) as the outer wooden picture frame, and `ax` (Axes) as the actual painting canvas inside it where bars, lines, titles, and labels are drawn. One frame can hold 1 canvas or a 2×2 grid of 4 canvases!',
    analogyHi:
      '`fig` (Figure) bahar ka photo frame hai, aur `ax` (Axes) andar ka asli canvas hai jahan bars, lines, titles aur labels draw hote hain. Ek frame mein 1 canvas ya 2×2 ke 4 canvases aa sakte hain!',
    steps: [
      {
        title: 'Create `fig, ax` Explicitly',
        en: 'Start with `fig, ax = plt.subplots(figsize=(8, 4))` instead of relying on implicit global `plt` state.',
        hi: 'Hamesha `fig, ax = plt.subplots(figsize=(8, 4))` se clean figure aur axes banayein.',
      },
      {
        title: 'Plot Your Data on `ax`',
        en: 'Call `ax.plot()`, `ax.bar()`, `ax.scatter()`, or `ax.hist()` with clear colors and markers.',
        hi: '`ax.plot()`, `ax.bar()`, `ax.scatter()`, ya `ax.hist()` par apna data draw karein.',
      },
      {
        title: 'Add Clear Labels & Remove Clutter',
        en: 'Set `ax.set_title()`, `ax.set_xlabel()`, `ax.set_ylabel()`, subtle `ax.grid(alpha=0.3)`, and hide top/right spines.',
        hi: 'Clear `set_title()`, `set_xlabel()`, `set_ylabel()`, light grid aur clean borders lagayein.',
      },
      {
        title: 'Finalize Layout & Save Cleanly',
        en: 'Call `fig.tight_layout()` and `fig.savefig("chart.png", dpi=150)` before `plt.show()`.',
        hi: '`plt.show()` se pehle `fig.tight_layout()` aur `fig.savefig("chart.png", dpi=150)` call karein.',
      },
    ],
    codeLabel: 'PYTHON • CLEAN OBJECT-ORIENTED MATPLOTLIB CHART',
    code: `import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr"]
sales = [120, 150, 140, 195]

fig, ax = plt.subplots(figsize=(6, 3.5))
ax.plot(months, sales, marker="o", linewidth=2, color="#2563eb")
ax.set_title("Monthly Sales Trend (2026)")
ax.set_xlabel("Month")
ax.set_ylabel("Sales (Rs Thousands)")
ax.grid(axis="y", alpha=0.3)
fig.tight_layout()
print("Axes title:", ax.get_title(), "| Points:", len(sales))`,
    codeOutput: `Axes title: Monthly Sales Trend (2026) | Points: 4`,
    codeCaptionEn: 'Using `fig, ax = plt.subplots()` gives clean, predictable control — especially when scaling up to multi-chart grids.',
    codeCaptionHi: '`fig, ax = plt.subplots()` use karne se single ya multi-chart grids dono par 100% clean control milta hai.',
    tableTitle: 'Core Matplotlib Anatomy',
    tableHeaders: ['Component', 'Matplotlib Call', 'Role'],
    tableRows: [
      ['Figure (`fig`)', 'fig, ax = plt.subplots(figsize=(8,4))', 'Outer canvas & image export container'],
      ['Axes (`ax`)', 'ax.plot(...), ax.set_title(...)', 'Individual chart area with x & y axes'],
      ['Subplots Grid', 'fig, axes = plt.subplots(1, 2)', 'Side-by-side comparison charts'],
      ['Export', 'fig.savefig("out.png", dpi=150)', 'Saves crisp PNG/SVG for slides'],
    ],
    tableNoteEn: 'Always call `fig.savefig(...)` **before** `plt.show()` — calling `plt.show()` clears the figure in many environments and saves a blank white image!',
    tableNoteHi: '`fig.savefig(...)` hamesha `plt.show()` se **pehle** call karein, warna kai baar blank white PNG save ho jaati hai!',
    mistakeEn: 'Posting a naked chart with no title, no units on the Y-axis, and overlapping X-axis labels — forcing viewers to guess what the numbers even mean.',
    mistakeHi: 'Bina title, bina Y-axis unit aur chipke hue X-axis labels wala chart share kar dena — jisse koi samajh hi na paaye ki numbers kya hain.',
    proHabitEn: 'Use `fig, ax = plt.subplots()`, always include units in axis labels (`Revenue (₹ Lakhs)`), and call `fig.tight_layout()` every time.',
    proHabitHi: 'Hamesha `fig, ax = plt.subplots()` use karein, axis labels mein units (`Revenue (₹ Lakhs)`) likhein aur `fig.tight_layout()` lagayein.',
    jobUseEn: 'Every custom executive chart, ML learning curve, ROC curve, and automated PDF report in Python relies on Matplotlib under the hood.',
    jobUseHi: 'Python ke har custom chart, ML learning curve, ROC curve aur automated PDF report ke peeche Matplotlib hi kaam karta hai.',
    mcq1Question: 'In Matplotlib, what is the difference between a `Figure` (`fig`) and an `Axes` (`ax`)?',
    mcq1Correct: '`Figure` is the entire outer window/frame; `Axes` is an individual plot area inside that figure.',
    mcq1Wrongs: [
      '`Axes` is only the x-axis line.',
      '`Figure` can only hold numbers, not charts.',
      'They are exact synonyms.',
    ],
    mcq1Explain: 'One `Figure` can contain one or many `Axes` objects (subplots), and each `Axes` holds its own data, title, and x/y axes.',
    mcq2Question: 'Why should `fig.savefig("plot.png")` be called BEFORE `plt.show()`?',
    mcq2Correct: '`plt.show()` displays and clears the active figure, so calling `savefig()` afterward often outputs a blank image.',
    mcq2Wrongs: [
      'Because `savefig()` cannot create PNG files after `show()`.',
      'Because `plt.show()` deletes the dataset.',
      'Because `savefig()` requires no arguments.',
    ],
    mcq2Explain: 'Saving before `plt.show()` ensures the rendered canvas is captured intact at your desired DPI.',
    realWorldScenario:
      'You build a 1×2 side-by-side Matplotlib figure showing Daily Orders on the left and Average Order Value on the right, exported at 150 DPI for Monday’s leadership deck.',
    interviewQ1: 'Why is the object-oriented Matplotlib interface (`fig, ax = plt.subplots()`) recommended over `plt.plot()`?',
    interviewA1:
      'It explicitly tracks which chart (`ax`) you are modifying, making multi-subplot dashboards, reusable plotting functions, and fine-grained customization clean and bug-free.',
    interviewQ2: 'What does `fig.tight_layout()` do?',
    interviewA2:
      'It automatically adjusts padding around titles, axis labels, and tick marks so text doesn’t overlap or get clipped when displayed or saved.',
  },
  {
    id: 215,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 8,
    title: 'Seaborn Fundamentals',
    subtitle: 'STATISTICAL DATAFRAME-FIRST CHARTS WITH HUE, THEMES, AND FACETS',
    coreEn:
      'Seaborn is built on top of Matplotlib and speaks Pandas DataFrames natively — letting you pass `data=df, x=..., y=..., hue=...` to create beautiful statistical charts (box plots, heatmaps, regression plots, pairplots) in 1 line.',
    coreHi:
      'Seaborn Matplotlib ke upar bana hai aur Pandas DataFrames ko seedha samajhta hai — sirf `data=df, x=..., y=..., hue=...` likh kar 1 line mein sundar statistical charts (box plot, heatmap, regplot, pairplot) ban jaate hain.',
    analogyTitle: 'Manual Camera (Matplotlib) vs Smart DSLR Auto-Portrait Mode (Seaborn)',
    analogyEn:
      'Matplotlib gives you every manual dial (great for custom tweaks). Seaborn is like a smart DSLR preset that automatically picks balanced colors, labels axes from DataFrame column names, adds confidence intervals, and splits groups with `hue=`!',
    analogyHi:
      'Matplotlib manual camera hai jahan har setting khud karni padti hai. Seaborn smart DSLR preset jaisa hai jo DataFrame column names se khud labels, clean colors aur `hue=` legends bana deta hai!',
    steps: [
      {
        title: 'Import & Set Clean Theme',
        en: 'Run `import seaborn as sns; sns.set_theme(style="whitegrid")` for instant clean styling.',
        hi: '`import seaborn as sns; sns.set_theme(style="whitegrid")` se turant clean theme set karein.',
      },
      {
        title: 'Pass DataFrame & Column Names',
        en: 'Write `sns.barplot(data=df, x="city", y="sales", hue="channel")` — Seaborn handles grouping & legends automatically!',
        hi: 'Seedha `data=df, x="city", y="sales", hue="channel"` pass karein — grouping aur legend apne aap ban jaate hain.',
      },
      {
        title: 'Combine Seaborn with Matplotlib `ax=`',
        en: 'Pass `ax=ax` into any axes-level Seaborn plot so you can still customize titles and save with Matplotlib.',
        hi: 'Seaborn function mein `ax=ax` pass karein taaki Matplotlib ke `ax.set_title()` aur `fig.savefig()` ke saath mix kar sakein.',
      },
      {
        title: 'Use `FacetGrid` / `relplot` / `catplot` for Small Multiples',
        en: 'Pass `col="region"` in figure-level functions to generate clean side-by-side panels per region automatically.',
        hi: 'Har region ka alag panel banane ke liye `sns.catplot(..., col="region")` use karein.',
      },
    ],
    codeLabel: 'PYTHON • SEABORN DATAFRAME PLOT WITH HUE',
    code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style="whitegrid")
df = pd.DataFrame({
    "city": ["Delhi", "Delhi", "Pune", "Pune"],
    "channel": ["App", "Web", "App", "Web"],
    "sales": [850, 520, 610, 390]
})

fig, ax = plt.subplots(figsize=(6, 3.5))
sns.barplot(data=df, x="city", y="sales", hue="channel", ax=ax)
ax.set_title("Sales by City and Channel")
print("Plotted bars:", len(ax.patches))`,
    codeOutput: `Plotted bars: 4`,
    codeCaptionEn: 'One line of `sns.barplot(..., hue="channel")` created grouped bars, color palette, axis labels, and legend automatically.',
    codeCaptionHi: 'Ek line `sns.barplot(..., hue="channel")` ne grouped bars, colors, axis labels aur legend sab apne aap bana diya.',
    tableTitle: 'Popular Seaborn Plot Families',
    tableHeaders: ['Family', 'Key Functions', 'Best For'],
    tableRows: [
      ['Distribution', 'histplot, kdeplot, ecdfplot', 'Single numeric variable shape'],
      ['Categorical', 'barplot, countplot, boxplot, violinplot', 'Comparing metrics across categories'],
      ['Relational', 'scatterplot, lineplot, regplot', 'Numeric × Numeric & time trends'],
      ['Matrix / Multi', 'heatmap, pairplot', 'Correlations & all-pairs EDA overview'],
    ],
    tableNoteEn: 'By default `sns.barplot()` computes the **mean** and draws error bars (95% confidence interval); pass `estimator="median"` or `errorbar=None` when preferred.',
    tableNoteHi: 'Default mein `sns.barplot()` **mean** aur error bars draw karta hai; median ya clean bars ke liye `estimator="median"` ya `errorbar=None` pass karein.',
    mistakeEn: 'Trying to pass `ax=ax` to a figure-level function like `sns.pairplot()` or `sns.catplot()` (which manage their own figures) instead of an axes-level function like `sns.boxplot(..., ax=ax)`.',
    mistakeHi: '`sns.catplot()` ya `sns.pairplot()` jaise figure-level functions mein `ax=ax` pass kar dena — jo sirf axes-level functions (`boxplot`, `barplot`) mein chalta hai.',
    proHabitEn: 'Use Seaborn for fast, clean statistical EDA charts, and customize titles/annotations/layout through Matplotlib’s `ax` and `fig`.',
    proHabitHi: 'Fast statistical EDA ke liye Seaborn use karein aur final polish (titles, annotations, savefig) Matplotlib ke `ax`/`fig` se karein.',
    jobUseEn: 'Seaborn is the fastest way in Python to explore multi-variable relationships (`hue`, `col`, `pairplot`, `heatmap`) during EDA.',
    jobUseHi: 'EDA ke dauran `hue`, `col`, `pairplot`, aur `heatmap` se multi-variable patterns turant pakadne ke liye Seaborn sabse tez tool hai.',
    mcq1Question: 'What does the `hue="segment"` parameter do in a Seaborn plot?',
    mcq1Correct: 'Splits and color-codes the plot by each unique category in `segment` and adds a legend automatically.',
    mcq1Wrongs: [
      'Deletes the `segment` column from the DataFrame.',
      'Changes the background color to black.',
      'Sorts the table alphabetically only.',
    ],
    mcq1Explain: '`hue` encodes a categorical (or numeric) variable into distinct colors so you can compare subgroups in one chart.',
    mcq2Question: 'Which Seaborn function plots scatter plots and histograms for every pair of numeric columns in a DataFrame at once?',
    mcq2Correct: 'sns.pairplot(df)',
    mcq2Wrongs: ['sns.lineplot(df)', 'sns.countplot(df)', 'sns.rugplot(df)'],
    mcq2Explain: '`sns.pairplot(df)` creates an instant matrix of pairwise scatter plots with univariate distributions on the diagonal.',
    realWorldScenario:
      'You want to see how `age`, `income`, and `spend` interact across `churned = 0 vs 1` in 10 seconds. One call to `sns.pairplot(df, hue="churned")` reveals the exact separating boundary.',
    interviewQ1: 'How do Matplotlib and Seaborn complement each other in a Data Scientist’s workflow?',
    interviewA1:
      'Seaborn is built on Matplotlib and provides a concise DataFrame-first API for statistical charts; Matplotlib provides low-level control for custom annotations, multi-panel layouts, and export.',
    interviewQ2: 'What is the difference between Seaborn’s axes-level functions (`sns.boxplot`) and figure-level functions (`sns.catplot`)?',
    interviewA2:
      'Axes-level functions draw onto a single Matplotlib `ax` (accepting `ax=ax`), while figure-level functions create their own `FacetGrid` figure so you can easily split plots into multiple columns/rows with `col=` and `row=`.',
  },
  {
    id: 216,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 9,
    title: 'Bar Charts and Line Charts',
    subtitle: 'COMPARING CATEGORIES WITH BARS AND TRACKING TIME TRENDS WITH LINES',
    coreEn:
      '**Bar charts** compare discrete categories (like revenue by city — always starting at zero!), while **Line charts** show continuous trends over time (like monthly sales or daily active users).',
    coreHi:
      '**Bar charts** alag-alag categories compare karne ke liye hote hain (jaise city-wise revenue — hamesha 0 se start!), aur **Line charts** samay ke saath trend dikhane ke liye (jaise monthly sales ya daily users).',
    analogyTitle: 'Bar Chart = Side-by-Side Measuring Cups; Line Chart = Heartbeat Monitor Over Time',
    analogyEn:
      'Measuring cups lined up next to each other let you compare volumes across categories immediately (Bar Chart). A hospital heartbeat monitor connects readings sequentially across time (Line Chart).',
    analogyHi:
      'Line mein rakhe measuring cups alag categories ki volume compare karte hain (Bar Chart). Hospital ka heartbeat monitor time ke saath continuous trend dikhata hai (Line Chart).',
    steps: [
      {
        title: 'Sort Bars by Value (Not Alphabetically)',
        en: 'Order category bars from largest to smallest so the top and bottom performers jump out instantly.',
        hi: 'Categories ko alphabetically nahi, balki sabse bade se sabse chhote value ke order mein sort karein.',
      },
      {
        title: 'Use Horizontal Bars (`barh`) for Long Labels',
        en: 'Switch to horizontal bars whenever category names are long so text stays horizontal and easy to read.',
        hi: 'Lambe category names ke liye horizontal bar chart (`ax.barh`) banayein taaki labels tedhe na hon.',
      },
      {
        title: 'Always Start Bar Charts at Zero',
        en: 'Truncating a bar chart’s baseline exaggerates tiny differences visually — keep `ylim` starting at `0`.',
        hi: 'Bar chart ka axis hamesha `0` se start karein taaki chhote differences nakli tarike se bade na dikhein.',
      },
      {
        title: 'Keep Line Charts Strictly Chronological',
        en: 'Sort by date first (`df.sort_values("date")`) and limit a single line chart to 3–5 clean lines (avoid "spaghetti charts").',
        hi: 'Line chart se pehle date par sort karein aur ek chart mein 3–5 se zyada lines na daalein (spaghetti chart se bachein).',
      },
    ],
    codeLabel: 'PYTHON • SORTED HORIZONTAL BAR CHART',
    code: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({"city": ["Pune", "Delhi", "Mumbai", "Goa"], "rev": [45, 82, 95, 28]})
df = df.sort_values("rev", ascending=True)  # top bar gets highest value

fig, ax = plt.subplots(figsize=(6, 3))
ax.barh(df["city"], df["rev"], color="#0ea5e9")
ax.set_xlim(0, 110)
ax.set_title("Q1 Revenue by City (Rs Lakhs)")
ax.set_xlabel("Revenue (Rs Lakhs)")
print("Top city:", df.iloc[-1]["city"], "->", df.iloc[-1]["rev"])`,
    codeOutput: `Top city: Mumbai -> 95`,
    codeCaptionEn: 'Sorting ascending before `ax.barh()` puts the highest-revenue city (`Mumbai`) cleanly at the very top.',
    codeCaptionHi: '`ax.barh()` se pehle ascending sort karne se sabse zyada revenue wali city (`Mumbai`) sabse upar aati hai.',
    tableTitle: 'Bar Chart vs Line Chart Rules',
    tableHeaders: ['Feature', 'Bar Chart', 'Line Chart'],
    tableRows: [
      ['X-Axis Type', 'Discrete categories (City, Product)', 'Continuous ordered time (Day, Month)'],
      ['Must Start at 0?', 'YES (bar length encodes value)', 'Not always (small % changes can zoom with clear note)'],
      ['Best Ordering', 'Sorted high-to-low by metric', 'Strictly chronological'],
      ['Common Mistake', 'Truncated Y-axis or 25 crowded bars', 'Connecting unrelated cities with a line!'],
    ],
    tableNoteEn: 'Never connect discrete categories like `Delhi -> Mumbai -> Pune` with a **line chart** — a line implies continuous progression between points!',
    tableNoteHi: '`Delhi -> Mumbai -> Pune` jaisi discrete categories ko kabhi **line chart** se mat jodein — line continuous time/order dikhati hai!',
    mistakeEn: 'Plotting a bar chart with the Y-axis starting at `90` instead of `0`, making `98` look 5× larger than `92`!',
    mistakeHi: 'Bar chart ka Y-axis `0` ke bajaye `90` se start kar dena — jisse `98` aur `92` mein chhota sa farq 5× bada dikhne lagta hai!',
    proHabitEn: 'Sort bars by value, flip to horizontal bars for 6+ categories or long names, and annotate key peaks on line charts.',
    proHabitHi: 'Bars ko value se sort karein, lambe names par horizontal bar use karein aur line chart ke main peaks par data label lagayein.',
    jobUseEn: 'Bar and line charts cover 70%+ of all executive dashboards, investor updates, and weekly KPI reviews.',
    jobUseHi: 'Executive dashboards, investor decks aur weekly KPI reviews ke 70%+ charts sirf bar aur line charts hi hote hain.',
    mcq1Question: 'Why is it misleading to start a **bar chart’s** Y-axis at `80` instead of `0`?',
    mcq1Correct: 'Human eyes judge bar charts by bar length; starting at 80 visually exaggerates small differences.',
    mcq1Wrongs: [
      'Matplotlib cannot render axes above 80.',
      'It reverses the order of categories.',
      'Bar charts only work with negative numbers.',
    ],
    mcq1Explain: 'Because bar height encodes magnitude proportionally, clipping the baseline distorts visual ratios dramatically.',
    mcq2Question: 'Which chart should you choose to compare revenue across 10 product categories with long names?',
    mcq2Correct: 'A sorted horizontal bar chart (`ax.barh()`).',
    mcq2Wrongs: [
      'A 10-slice 3D pie chart.',
      'A line chart connecting the 10 categories.',
      'A scatter plot of category names.',
    ],
    mcq2Explain: 'Horizontal bars keep long labels crisp and readable, and sorting highlights top performers immediately.',
    realWorldScenario:
      'Your product manager wants to see 12 months of active user growth (Line Chart) next to Top 8 Acquisition Channels (Sorted Horizontal Bar Chart).',
    interviewQ1: 'When should you use a bar chart vs a line chart?',
    interviewA1:
      'Use a bar chart to compare magnitudes across discrete categories (products, cities, teams). Use a line chart to show continuous trends, trajectories, and seasonality over time.',
    interviewQ2: 'How do you fix a "spaghetti" line chart that has 15 overlapping lines?',
    interviewA2:
      'Highlight only the top 2–3 lines in color while muting the rest in light gray, aggregate smaller lines into "Other", or split into clean small multiples (facets).',
  },
  {
    id: 217,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 10,
    title: 'Histograms and Box Plots',
    subtitle: 'VISUALIZING DISTRIBUTIONS, QUARTILES, SKEWNESS, AND OUTLIERS',
    coreEn:
      'A **Histogram** groups continuous numbers into equal bins to show distribution shape (peaks & skew), while a **Box Plot** summarizes the 5-number summary (`min`, `Q1`, `median`, `Q3`, `max`) and explicitly marks outliers as dots.',
    coreHi:
      '**Histogram** continuous numbers ko bins mein baant kar distribution ka shape (peaks aur skew) dikhata hai, aur **Box Plot** 5-number summary (`min`, `Q1`, `median`, `Q3`, `max`) ke saath outliers ko alag dots ke roop mein dikhata hai.',
    analogyTitle: 'Histogram = Grouping Students by Height Brackets; Box Plot = Compact 5-Line X-Ray',
    analogyEn:
      'A Histogram puts students into 5-cm height buckets and counts how many stand in each bucket. A Box Plot draws one neat box holding the middle 50% of students (IQR), a line for the median, whiskers for normal range, and dots for unusually tall/short outliers.',
    analogyHi:
      'Histogram students ko 5-cm height buckets mein khada karke count dikhata hai. Box Plot beech ke 50% students (IQR) ka ek neat box, median ki line, normal whiskers aur outliers ke dots dikhata hai.',
    steps: [
      {
        title: 'Plot Histogram & Test Bin Sizes',
        en: 'Use `sns.histplot(df["price"], bins=20, kde=True)` and try 2–3 bin counts so you don’t miss double peaks.',
        hi: '`sns.histplot(df["price"], bins=20, kde=True)` banayein aur 2–3 bin counts try karein taaki peaks chhupein nahi.',
      },
      {
        title: 'Read the 5 Parts of a Box Plot',
        en: 'Box edges = Q1 (25%) & Q3 (75%); center line = Median (50%); whiskers = `1.5×IQR`; dots beyond whiskers = Outliers.',
        hi: 'Box edges = Q1 aur Q3, beech ki line = Median, whiskers = `1.5×IQR`, aur bahar ke dots = Outliers.',
      },
      {
        title: 'Compare Distributions Across Groups',
        en: 'Put side-by-side box plots (`sns.boxplot(data=df, x="dept", y="salary")`) to compare spread & medians across categories.',
        hi: 'Alag categories ka spread compare karne ke liye side-by-side `sns.boxplot(data=df, x="dept", y="salary")` banayein.',
      },
      {
        title: 'Remember What Box Plots Hide',
        en: 'A box plot cannot show bimodal (two-peak) shapes — pair it with a histogram or violin plot when checking modality.',
        hi: 'Box plot do peaks (bimodal) nahi dikha pata — isliye modality check karne ke liye histogram ya violin plot saath dekhein.',
      },
    ],
    codeLabel: 'PYTHON • HISTOGRAM + BOX PLOT STATS',
    code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

scores = pd.Series([55, 60, 62, 65, 68, 70, 72, 75, 78, 98])
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(8, 3))
sns.histplot(scores, bins=5, kde=True, ax=ax1)
sns.boxplot(x=scores, ax=ax2)
ax1.set_title("Histogram + KDE")
ax2.set_title("Box Plot (Outlier = 98)")
print("Median:", scores.median(), "| IQR:", scores.quantile(0.75) - scores.quantile(0.25))`,
    codeOutput: `Median: 69.0 | IQR: 11.75`,
    codeCaptionEn: 'Pairing a histogram (shape) with a box plot (exact median, IQR, and outlier `98`) gives the complete picture.',
    codeCaptionHi: 'Histogram (shape) aur box plot (median, IQR aur outlier `98`) ko saath dekhne se poori tasveer saaf ho jaati hai.',
    tableTitle: 'Histogram vs Box Plot Comparison',
    tableHeaders: ['Feature', 'Histogram', 'Box Plot'],
    tableRows: [
      ['Best At Showing', 'Exact shape, skew, & multiple peaks', 'Median, IQR spread, & explicit outliers'],
      ['Comparing 5+ Groups', 'Hard (overlapping histograms get messy)', 'Effortless (side-by-side boxes)'],
      ['Key Parameter', '`bins=` (too few/many hides patterns)', '`whis=1.5` (standard IQR fence)'],
      ['Blind Spot', 'Sensitive to bin width choice', 'Hides bimodal (two-peak) distributions'],
    ],
    tableNoteEn: 'Don’t confuse a **Histogram** (continuous numeric bins with touching bars) with a **Bar Chart** (discrete categories with gaps between bars).',
    tableNoteHi: '**Histogram** (continuous numeric bins, bars chipke hue) aur **Bar Chart** (discrete categories, bars ke beech gap) ko kabhi mix na karein.',
    mistakeEn: 'Using `bins=3` on a histogram (hiding all detail) or relying solely on a box plot without noticing a bimodal split.',
    mistakeHi: 'Histogram mein sirf `bins=3` rakhna (jisse saari detail chhup jaati hai) ya sirf box plot dekh kar bimodal shape miss kar dena.',
    proHabitEn: 'Use `sns.histplot(..., kde=True)` for single-variable shape and `sns.boxplot(x=category, y=metric)` for clean multi-group comparisons.',
    proHabitHi: 'Single variable ke liye `sns.histplot(..., kde=True)` aur multi-group comparison ke liye `sns.boxplot(x=category, y=metric)` use karein.',
    jobUseEn: 'Used in salary equity audits across departments, delivery-time SLA monitoring by courier, and checking ML feature distributions.',
    jobUseHi: 'Department-wise salary comparison, courier delivery-time audits aur ML feature distributions check karne mein roz use hota hai.',
    mcq1Question: 'In a standard Box Plot, what does the width/height of the central box represent?',
    mcq1Correct: 'The Interquartile Range (IQR = Q3 - Q1), containing the middle 50% of the data.',
    mcq1Wrongs: [
      'The entire range from minimum to maximum.',
      'Only the outliers.',
      'The arithmetic mean plus 10.',
    ],
    mcq1Explain: 'The box stretches from the 25th percentile (Q1) to the 75th percentile (Q3), capturing the middle half of observations.',
    mcq2Question: 'What is the main difference between a **Histogram** and a **Bar Chart**?',
    mcq2Correct: 'A histogram bins continuous numerical values to show distribution; a bar chart compares discrete categories.',
    mcq2Wrongs: [
      'Histograms can only be horizontal.',
      'Bar charts cannot use colors.',
      'There is no difference.',
    ],
    mcq2Explain: 'Histogram x-axes are continuous numeric intervals (adjacent bins), whereas bar chart x-axes are separate categories.',
    realWorldScenario:
      'You compare delivery times across 4 couriers using side-by-side box plots and immediately see Courier C has the same median (3 days) as others, but massive outliers up to 14 days.',
    interviewQ1: 'What information does a Box Plot display, and what does it hide?',
    interviewA1:
      'It displays the median, Q1, Q3 (IQR), whiskers, and individual outlier points. It hides the exact shape of the density — such as whether the data is bimodal (has two peaks).',
    interviewQ2: 'What does a Violin Plot add on top of a Box Plot?',
    interviewA2:
      'A Violin Plot combines a mini box plot with a mirrored KDE density curve on both sides, revealing multimodal peaks while still showing quartiles.',
  },
  {
    id: 218,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 11,
    title: 'Scatter Plots and Correlation Heatmaps',
    subtitle: 'SPOTTING RELATIONSHIPS, CLUSTERS, NON-LINEAR CURVES, AND MULTICOLLINEARITY',
    coreEn:
      'A **Scatter Plot** plots every observation as an `(x, y)` dot to reveal linear trends, curves, clusters, and outliers; a **Correlation Heatmap** color-codes the full `df.corr()` matrix (`-1` to `+1`) to scan dozens of numeric pairs at once.',
    coreHi:
      '**Scatter Plot** har observation ko `(x, y)` dot ke roop mein dikhata hai jisse linear trend, curve, clusters aur outliers turant dikhte hain; aur **Correlation Heatmap** poore `df.corr()` matrix (`-1` se `+1`) ko color-code karke ek saath sabhi pairs scan karta hai.',
    analogyTitle: 'Scatter Plot = Microscope on 1 Pair; Heatmap = Thermal Camera Over the Whole Room',
    analogyEn:
      'A Correlation Heatmap is like a thermal camera scanning 15 features at once — hot red/dark blue squares instantly show which pairs move together. Then you zoom in with a Scatter Plot (microscope) to verify whether the link is truly linear or distorted by an outlier.',
    analogyHi:
      'Correlation Heatmap ek thermal camera jaisa hai jo 15 features ko ek saath scan karke bright hot spots dikha deta hai. Phir aap Scatter Plot (microscope) se zoom karke check karte hain ki rishta asli linear hai ya kisi outlier ka khel.',
    steps: [
      {
        title: 'Build the Correlation Matrix (`df.corr(numeric_only=True)`)',
        en: 'Compute pairwise correlations (`+1` perfect positive, `0` no linear link, `-1` perfect inverse).',
        hi: '`df.corr(numeric_only=True)` se sabhi numeric pairs ka correlation (`-1` se `+1`) nikalein.',
      },
      {
        title: 'Plot a Diverging Heatmap (`vmin=-1, vmax=1`)',
        en: 'Use `sns.heatmap(corr, annot=True, cmap="coolwarm", center=0, vmin=-1, vmax=1)` so positive and negative links pop cleanly.',
        hi: '`annot=True`, `cmap="coolwarm"`, `vmin=-1, vmax=1` lagakar clean diverging heatmap banayein.',
      },
      {
        title: 'Always Verify Top Pairs with Scatter Plots',
        en: 'Plot `sns.scatterplot(data=df, x=..., y=..., hue=...)` — a U-shaped curve can have `corr = 0` even with a strong real relationship!',
        hi: 'Top pairs par hamesha `sns.scatterplot()` zaroor banayein — kyunki U-shape curve mein `corr = 0` ho sakta hai par strong pattern hota hai!',
      },
      {
        title: 'Spot Multicollinearity Before Modeling',
        en: 'Flag input feature pairs with `|corr| > 0.85` (like `area_sqft` and `area_sqm`) before fitting Linear Regression.',
        hi: 'Linear Regression se pehle `|corr| > 0.85` wale redundant feature pairs ko pakdein.',
      },
    ],
    codeLabel: 'PYTHON • CORRELATION HEATMAP MATRIX',
    code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "ad_spend": [10, 20, 30, 40, 50],
    "discount": [25, 20, 15, 10, 5],
    "revenue":  [100, 190, 310, 405, 510]
})
corr = df.corr(numeric_only=True).round(2)
fig, ax = plt.subplots(figsize=(4.5, 3.5))
sns.heatmap(corr, annot=True, cmap="coolwarm", vmin=-1, vmax=1, ax=ax)
ax.set_title("Feature Correlation Heatmap")
print(corr)`,
    codeOutput: `          ad_spend  discount  revenue
ad_spend      1.00     -1.00     1.00
discount     -1.00      1.00    -1.00
revenue       1.00     -1.00     1.00`,
    codeCaptionEn: 'Setting `vmin=-1, vmax=1` and `cmap="coolwarm"` centers `0` cleanly and shows `+1.0` vs `-1.0` at a glance.',
    codeCaptionHi: '`vmin=-1, vmax=1` aur `cmap="coolwarm"` se `0` beech mein rehta hai aur `+1.0` vs `-1.0` ek nazar mein dikhta hai.',
    tableTitle: 'Interpreting Correlation Coefficient (`r`)',
    tableHeaders: ['Value of `r`', 'Interpretation', 'Visual Pattern in Scatter Plot'],
    tableRows: [
      ['+0.7 to +1.0', 'Strong positive linear link', 'Dots climb tightly upward left-to-right'],
      ['-0.7 to -1.0', 'Strong negative linear link', 'Dots slope tightly downward left-to-right'],
      ['-0.2 to +0.2', 'Weak or no *linear* link', 'Random cloud OR non-linear U-shape!'],
    ],
    tableNoteEn: 'For crowded scatter plots with 50,000+ points (overplotting), lower opacity (`alpha=0.2`), sample points, or use `plt.hexbin()` / 2D density plots.',
    tableNoteHi: '50,000+ points wale scatter plot mein dots ek ke upar ek chadh jaate hain — wahan `alpha=0.2` ya `hexbin()` use karein.',
    mistakeEn: 'Seeing `corr = 0.02` in a heatmap and concluding "Feature X has zero relationship with Y" — when a scatter plot would have revealed a crystal-clear parabola/curve!',
    mistakeHi: 'Heatmap mein `corr = 0.02` dekh kar feature ko useless maan lena — jabki scatter plot mein clean U-shaped ya non-linear relationship hota hai!',
    proHabitEn: 'Use a correlation heatmap to shortlist interesting pairs quickly, then ALWAYS inspect the top pairs and near-zero surprise pairs with scatter plots.',
    proHabitHi: 'Heatmap se jaldi pairs shortlist karein, phir top pairs ko hamesha scatter plot se visually verify karein.',
    jobUseEn: 'Used in feature selection for ML models, catching redundant collinear columns, and visualizing customer clusters (`income` vs `spend`).',
    jobUseHi: 'ML feature selection, collinear columns hatane aur customer clusters (`income` vs `spend`) dekhne mein roz use hota hai.',
    mcq1Question: 'Can two variables have a strong, exact relationship (like `y = x²`) while their Pearson correlation is close to `0`?',
    mcq1Correct: 'Yes — Pearson correlation only measures *linear* relationships, so symmetric curves can score near `0`.',
    mcq1Wrongs: [
      'No — any strong relationship always gives `r = +1.0`.',
      'Only if the dataset contains text.',
      'Yes, because Pearson correlation is always `0`.',
    ],
    mcq1Explain: 'That is why scatter plots are mandatory alongside correlation heatmaps.',
    mcq2Question: 'Why should you pass `vmin=-1, vmax=1` and `center=0` to `sns.heatmap(corr)`?',
    mcq2Correct: 'So the color scale is fixed and symmetric from `-1` to `+1` with `0` as the neutral midpoint.',
    mcq2Wrongs: [
      'Because Seaborn cannot plot negative numbers without it.',
      'To hide the diagonal values.',
      'To convert correlation into percentages.',
    ],
    mcq2Explain: 'Without fixed bounds, Seaborn auto-scales colors to the data’s min/max, which can make a mild `0.3` look as bright red as `0.95`.',
    realWorldScenario:
      'Your heatmap shows `total_rooms` and `house_sqft` have `r = 0.96` (high multicollinearity). You keep `house_sqft` and engineer `sqft_per_room` instead, stabilizing your Linear Regression coefficients.',
    interviewQ1: 'How do you handle overplotting when making a scatter plot with 100,000 rows?',
    interviewA1:
      'Reduce marker size and add transparency (`alpha=0.15`), plot a random sample, or switch to a 2D hexbin (`plt.hexbin`) or KDE contour plot.',
    interviewQ2: 'Why is checking a correlation heatmap useful before fitting Linear Regression?',
    interviewA2:
      'It quickly highlights both strong candidate predictors (high correlation with target) and multicollinearity (two input features with `|r| > 0.85` that make regression weights unstable).',
  },
  {
    id: 219,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 12,
    title: 'Choosing Effective Visualizations',
    subtitle: 'MATCHING QUESTION TO CHART TYPE AND APPLYING DATA-INK DESIGN PRINCIPLES',
    coreEn:
      'Effective data visualization matches the **right chart** to your analytical goal (Comparison, Trend, Distribution, Relationship, Composition) and removes visual clutter so the main insight stands out in 3 seconds.',
    coreHi:
      'Effective visualization ka rule simple hai: apne goal (Comparison, Trend, Distribution, Relationship) ke hisaab se **sahi chart** chunein aur extra visual kachra (clutter) hatayein taaki asli insight 3 second mein dikhe.',
    analogyTitle: 'Highway Road Sign vs Cluttered Newspaper Page',
    analogyEn:
      'A great highway sign uses high contrast, minimal words, and one clear arrow so a driver gets the message at 80 km/h. A cluttered 3D rainbow pie chart with 14 slices is like asking a driver to read a tiny newspaper paragraph while driving!',
    analogyHi:
      'Highway sign board par kam words, clear arrow aur strong contrast hota hai taaki driver 1 second mein samajh jaye. 14 slices wala 3D rainbow pie chart gadi chalate waqt akhbar padhne jaisa confusing hota hai!',
    steps: [
      {
        title: 'Identify Your Analytical Intent',
        en: 'Ask: Am I showing Comparison (Bar), Trend over Time (Line), Distribution (Histogram/Box), or Relationship (Scatter)?',
        hi: 'Pehle goal तय karein: Comparison (Bar), Time Trend (Line), Distribution (Histogram/Box), ya Relationship (Scatter)?',
      },
      {
        title: 'Maximize Data-Ink & Cut Clutter',
        en: 'Remove 3D effects, heavy borders, redundant legends, and rainbow colors; keep clean white space.',
        hi: '3D effects, moti borders, faltu legends aur rainbow colors hatayein; clean spacing rakhein.',
      },
      {
        title: 'Use Color Intentionally (Highlight 1 Story)',
        en: 'Put supporting bars in calm gray and highlight ONLY the key bar/line in a bold accent color (colorblind-safe palettes!).',
        hi: 'Baaki bars ko light gray mein rakhein aur sirf apni main story wali bar/line ko bold accent color dein.',
      },
      {
        title: 'Write an Action Title',
        en: 'Replace `"Sales by Region"` with `"West Region Drove 48% of Q4 Growth"` so the takeaway is effortless.',
        hi: '`"Sales by Region"` ki jagah `"West Region Drove 48% of Q4 Growth"` jaisa insight-driven title likhein.',
      },
    ],
    codeLabel: 'PYTHON • HIGHLIGHTING ONE STORY WITH PREATTENTIVE COLOR',
    code: `import matplotlib.pyplot as plt

regions = ["North", "East", "South", "West"]
growth = [12, 9, 15, 38]
colors = ["#cbd5e1", "#cbd5e1", "#cbd5e1", "#2563eb"]  # highlight West only

fig, ax = plt.subplots(figsize=(6, 3))
ax.bar(regions, growth, color=colors)
ax.set_title("West Region Led Q4 Growth at +38% YoY", fontweight="bold")
ax.set_ylabel("YoY Growth (%)")
ax.spines[["top", "right"]].set_visible(False)
print("Highlighted leader:", regions[growth.index(max(growth))], f"+{max(growth)}%")`,
    codeOutput: `Highlighted leader: West +38%`,
    codeCaptionEn: 'Muting 3 bars in gray and highlighting `West` in blue draws the viewer’s eye to the key takeaway in under 1 second.',
    codeCaptionHi: '3 bars ko light gray aur sirf `West` ko blue rakhne se dekhne wale ki nazar 1 second mein main insight par jaati hai.',
    tableTitle: 'Chart Selection Decision Guide',
    tableHeaders: ['What You Want to Show', 'Best Chart', 'Avoid'],
    tableRows: [
      ['Compare categories', 'Sorted Bar / Horizontal Bar', '10-slice Pie Chart or 3D Bars'],
      ['Change over time', 'Line Chart / Area Chart', 'Pie Chart or Unsorted Bars'],
      ['Distribution / Outliers', 'Histogram / Box Plot / Violin', 'Single Average Bar'],
      ['Relationship (2 numbers)', 'Scatter Plot (with trendline)', 'Dual-axis mismatched line charts'],
    ],
    tableNoteEn: 'Why avoid pie charts with >4 slices? Human eyes are terrible at comparing slice angles, but super accurate at comparing bar lengths!',
    tableNoteHi: '4 se zyada slices wale pie chart se kyun bachein? Kyunki insaan ki aankhein angles compare karne mein kamzor aur bar lengths compare karne mein bahut tez hoti hain!',
    mistakeEn: 'Using a 12-slice 3D pie chart with rainbow colors or a dual Y-axis chart whose scales are manipulated to create fake intersections.',
    mistakeHi: '12 slices wala 3D rainbow pie chart banana ya dual Y-axis scale badal kar nakli visual correlation dikhana.',
    proHabitEn: 'Apply the 3-second test: show your chart to a colleague for 3 seconds — if they can’t state the main takeaway immediately, simplify it.',
    proHabitHi: '3-second test lagayein: chart ko 3 second dekhne par agar main takeaway turant samajh na aaye, toh use aur simple banayein.',
    jobUseEn: 'Clear, honest visual storytelling directly determines whether leadership trusts your analysis and approves your recommendations.',
    jobUseHi: 'Saaf aur imaandar visual storytelling hi tay karti hai ki leadership aapki recommendation par bharosa karke action legi ya nahi.',
    mcq1Question: 'Why is a sorted bar chart almost always better than a pie chart when comparing 7 product categories?',
    mcq1Correct: 'Human eyes judge aligned bar lengths far more accurately than circular slice angles.',
    mcq1Wrongs: [
      'Matplotlib cannot draw circles.',
      'Pie charts cannot display percentages.',
      'Bar charts automatically hide small categories.',
    ],
    mcq1Explain: 'Aligned lengths along a common baseline allow instant, exact visual comparison across many categories.',
    mcq2Question: 'What is the benefit of coloring 4 bars light gray and only 1 target bar bright blue?',
    mcq2Correct: 'It uses preattentive contrast to guide the audience’s focus straight to the key insight.',
    mcq2Wrongs: [
      'It saves printer ink only.',
      'It hides the other 4 values completely.',
      'It changes the underlying numbers.',
    ],
    mcq2Explain: 'Strategic color contrast eliminates visual noise and turns a generic chart into an unmistakable story.',
    realWorldScenario:
      'You redesign a cluttered 10-color executive slide into a clean gray-and-blue horizontal bar chart titled "Mobile Checkout Drops 24% on Step 3" — leadership approves the UX fix on the spot.',
    interviewQ1: 'What are Edward Tufte’s "data-ink ratio" and "chartjunk" principles in plain English?',
    interviewA1:
      'Maximize the ink spent displaying actual data and eliminate decorative clutter ("chartjunk" like 3D shadows, heavy gridlines, and pointless borders) that distracts from the message.',
    interviewQ2: 'Why should you be careful with color palettes like bright red vs green in charts?',
    interviewA2:
      'Roughly 8% of men have red-green color blindness. Using colorblind-safe palettes (like Blue/Orange or Viridis/Cividis) plus direct labels keeps charts accessible to everyone.',
  },
  {
    id: 220,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 13,
    title: 'Communicating EDA Findings',
    subtitle: 'STORYTELLING WITH DATA: EXECUTIVE SUMMARY, EVIDENCE, AND RECOMMENDATIONS',
    coreEn:
      'Analysis creates zero value until someone acts on it. Communicating EDA findings uses the **Pyramid Principle**: lead with the **headline insight & recommendation first**, back it up with 2–3 clean visuals, and state caveats honestly.',
    coreHi:
      'Jab tak koi action na le, analysis ka fayda zero hai. EDA findings communicate karne ka best tarika **Pyramid Principle** hai: sabse pehle **headline insight aur recommendation** batayein, phir 2–3 clean charts se proof dein, aur limitations imaandari se likhein.',
    analogyTitle: 'News Headline First vs Reading a Detective’s Entire Diary',
    analogyEn:
      'Executives don’t have time to watch a 20-slide diary of every failed Pandas command you tried! Like a newspaper, lead with the headline ("Late Delivery Caused 62% of Q3 Churn"), then show the 3 supporting facts and the exact next step.',
    analogyHi:
      'Managers ke paas aapke 20 rough Pandas experiments dekhne ka time nahi hota! Akhbar ki tarah pehle headline batayein ("Late Delivery se 62% Q3 Churn hua"), phir 3 clean proof charts aur clear action plan dein.',
    steps: [
      {
        title: 'Lead With the Headline ("So What?")',
        en: 'Start your report or slide deck with a 2-sentence Executive Summary answering the business question directly.',
        hi: 'Report ya presentation ki shuruat 2-line Executive Summary se karein jo business sawaal ka seedha jawab de.',
      },
      {
        title: 'Support With 2–3 Annotated Visuals',
        en: 'Pick only the charts that directly prove your point, with action titles and direct data callouts.',
        hi: 'Sirf 2–3 best charts rakhein jo point prove karein — action titles aur key number callouts ke saath.',
      },
      {
        title: 'Quantify Business Impact',
        en: 'Translate statistics into business language: instead of `"r = 0.72"`, say `"Cutting delivery time by 1 day saves ~₹18L/month in returns."`',
        hi: 'Stats ko business impact mein badlein: `"r = 0.72"` ke bajaye bolein `"1 din fast delivery se mahine ke ₹18L returns bachenge."`',
      },
      {
        title: 'State Data Limitations & Next Steps',
        en: 'Note sample sizes, missing-data assumptions, and 2–3 concrete recommended actions with owners.',
        hi: 'Sample size, missing-data caveats aur 2–3 clear next action steps imaandari se end mein likhein.',
      },
    ],
    codeLabel: 'PYTHON • GENERATING AN EXECUTIVE EDA SUMMARY BRIEF',
    code: `findings = {
    "headline": "Orders delivered >4 days have 3.4x higher return rate",
    "affected_orders_pct": 18.5,
    "est_monthly_savings_inr_lakhs": 14.2,
    "caveat": "Excludes 2.1% orders with missing delivery timestamp",
    "recommendation": "Switch Tier-2 routes from Courier C to Courier A"
}
for k, v in findings.items():
    print(f"{k.upper()}: {v}")`,
    codeOutput: `HEADLINE: Orders delivered >4 days have 3.4x higher return rate
AFFECTED_ORDERS_PCT: 18.5
EST_MONTHLY_SAVINGS_INR_LAKHS: 14.2
CAVEAT: Excludes 2.1% orders with missing delivery timestamp
RECOMMENDATION: Switch Tier-2 routes from Courier C to Courier A`,
    codeCaptionEn: 'Notice how every line speaks clear business impact — zero jargon, clear caveat, concrete recommendation.',
    codeCaptionHi: 'Dekhiye har line seedha business impact bolti hai — zero jargon, imaandar caveat aur clear recommendation.',
    tableTitle: 'Technical Notebook Dump vs Executive EDA Brief',
    tableHeaders: ['Section', 'Weak Technical Dump', 'Strong Executive EDA Brief'],
    tableRows: [
      ['Opening', '"First I ran df.info() and dropped 40 rows..."', '"Late deliveries drove 62% of Q3 returns (₹14L/mo)."'],
      ['Metrics', '"p-value < 0.001, Spearman = 0.68"', '"Return rate jumps from 4% to 14% after Day 4."'],
      ['Charts', '15 raw default Matplotlib plots', '3 polished highlight charts with action titles'],
      ['Ending', '"That is all the data we had."', '"Recommend A/B testing Courier A in 3 cities next week."'],
    ],
    tableNoteEn: 'Keep technical code, SQL queries, and extra diagnostic plots in an **Appendix** — ready if someone asks, without cluttering the main story.',
    tableNoteHi: 'Extra code, SQL queries aur diagnostic charts ko **Appendix** mein rakhein taaki main story crisp rahe.',
    mistakeEn: 'Presenting your analysis in chronological order of how you coded it ("First I loaded CSV, then fixed NaNs...") — losing executives’ attention in the first 60 seconds.',
    mistakeHi: 'Analysis ko coding ke order mein present karna ("Pehle CSV load ki, phir NaN fill kiye...") — jisse pehle 1 minute mein hi audience bore ho jaati hai.',
    proHabitEn: 'Always structure presentations as **Answer -> Evidence -> Business Impact -> Caveats & Next Steps**.',
    proHabitHi: 'Har presentation ka structure rakhein: **Seedha Jawab -> Proof Charts -> Business Impact -> Caveats aur Next Steps**.',
    jobUseEn: 'Communication is the #1 multiplier for Data Science career growth — turning technical findings into funded product and business initiatives.',
    jobUseHi: 'Strong communication hi Data Science career ka sabse bada multiplier hai — isi se aapke findings par company real decisions leti hai.',
    mcq1Question: 'What is the "Pyramid Principle" for communicating EDA findings to business leaders?',
    mcq1Correct: 'Start with the main takeaway and recommendation first, then present supporting evidence and details.',
    mcq1Wrongs: [
      'Hide the main conclusion until the very last slide.',
      'Show every single line of Python code on Slide 1.',
      'Use only pyramid-shaped charts.',
    ],
    mcq1Explain: 'Busy stakeholders need the "So What?" upfront; once convinced of its importance, they engage eagerly with your evidence.',
    mcq2Question: 'Why should you explicitly mention data limitations (e.g., "Excludes 2% missing dates") in an EDA summary?',
    mcq2Correct: 'It builds long-term credibility and prevents stakeholders from over-extrapolating beyond what the data supports.',
    mcq2Wrongs: [
      'To prove your analysis is wrong.',
      'Because Python requires a caveat string.',
      'To make the slide deck longer.',
    ],
    mcq2Explain: 'Honest caveats signal rigor and protect both the business and your reputation when decisions are audited.',
    realWorldScenario:
      'You have 5 minutes to present your 3-day customer churn EDA to the VP of Product. You open with 1 headline slide, 2 clean charts, and 2 concrete retention experiments — and get immediate sign-off.',
    interviewQ1: 'How would you explain a technical EDA finding (like right-skewed order values or correlation) to a non-technical marketing manager?',
    interviewA1:
      'Drop jargon and use plain numbers: "Most customers spend around ₹800 (median), while a small 5% VIP group spends ₹15,000+, pulling the average up — so we should design two separate campaigns rather than one-size-fits-all."',
    interviewQ2: 'What belongs in the main presentation vs the appendix of an EDA report?',
    interviewA2:
      'Main deck: executive summary, 2–4 decision-driving charts, quantified impact, and recommendations. Appendix: data dictionary, cleaning counts, SQL/code methodology, and secondary subgroup charts.',
  },
  {
    id: 221,
    modNum: 20,
    modTitle: 'Exploratory Data Analysis and Visualization',
    topicNumInMod: 14,
    title: 'Exploratory Data Analysis Project',
    subtitle: 'END-TO-END PORTFOLIO WORKFLOW: AUDIT, CLEAN, ANALYZE, VISUALIZE, AND PRESENT',
    coreEn:
      'A complete EDA capstone ties every Tab 4 skill together: loading raw data, auditing schema & nulls, cleaning text/dates/outliers, running univariate & multivariate analysis, plotting 3–5 clear charts, and writing an executive brief.',
    coreHi:
      'Complete EDA capstone project aapke Tab 4 ke saare skills (NumPy, Pandas, SQL mindset, Data Cleaning, Visualizations aur Storytelling) ko ek portfolio-ready end-to-end workflow mein jod deta hai.',
    analogyTitle: 'Investigative Journalism Feature From Raw Clues to Published Front Page',
    analogyEn:
      'A journalist doesn’t publish raw voice recordings. They gather sources (load), fact-check errors (clean), connect the dots (groupby/crosstab/corr), design crisp infographics (Matplotlib/Seaborn), and publish a compelling front-page story (Executive Brief).',
    analogyHi:
      'Journalist raw notes publish nahi karta — woh clues collect karta hai (load), fact-check karta hai (clean), connections jodta hai (groupby/corr), infographics banata hai (charts), aur front-page story (Executive Brief) chhapta hai.',
    steps: [
      {
        title: '1. Frame Questions & Audit Raw Data',
        en: 'Write 3 business questions, then run `shape`, `info()`, `isna().sum()`, and `duplicated().sum()`.',
        hi: '3 sharp business questions likhein aur `shape`, `info()`, `isna().sum()`, aur `duplicated().sum()` chalayein.',
      },
      {
        title: '2. Clean & Engineer Features',
        en: 'Standardize text, parse dates, impute/flag missing values, check IQR outliers, and create business metrics (e.g., `margin`, `delivery_days`).',
        hi: 'Text/dates clean karein, missing aur outliers handle karein aur useful metrics (`margin`, `delivery_days`) banayein.',
      },
      {
        title: '3. Run Univariate & Multivariate Insights',
        en: 'Compute group summaries, crosstabs, correlations, and plot 3–5 clean, highlight-colored charts.',
        hi: 'Group summaries, crosstabs aur correlations nikalein aur 3–5 clean highlighted charts banayein.',
      },
      {
        title: '4. Publish Executive Summary & Reproducible Repo',
        en: 'Write a 1-page Executive Brief with recommendations, restart & run all cells cleanly, and push to GitHub with a clear `README.md`.',
        hi: 'Clear recommendations ke saath Executive Brief likhein, notebook ko top-to-bottom run karke verify karein aur clean `README.md` ke saath GitHub par publish karein.',
      },
    ],
    codeLabel: 'PYTHON • END-TO-END MINI EDA PROJECT SCRIPT',
    code: `import pandas as pd

# 1. Load raw retail orders (with messy city, duplicate, & outlier)
raw = pd.DataFrame([
    {"id": 1, "city": " delhi ", "days": 2, "amt": 800,  "returned": 0},
    {"id": 1, "city": " delhi ", "days": 2, "amt": 800,  "returned": 0},
    {"id": 2, "city": "Delhi",   "days": 6, "amt": 950,  "returned": 1},
    {"id": 3, "city": "pune",    "days": 3, "amt": 1100, "returned": 0},
    {"id": 4, "city": "Pune ",   "days": 7, "amt": 1200, "returned": 1},
])

# 2. Clean & engineer features
df = (
    raw.drop_duplicates(subset=["id"])
       .assign(
           city=lambda d: d["city"].str.strip().str.title(),
           is_late=lambda d: d["days"] > 4
       )
)

# 3. Synthesize executive insight
summary = df.groupby("is_late", as_index=False).agg(
    orders=("id", "count"),
    avg_amt=("amt", "mean"),
    return_rate_pct=("returned", lambda s: round(s.mean() * 100, 1))
)
print(summary)`,
    codeOutput: `   is_late  orders  avg_amt  return_rate_pct
0    False       2    950.0              0.0
1     True       2   1075.0            100.0`,
    codeCaptionEn: 'In 20 clean lines, raw messy rows became a deduplicated, standardized table proving late deliveries drive returns.',
    codeCaptionHi: 'Sirf 20 clean lines mein messy raw data deduplicate aur clean hokar seedha actionable business insight ban gaya.',
    tableTitle: 'Portfolio-Grade EDA Project Checklist',
    tableHeaders: ['Project Stage', 'Must-Have Deliverable', 'Recruiter Signal'],
    tableRows: [
      ['1. Problem Framing', '3–5 clear business questions in README', 'Shows business thinking'],
      ['2. Data Audit & Cleaning', 'Nulls, duplicates, dtypes, outliers handled', 'Shows engineering rigor'],
      ['3. Visual Storytelling', '3–5 polished charts with action titles', 'Shows communication clarity'],
      ['4. Recommendations', 'Quantified impact + caveats + next steps', 'Shows job-ready DS maturity'],
    ],
    tableNoteEn: 'A crisp 4-chart EDA project with clear business recommendations beats a 50-chart messy notebook in every Data Science portfolio review!',
    tableNoteHi: 'Portfolio review mein 50 messy charts wale notebook se zyada value ek crisp 4-chart + clear business recommendation wale project ki hoti hai!',
    mistakeEn: 'Ending a portfolio notebook with `df.describe()` and 20 unlabeled plots without writing a single sentence of business conclusions or recommendations.',
    mistakeHi: 'Portfolio notebook ko 20 unlabeled charts par khatam kar dena — bina ek bhi line business conclusion ya recommendation likhe!',
    proHabitEn: 'Treat every EDA project like a real consulting engagement: reproducible code, clean visuals, quantified impact, and a scannable `README.md` with your top 3 findings.',
    proHabitHi: 'Har EDA project ko asli consulting project ki tarah banayein: reproducible code, clean visuals, quantified impact aur top 3 findings wala `README.md`.',
    jobUseEn: 'Your EDA portfolio project is often the #1 talking point in Data Analyst & Data Scientist interviews — demonstrating end-to-end ownership from messy CSV to executive decision.',
    jobUseHi: 'Aapka EDA portfolio project Data Analyst aur Data Scientist interviews ka #1 talking point hota hai — jo raw data se executive decision tak ki poori skill dikhata hai.',
    mcq1Question: 'What makes a Data Science EDA portfolio project stand out most to hiring managers?',
    mcq1Correct: 'Clear business questions, disciplined cleaning, a few polished insight-driven charts, and actionable recommendations.',
    mcq1Wrongs: [
      'Including 60 default unformatted charts with no captions.',
      'Skipping data cleaning so the notebook is shorter.',
      'Hiding the code and only uploading a raw CSV.',
    ],
    mcq1Explain: 'Hiring managers look for structured problem-solving, clean code, and the ability to turn data into clear business decisions.',
    mcq2Question: 'Before publishing your EDA project notebook to GitHub, what final verification should you always perform?',
    mcq2Correct: 'Restart the kernel, run all cells cleanly top-to-bottom, and confirm no hardcoded paths or secrets exist.',
    mcq2Wrongs: [
      'Delete all markdown explanations.',
      'Commit your private `.env` API keys.',
      'Hardcode your personal Desktop file path.',
    ],
    mcq2Explain: 'A clean top-to-bottom run with relative paths proves reproducibility and professionalism.',
    realWorldScenario:
      'You build an end-to-end Retail Sales & Churn EDA project on GitHub combining Pandas cleaning, IQR outlier checks, Seaborn highlight charts, and a 1-page Executive Summary — landing interview calls immediately.',
    interviewQ1: 'Walk me through an end-to-end EDA project you built — what surprised you and what did you recommend?',
    interviewA1:
      'Structure your answer in 4 crisp beats: 1) Business problem & dataset scale, 2) Key data-quality bug you caught during audit, 3) Top 1–2 quantified insights backed by visuals, and 4) Concrete business recommendation & measurable impact.',
    interviewQ2: 'How do you decide when EDA is "done" and it is time to move to modeling or presenting?',
    interviewA2:
      'EDA is ready to wrap up when all core business questions are answered with verified data, major quality/leakage risks are resolved, and additional slicing yields diminishing marginal insight.',
  },
];
