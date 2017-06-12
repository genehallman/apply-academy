#include <stdio.h>
#include <stdint.h>

int main() {
  char  ch        = 'a';
  char* chPointer = &ch;
  int   asciiInt  = ch;
  char  derefed    = *chPointer;

  printf("%c\n", ch);
  printf("%p\n", chPointer);
  printf("%lu\n", (uintptr_t)chPointer);
  printf("%d\n", asciiInt);
  printf("%c\n", derefed);
}
