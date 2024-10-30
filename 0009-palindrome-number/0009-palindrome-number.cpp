#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        
        string y = to_string(x);  
        for (int i = 0, j = y.size() - 1; i < j; i++, j--) {  
            if (y[i] != y[j]) {
                return false;
            }
        }
        
        return true;
    }
};
