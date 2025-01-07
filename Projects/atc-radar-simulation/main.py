import random as RANDOM
import string as STRING
import pygame as PG

from config import (
    FPS,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    SCREEN_BACKGROUND_COLOR,
)

def main() -> None:
    PG.init()
    SCREEN = PG.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    PG.display.set_caption('ATC Radar Simulation')
    CLOCK = PG.time.Clock()

    RUNNING = True

    while RUNNING:
        SCREEN.fill(SCREEN_BACKGROUND_COLOR)
        PG.display.flip()
        CLOCK.tick(FPS)
    PG.quit()

if __name__ == '__main__':
    main()