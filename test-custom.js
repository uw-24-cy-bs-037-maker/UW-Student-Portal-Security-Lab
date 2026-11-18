// Test fixture: line 3 is vulnerable, line 6 is safe
const input = '{"user": "test"}';

eval(input);       // Semgrep MUST flag this bad line

JSON.parse(input); // Semgrep must ignore this safe line