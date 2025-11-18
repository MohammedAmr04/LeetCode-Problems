#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>

using namespace std;

class Solution {
public:
    bool containsDuplicate(std::vector<int>& nums) {
        unordered_set<int> us ;
        for (auto x :nums) {
                        if (us.count(x)) return true;

            us.insert(x);
        }
        return false;
    }
};