#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string,vector<string>> m;
        for (auto it :strs) {
            string word = it ;
            sort(word.begin(),word.end());
            m[word].push_back(it);
        }
        vector<vector<string>> result;
        for (auto it :m) {
            result.push_back(it.second);
        }
        return result;
    }
};