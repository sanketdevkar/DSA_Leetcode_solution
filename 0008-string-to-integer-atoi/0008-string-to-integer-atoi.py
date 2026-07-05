class Solution:
    def myAtoi(self, s: str) -> int:
        # Define 32-bit signed integer boundaries
        INT_MIN = -2**31
        INT_MAX = 2**31 - 1
        
        # Step 1: Remove leading whitespace
        s = s.lstrip()
        
        # If the string becomes empty after stripping, return 0
        if not s:
            return 0
            
        # Step 2: Check for signedness
        sign = 1
        index = 0
        
        if s[index] == '-':
            sign = -1
            index += 1
        elif s[index] == '+':
            index += 1
            
        # Step 3: Conversion
        res = 0
        while index < len(s) and s[index].isdigit():
            digit = int(s[index])
            
            # Step 4: Rounding / Overflow Check (Strict 32-bit environment safety)
            if (res > INT_MAX // 10) or (res == INT_MAX // 10 and digit > INT_MAX % 10):
                return INT_MAX if sign == 1 else INT_MIN
                
            res = res * 10 + digit
            index += 1
            
        return res * sign