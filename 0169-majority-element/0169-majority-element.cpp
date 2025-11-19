#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map<int,int> freq;
        for (auto x:nums) {
            freq[x]++;
            if (freq[x]> nums.size()/2)return x;
        }
        return 0;
    }
};