from itertools import permutations

N = int(input())
vals = {}
acts = []

for i in range(N):
    inp = input().split()
    acts.append(inp[0])
    vals[inp[0]] = [inp[2], inp[3]]

initial_perms = list(permutations(vals, N))
perms = []
for i in initial_perms:
    if i[0] == "Rest":
        perms.append(i)

final_val = 0
final_itin = []
for itin in perms:
    total = 0
    for i in range(len(itin) - 1):
        x_0 = float(vals[itin[i]][0])
        y_0 = float(vals[itin[i]][1])

        x_1 = float(vals[itin[i + 1]][0])
        y_1 = float(vals[itin[i + 1]][1])
        total += (((x_1 - x_0) ** 2 + (y_1 - y_0) ** 2) ** 0.5) * 1000

        if i == len(itin) - 2:
            x_0 = float(vals[itin[i + 1]][0])
            y_0 = float(vals[itin[i + 1]][1])

            x_1 = float(vals[itin[0]][0])
            y_1 = float(vals[itin[0]][1])
            total += (((x_1 - x_0) ** 2 + (y_1 - y_0) ** 2) ** 0.5) * 1000

    if total < final_val or final_val == 0:
        final_val = total
        final_itin = itin

print(round(final_val, 3))
for i in final_itin:
    print(i)
print("Rest")
